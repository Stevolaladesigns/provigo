'use client';

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function TrackOrder() {
    return (
        <main>
            <Navbar />

            <section className="responsive-section" style={{ padding: '120px 0 80px', backgroundColor: 'var(--bg-light)', minHeight: '80vh' }}>
                <div className="container">
                    <div style={{ maxWidth: '700px', margin: '0 auto' }}>
                        <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
                            <h1 className="section-title">Track Your Order</h1>
                            <p className="section-subtitle">
                                Enter your Order ID to see the real-time status of your provision delivery.
                            </p>
                        </div>

                        <div className="glass track-card" style={{ padding: '3rem', borderRadius: '32px', textAlign: 'center' }}>
                            <div className="input-group" style={{ display: 'flex', gap: '1rem', marginBottom: '2rem' }}>
                                <input
                                    type="text"
                                    placeholder="Enter Order ID"
                                    style={{
                                        flex: 1,
                                        padding: '1rem 1.5rem',
                                        borderRadius: '16px',
                                        border: '1px solid #E2E8F0',
                                        fontSize: '1.1rem',
                                        outline: 'none'
                                    }}
                                />
                                <button className="btn-primary" style={{ padding: '0 2rem', minHeight: '56px' }}>
                                    Track
                                </button>
                            </div>

                            <div style={{ textAlign: 'left', marginTop: '3rem' }}>
                                <h4 style={{ marginBottom: '2rem', fontSize: '1.25rem' }}>Order Status</h4>

                                <div style={{ display: 'flex', flexDirection: 'column', gap: '0' }}>
                                    {[
                                        { label: 'Payment Verified', status: 'completed', date: 'Oct 12, 10:30 AM' },
                                        { label: 'Package Prepared', status: 'completed', date: 'Oct 12, 02:15 PM' },
                                        { label: 'Direct School Delivery', status: 'current', date: 'Estimated: Oct 13' },
                                        { label: 'Real-time Tracking', status: 'pending', date: '--' }
                                    ].map((step, idx, arr) => (
                                        <div key={idx} style={{ display: 'flex', gap: '1.5rem', position: 'relative' }}>
                                            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                                                <div style={{
                                                    width: '24px',
                                                    height: '24px',
                                                    borderRadius: '50%',
                                                    backgroundColor: step.status === 'completed' || step.status === 'current' ? 'var(--primary)' : '#E2E8F0',
                                                    border: step.status === 'current' ? '4px solid rgba(0, 153, 51, 0.2)' : 'none',
                                                    zIndex: 2
                                                }} />
                                                {idx !== arr.length - 1 && (
                                                    <div style={{
                                                        width: '2px',
                                                        flex: 1,
                                                        backgroundColor: step.status === 'completed' ? 'var(--primary)' : '#E2E8F0',
                                                        margin: '4px 0',
                                                        minHeight: '40px'
                                                    }} />
                                                )}
                                            </div>
                                            <div style={{ paddingBottom: '2.5rem', flex: 1 }}>
                                                <h5 style={{
                                                    fontSize: '1.1rem',
                                                    margin: 0,
                                                    color: step.status === 'pending' ? 'var(--text-light)' : 'var(--text-dark)',
                                                    fontWeight: step.status === 'current' ? '800' : '600'
                                                }}>
                                                    {step.label}
                                                </h5>
                                                <p style={{ fontSize: '0.85rem', color: 'var(--text-light)', margin: '4px 0 0' }}>
                                                    {step.date}
                                                </p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                        <div className="hint-box" style={{ marginTop: '3rem', padding: '2rem', borderRadius: '24px', border: '1px dashed var(--primary)', textAlign: 'center' }}>
                            <p style={{ fontSize: '0.9rem', color: 'var(--text-gray)', margin: 0 }}>
                                💡 <strong>Can't find your Order ID?</strong> Check your SMS inbox for the unique PV number sent after payment verification.
                            </p>
                        </div>
                    </div>
                </div>

                <style jsx>{`
                    @media (max-width: 768px) {
                        .responsive-section {
                            padding: 80px 0 60px !important;
                        }
                        .track-card {
                            padding: 2rem 1.5rem !important;
                        }
                        .input-group {
                            flex-direction: column !important;
                        }
                        .input-group button {
                            width: 100% !important;
                        }
                        .hint-box {
                            padding: 1.5rem !important;
                        }
                    }
                `}</style>
            </section>

            <Footer />
        </main>
    );
}
