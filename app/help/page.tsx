'use client';

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function Help() {
    return (
        <main>
            <Navbar />
            <section className="page-header" style={{ padding: '120px 0 80px', backgroundColor: 'var(--bg-light)' }}>
                <div className="container" style={{ maxWidth: '800px', textAlign: 'center' }}>
                    <h1 className="section-title">Help Center</h1>
                    <p className="section-subtitle">Need assistance with your order? We're here to help.</p>

                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '2rem', marginTop: '4rem' }}>
                        <div className="glass" style={{ padding: '2.5rem', borderRadius: '24px' }}>
                            <div style={{ color: 'var(--primary)', marginBottom: '1.5rem', display: 'flex', justifyContent: 'center' }}>
                                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" /></svg>
                            </div>
                            <h3>Call Us</h3>
                            <p style={{ color: 'var(--text-gray)', marginTop: '0.5rem' }}>+233 247 112 620</p>
                        </div>
                        <div className="glass" style={{ padding: '2.5rem', borderRadius: '24px' }}>
                            <div style={{ color: 'var(--primary)', marginBottom: '1.5rem', display: 'flex', justifyContent: 'center' }}>
                                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="16" x="2" y="4" rx="2" /><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" /></svg>
                            </div>
                            <h3>Email Us</h3>
                            <p style={{ color: 'var(--text-gray)', marginTop: '0.5rem' }}>provigogh@gmail.com</p>
                        </div>
                        <div className="glass" style={{ padding: '2.5rem', borderRadius: '24px' }}>
                            <div style={{ color: 'var(--primary)', marginBottom: '1.5rem', display: 'flex', justifyContent: 'center' }}>
                                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" /></svg>
                            </div>
                            <h3>WhatsApp</h3>
                            <p style={{ color: 'var(--text-gray)', marginTop: '0.5rem' }}>Available 24/7</p>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </main>
    );
}
