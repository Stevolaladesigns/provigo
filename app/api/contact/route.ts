import { NextResponse } from 'next/server';
import { db } from '@/lib/firebase';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import nodemailer from 'nodemailer';

export async function POST(request: Request) {
    try {
        const body = await request.json();
        const { fullName, email, inquiryType, message } = body;

        // 1. Basic Validation
        if (!fullName || !email || !message) {
            return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
        }

        // 2. Save to Firebase Firestore
        await addDoc(collection(db, 'contacts'), {
            fullName,
            email,
            inquiryType,
            message,
            createdAt: serverTimestamp(),
            status: 'new'
        });

        // 3. Send Email Notification
        // Only attempt if GMAIL_USER and GMAIL_PASS are set
        if (process.env.GMAIL_USER && process.env.GMAIL_PASS && process.env.GMAIL_PASS !== 'your_app_password_here') {
            const transporter = nodemailer.createTransport({
                service: 'gmail',
                auth: {
                    user: process.env.GMAIL_USER,
                    pass: process.env.GMAIL_PASS,
                },
            });

            const mailOptions = {
                from: process.env.GMAIL_USER,
                to: 'provigogh@gmail.com',
                subject: `New Contact Form Submission: ${inquiryType}`,
                text: `
                    New submission from ProviGo Contact Form:
                    
                    Name: ${fullName}
                    Email: ${email}
                    Inquiry Type: ${inquiryType}
                    Message: ${message}
                `,
                html: `
                    <h3>New Contact Form Submission</h3>
                    <p><strong>Name:</strong> ${fullName}</p>
                    <p><strong>Email:</strong> ${email}</p>
                    <p><strong>Inquiry Type:</strong> ${inquiryType}</p>
                    <p><strong>Message:</strong></p>
                    <p>${message.replace(/\n/g, '<br>')}</p>
                `,
            };

            await transporter.sendMail(mailOptions);
        }

        return NextResponse.json({ success: true, message: 'Message sent successfully' });
    } catch (error: any) {
        console.error('Contact Form Error:', error);
        return NextResponse.json({ error: 'Failed to send message. Please try again later.' }, { status: 500 });
    }
}
