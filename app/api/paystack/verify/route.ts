import { NextRequest, NextResponse } from 'next/server';
import { db } from '@/lib/firebase';
import { collection, query, where, getDocs, updateDoc, addDoc, serverTimestamp } from 'firebase/firestore';

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

async function generateOrderId(): Promise<string> {
    const year = new Date().getFullYear();
    const ordersRef = collection(db, 'orders');
    const q = query(ordersRef, where('payment', '==', 'Paid'));
    const snap = await getDocs(q);
    const count = snap.size + 1;
    return `PVG-${year}-${String(count).padStart(4, '0')}`;
}

export async function GET(req: NextRequest) {
    const { searchParams } = new URL(req.url);
    const reference = searchParams.get('reference');

    if (!reference) {
        return NextResponse.json({ error: 'Missing reference' }, { status: 400 });
    }

    try {
        // Verify transaction with Paystack
        const paystackRes = await fetch(`https://api.paystack.co/transaction/verify/${reference}`, {
            headers: {
                Authorization: `Bearer ${process.env.PAYSTACK_SECRET_KEY}`,
            },
        });
        const paystackData = await paystackRes.json();

        if (!paystackData.status || paystackData.data?.status !== 'success') {
            return NextResponse.json({ success: false, message: 'Payment not successful' });
        }

        const { metadata } = paystackData.data;

        // Find the order
        const ordersRef = collection(db, 'orders');
        const q = query(ordersRef, where('paystackRef', '==', reference));
        const snap = await getDocs(q);

        if (snap.empty) {
            return NextResponse.json({ success: false, message: 'Order not found' });
        }

        const orderDoc = snap.docs[0];
        const existingData = orderDoc.data();

        // If already processed by webhook, just return success
        if (existingData.payment === 'Paid') {
            return NextResponse.json({
                success: true,
                orderId: existingData.orderId,
                studentName: existingData.studentName,
                school: existingData.school,
                package: existingData.package,
            });
        }

        // Process the payment (fallback if webhook didn't fire)
        const orderId = await generateOrderId();
        await updateDoc(orderDoc.ref, {
            payment: 'Paid',
            orderId,
            updatedAt: serverTimestamp(),
        });

        const phone = metadata?.phone || existingData.phone;
        const parentName = metadata?.parentName || existingData.parentName;
        const studentName = metadata?.studentName || existingData.studentName;
        const school = metadata?.school || existingData.school;
        const pkgName = metadata?.package || existingData.package;

        // Send SMS
        if (phone) {
            const message = `Hi ${parentName}, your ProviGO order ${orderId} for ${studentName} at ${school} has been confirmed! Delivery to campus will be arranged soon. Thank you! – ProviGO`;
            let smsResult: Record<string, unknown> = {};
            try {
                smsResult = await sendArkeselSMS(phone, message);
            } catch (e) {
                smsResult = { error: String(e) };
            }
            await addDoc(collection(db, 'sms_logs'), {
                orderId,
                phone,
                message,
                type: 'payment_confirmation_fallback',
                result: smsResult,
                sentAt: serverTimestamp(),
            });
        }

        return NextResponse.json({
            success: true,
            orderId,
            studentName,
            school,
            package: pkgName,
        });
    } catch (err) {
        console.error('Verify error:', err);
        return NextResponse.json({ error: 'Server error' }, { status: 500 });
    }
}
