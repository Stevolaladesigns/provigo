'use client';

import { useEffect, useState, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Link from 'next/link';

function SuccessContent() {
    const searchParams = useSearchParams();
    const [orderId, setOrderId] = useState<string | null>(null);
    const [verifying, setVerifying] = useState(true);

    const ref = searchParams.get('ref') || '';
    const pkg = searchParams.get('pkg') || '';
    const school = searchParams.get('school') || '';
    const student = searchParams.get('student') || '';
    const phone = searchParams.get('phone') || '';

    useEffect(() => {
        if (!ref) { setVerifying(false); return; }

        // Call verify endpoint to confirm payment & get orderId
        fetch(`/api/paystack/verify?reference=${ref}`)
            .then(r => r.json())
            .then(data => {
                if (data.orderId) setOrderId(data.orderId);
            })
            .catch(() => {/* silently fail — webhook may have handled it */})
            .finally(() => setVerifying(false));
    }, [ref]);

    return (
        <main>
            <Navbar />

            <section style={{ minHeight: '100vh', padding: '120px 0 80px', backgroundColor: 'var(--bg-light)', display: 'flex', alignItems: 'center' }}>
                <div className="container" style={{ maxWidth: 640, textAlign: 'center' }}>

                    {/* Success Icon */}
                    <div style={{ width: 100, height: 100, borderRadius: '50%', backgroundColor: 'rgba(0,153,51,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 2rem' }}>
                        <svg width="52" height="52" viewBox="0 0 24 24" fill="none" stroke="var(--primary)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                            <polyline points="22 4 12 14.01 9 11.01" />
                        </svg>
                    </div>

                    <h1 style={{ fontSize: 'clamp(2rem,5vw,2.8rem)', fontWeight: 900, color: 'var(--text-dark)', marginBottom: '1rem' }}>
                        Order Confirmed! 🎉
                    </h1>
                    <p style={{ fontSize: '1.1rem', color: 'var(--text-gray)', marginBottom: '2.5rem', lineHeight: 1.7 }}>
                        Your payment was successful. We will prepare and deliver the package to campus soon!
                    </p>

                    {/* Order Details Card */}
                    <div style={{ backgroundColor: 'white', borderRadius: 20, padding: '2rem', boxShadow: 'var(--card-shadow)', marginBottom: '2rem', textAlign: 'left' }}>
                        <h3 style={{ fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '0.6px', color: 'var(--text-light)', marginBottom: '1.25rem' }}>Order Details</h3>

                        {verifying ? (
                            <p style={{ color: 'var(--text-gray)', fontSize: '0.9rem' }}>Confirming your order…</p>
                        ) : (
                            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                                {orderId && (
                                    <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.95rem' }}>
                                        <span style={{ color: 'var(--text-gray)' }}>Order ID</span>
                                        <span style={{ fontWeight: 800, color: 'var(--primary)', fontSize: '1rem' }}>{orderId}</span>
                                    </div>
                                )}
                                {pkg && (
                                    <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.95rem' }}>
                                        <span style={{ color: 'var(--text-gray)' }}>Package</span>
                                        <span style={{ fontWeight: 700 }}>{pkg}</span>
                                    </div>
                                )}
                                {student && (
                                    <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.95rem' }}>
                                        <span style={{ color: 'var(--text-gray)' }}>Student</span>
                                        <span style={{ fontWeight: 700 }}>{student}</span>
                                    </div>
                                )}
                                {school && (
                                    <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.95rem' }}>
                                        <span style={{ color: 'var(--text-gray)' }}>School</span>
                                        <span style={{ fontWeight: 700 }}>{school}</span>
                                    </div>
                                )}
                                {phone && (
                                    <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.95rem' }}>
                                        <span style={{ color: 'var(--text-gray)' }}>SMS sent to</span>
                                        <span style={{ fontWeight: 700 }}>{phone}</span>
                                    </div>
                                )}
                            </div>
                        )}

                        <div style={{ marginTop: '1.5rem', padding: '1rem', backgroundColor: 'rgba(0,153,51,0.06)', borderRadius: 10, borderLeft: '4px solid var(--primary)' }}>
                            <p style={{ fontSize: '0.87rem', color: 'var(--text-gray)', lineHeight: 1.6 }}>
                                📱 An SMS confirmation has been sent to <strong>{phone}</strong>. You will receive another SMS when your package is delivered to campus.
                            </p>
                        </div>
                    </div>

                    {/* Action buttons */}
                    <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
                        <Link href="/track-order" className="btn-primary" style={{ padding: '0.9rem 2rem' }}>
                            Track Your Order
                        </Link>
                        <Link href="/" className="btn-secondary" style={{ padding: '0.9rem 2rem' }}>
                            Back to Home
                        </Link>
                    </div>

                    <p style={{ marginTop: '2rem', fontSize: '0.85rem', color: 'var(--text-light)' }}>
                        Questions? Contact us at{' '}
                        <a href="mailto:provigogh@gmail.com" style={{ color: 'var(--primary)', fontWeight: 600 }}>provigogh@gmail.com</a>
                    </p>
                </div>
            </section>

            <Footer />
        </main>
    );
}

export default function SuccessPage() {
    return (
        <Suspense fallback={<div style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}><p>Loading…</p></div>}>
            <SuccessContent />
        </Suspense>
    );
}
