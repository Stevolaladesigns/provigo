'use client';

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Hero from '@/components/Hero';
import Card from '@/components/Card';
import Image from 'next/image';
import Link from 'next/link';

export default function HowItWorks() {
    return (
        <main>
            <Navbar />

            <Hero
                title="How ProviGo Works"
                subtitle="Send provisions to students seamlessly. From your phone to their dorm, we handle the heavy lifting."
                imageSrc="/images/how-it-work.jpeg"
            />

            {/* Simple Ordering Section */}
            <section className="responsive-section" style={{ padding: '80px 0', backgroundColor: 'white' }}>
                <div className="container" style={{ textAlign: 'center' }}>
                    <h2 className="section-title">Simple Ordering in 4 Steps</h2>
                    <p className="section-subtitle">Our USSD platform makes it easy to order from any mobile device.</p>

                    <div className="responsive-grid" style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
                        gap: '2rem',
                        marginTop: '3rem'
                    }}>
                        {[
                            { icon: <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="5" y="2" width="14" height="20" rx="2" ry="2" /><line x1="12" y1="18" x2="12.01" y2="18" /></svg>, title: '1. Dial USSD', desc: 'Dial *920*332# on your phone to start the session.' },
                            { icon: <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z" /><path d="m3.3 7 8.7 5 8.7-5" /><path d="M12 22V12" /></svg>, title: '2. Choose Package', desc: 'Browse and select your preferred provision package from our curated list.' },
                            { icon: <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M22 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" /></svg>, title: '3. Student Details', desc: 'Enter student name, school name, and dormitory/house details.' },
                            { icon: <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="1" y="4" width="22" height="16" rx="2" ry="2" /><line x1="1" y1="10" x2="23" y2="10" /></svg>, title: '4. Confirm & Pay', desc: 'Verify details and pay securely via Mobile Money to finalize the order.' }
                        ].map((step, idx) => (
                            <div key={idx} style={{
                                padding: '2rem',
                                backgroundColor: 'var(--bg-light)',
                                borderRadius: '24px',
                                textAlign: 'center'
                            }}>
                                <div style={{ marginBottom: '1.5rem', display: 'flex', justifyContent: 'center', color: 'var(--primary)' }}>{step.icon}</div>
                                <h3 style={{ fontSize: '1.25rem', marginBottom: '1rem' }}>{step.title}</h3>
                                <p style={{ fontSize: '0.9rem', color: 'var(--text-gray)' }}>{step.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Delivery Process Section */}
            <section className="responsive-section" style={{ padding: '80px 0', backgroundColor: 'var(--bg-light)' }}>
                <div className="container">
                    <div className="process-container" style={{
                        backgroundColor: 'white',
                        borderRadius: '32px',
                        padding: '4rem',
                        boxShadow: 'var(--card-shadow)'
                    }}>
                        <h2 className="section-title" style={{ textAlign: 'center' }}>The Delivery Process</h2>
                        <p className="section-subtitle" style={{ textAlign: 'center' }}>
                            What happens after you pay? We ensure a smooth journey to the student.
                        </p>

                        <div className="process-grid" style={{
                            display: 'grid',
                            gridTemplateColumns: '1fr 1fr',
                            gap: '4rem',
                            alignItems: 'center',
                            marginTop: '4rem'
                        }}>
                            <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
                                {[
                                    { step: '1', title: 'Payment Verification', desc: "Our system immediately confirms your payment and generates a unique Order ID. You'll receive an SMS confirmation instantly." },
                                    { step: '2', title: 'Package Preparation', desc: 'Provisions are carefully selected and packed in our fulfillment centers, ensuring all items are fresh and properly sealed for transport.' },
                                    { step: '3', title: 'Direct School Delivery', desc: "Our logistics team delivers the package directly to the student's school campus. We coordinate with school authorities to ensure safe handover." },
                                    { step: '4', title: 'Real-time Tracking', desc: "Track your package every step of the way using our 'Track Order' tool. You'll receive a final SMS when the student receives their package." }
                                ].map((item) => (
                                    <div key={item.step} style={{ display: 'flex', gap: '1.5rem' }}>
                                        <div style={{
                                            minWidth: '40px',
                                            height: '40px',
                                            borderRadius: '50%',
                                            backgroundColor: 'var(--primary)',
                                            color: 'white',
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            fontWeight: 'bold',
                                            fontSize: '1.1rem'
                                        }}>
                                            {item.step}
                                        </div>
                                        <div>
                                            <h4 style={{ fontSize: '1.25rem', marginBottom: '0.5rem' }}>{item.title}</h4>
                                            <p style={{ fontSize: '0.95rem', color: 'var(--text-gray)' }}>{item.desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                            <div className="process-image" style={{ position: 'relative', height: '450px', borderRadius: '24px', overflow: 'hidden' }}>
                                <Image
                                    src="/images/delivery.jpeg"
                                    alt="Delivery Process"
                                    fill
                                    style={{ objectFit: 'cover' }}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="responsive-section" style={{ padding: '80px 0', textAlign: 'center' }}>
                <div className="container">
                    <h2 className="section-title">Ready to send provisions?</h2>
                    <p className="section-subtitle">Join thousands of parents who trust ProviGo for their children's school supply needs.</p>
                    <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
                        <Link href="tel:*920*332#" className="btn-primary">Start Your Order</Link>
                        <Link href="/packages" className="btn-secondary">View Packages</Link>
                    </div>
                </div>
            </section>

            <Footer />

            <style jsx>{`
                @media (max-width: 968px) {
                    .process-grid {
                        grid-template-columns: 1fr !important;
                        gap: 3rem !important;
                    }
                    .process-image {
                        height: 300px !important;
                        order: -1;
                    }
                    .process-container {
                        padding: 2.5rem 1.5rem !important;
                    }
                }
                @media (max-width: 768px) {
                    .responsive-grid {
                        grid-template-columns: 1fr !important;
                    }
                    .responsive-section {
                        padding: 60px 0 !important;
                    }
                }
            `}</style>
        </main>
    );
}
