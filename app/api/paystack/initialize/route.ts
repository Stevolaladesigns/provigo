import { NextRequest, NextResponse } from 'next/server';
import { db } from '@/lib/firebase';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';

export async function POST(req: NextRequest) {
    try {
        const body = await req.json();
        const { package: pkgName, packageId, packagePrice, parentName, phone, studentName, school, houseYear } = body;

        // Validate required fields
        if (!pkgName || !packagePrice || !parentName || !phone || !studentName || !school || !houseYear) {
            return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
        }

        // Generate a unique Paystack reference
        const reference = `PVG${Date.now()}${Math.random().toString(36).substring(2, 6).toUpperCase()}`;
        const email = `${phone.replace(/\s/g, '')}@provigogh.com`;

        // Store pending order in Firestore (matching dashboard schema)
        await addDoc(collection(db, 'orders'), {
            orderId: 'Pending',
            studentName,
            school,
            houseYear,
            package: pkgName,
            packagePrice,
            payment: 'Pending',
            status: 'Processing',
            phone,
            parentName,
            paystackRef: reference,
            source: 'web',
            date: serverTimestamp(),
            createdAt: serverTimestamp(),
            updatedAt: serverTimestamp(),
        });

        // We DO NOT initialize Paystack server-side here when using the Inline Popup.
        // Paystack Inline automatically initializes the transaction from the frontend.
        // We just need to give the frontend the securely generated reference to tie the webhook later.
        
        return NextResponse.json({
            reference,
            email
        });

    } catch (err) {
        console.error('Initialize error:', err);
        return NextResponse.json({ error: 'Server error. Please try again.' }, { status: 500 });
    }
}
