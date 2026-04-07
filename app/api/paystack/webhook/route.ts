import { NextRequest, NextResponse } from 'next/server';
import { db } from '@/lib/firebase';
import { collection, query, where, getDocs, updateDoc, addDoc, serverTimestamp } from 'firebase/firestore';
import crypto from 'crypto';

// --- Arkesel SMS sender ---
async function sendArkeselSMS(to: string, message: string) {
    const res = await fetch('https://sms.arkesel.com/api/v2/sms/send', {
        method: 'POST',
        headers: {
            'api-key': process.env.ARKESEL_API_KEY!,
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            sender: process.env.ARKESEL_SENDER_ID || 'ProviGO',
            message,
            recipients: [to],
        }),
    });
    return res.json();
}

// --- Generate sequential Order ID ---
async function generateOrderId(): Promise<string> {
    const year = new Date().getFullYear();
    const ordersRef = collection(db, 'orders');
    const q = query(ordersRef, where('payment', '==', 'Paid'));
    const snap = await getDocs(q);
    const count = snap.size + 1;
    return `PVG-${year}-${String(count).padStart(4, '0')}`;
}

export async function POST(req: NextRequest) {
    const rawBody = await req.text();
    const signature = req.headers.get('x-paystack-signature');

    // Verify Paystack HMAC signature
    const hash = crypto
        .createHmac('sha512', process.env.PAYSTACK_SECRET_KEY!)
        .update(rawBody)
        .digest('hex');

    if (hash !== signature) {
        console.warn('Paystack webhook: invalid signature');
        return NextResponse.json({ error: 'Invalid signature' }, { status: 400 });
    }

    const event = JSON.parse(rawBody);

    if (event.event === 'charge.success') {
        const { reference, metadata } = event.data;
        const { phone, parentName, studentName, school, package: pkgName } = metadata || {};

        try {
            // Find the pending order by paystackRef
            const ordersRef = collection(db, 'orders');
            const q = query(ordersRef, where('paystackRef', '==', reference));
            const snap = await getDocs(q);

            if (!snap.empty) {
                const orderDoc = snap.docs[0];
                const existingData = orderDoc.data();

                // Skip if already processed
                if (existingData.payment === 'Paid') {
                    return NextResponse.json({ received: true });
                }

                const orderId = await generateOrderId();

                // Update order to Paid
                await updateDoc(orderDoc.ref, {
                    payment: 'Paid',
                    orderId,
                    updatedAt: serverTimestamp(),
                });

                // Send SMS confirmation
                const safePhone = phone || existingData.phone;
                const safeName = parentName || existingData.parentName;
                const safeStudent = studentName || existingData.studentName;
                const safeSchool = school || existingData.school;

                let smsResult: Record<string, unknown> = {};

                if (safePhone) {
                    const message = `Hi ${safeName}, your ProviGO order ${orderId} for ${safeStudent} at ${safeSchool} has been confirmed! Delivery to campus will be arranged soon. Thank you! – ProviGO`;
                    try {
                        smsResult = await sendArkeselSMS(safePhone, message);
                    } catch (smsErr) {
                        smsResult = { error: String(smsErr) };
                    }

                    // Log SMS to Firestore
                    await addDoc(collection(db, 'sms_logs'), {
                        orderId,
                        phone: safePhone,
                        message,
                        type: 'payment_confirmation',
                        result: smsResult,
                        sentAt: serverTimestamp(),
                    });
                }

                console.log(`Order ${orderId} confirmed. SMS result:`, smsResult);
            } else {
                console.warn(`No order found for ref: ${reference}`);
            }
        } catch (err) {
            console.error('Webhook processing error:', err);
        }
    }

    return NextResponse.json({ received: true });
}
