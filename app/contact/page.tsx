'use client';

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function Contact() {
    return (
        <main>
            <Navbar />

            <section className="page-header" style={{ padding: '120px 0 80px', backgroundColor: 'var(--bg-light)' }}>
                <div className="container">
                    <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
                        <h1 className="section-title">
                            Get in <span style={{ color: 'var(--primary)' }}>Touch</span>
                        </h1>
                        <p className="section-subtitle">
                            We're here to help with your ProviGo delivery and orders. Whether you have a question about a package or need support with payment, our team is ready to assist.
                        </p>
                    </div>

                    <div style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                        gap: '3rem',
                        marginTop: '4rem'
                    }}>
                        {/* Left Col - Info */}
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
                            <div className="glass" style={{ padding: '2rem', borderRadius: '24px' }}>
                                <div style={{ color: 'var(--primary)', marginBottom: '1rem' }}>
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" /></svg>
                                </div>
                                <h4 style={{ marginBottom: '0.25rem' }}>Call or WhatsApp</h4>
                                <p style={{ color: 'var(--primary)', fontWeight: 'bold' }}>+233 247 112 620</p>
                            </div>
                            <div className="glass" style={{ padding: '2rem', borderRadius: '24px' }}>
                                <div style={{ color: 'var(--primary)', marginBottom: '1rem' }}>
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m22 2-7 20-4-9-9-4Z" /><path d="M22 2 11 13" /></svg>
                                </div>
                                <h4 style={{ marginBottom: '0.25rem' }}>Email Us</h4>
                                <p style={{ color: 'var(--primary)', fontWeight: 'bold' }}>provigogh@gmail.com</p>
                            </div>
                            <div className="glass" style={{ padding: '2rem', borderRadius: '24px' }}>
                                <h4 style={{ marginBottom: '1rem' }}>Support Topics</h4>
                                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                                    {['Order Help', 'Delivery Updates', 'Package Info', 'Payment Issues'].map((tag) => (
                                        <span key={tag} style={{
                                            padding: '6px 16px',
                                            backgroundColor: 'white',
                                            borderRadius: '50px',
                                            fontSize: '0.8rem',
                                            fontWeight: '500',
                                            border: '1px solid rgba(0,0,0,0.05)'
                                        }}>
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Right Col - Form */}
                        <div style={{
                            backgroundColor: 'white',
                            padding: '3rem',
                            borderRadius: '32px',
                            boxShadow: 'var(--card-shadow)'
                        }}>
                            <h3 style={{ fontSize: '1.75rem', marginBottom: '2rem' }}>Send us a Message</h3>
                            <form style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1.5rem' }}>
                                    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                                        <label style={{ fontSize: '0.9rem', fontWeight: 'bold' }}>Full Name</label>
                                        <input type="text" placeholder="John Doe" style={{
                                            padding: '0.8rem 1rem',
                                            borderRadius: '12px',
                                            border: '1px solid #E2E8F0',
                                            outline: 'none'
                                        }} />
                                    </div>
                                    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                                        <label style={{ fontSize: '0.9rem', fontWeight: 'bold' }}>Email Address</label>
                                        <input type="email" placeholder="john@example.com" style={{
                                            padding: '0.8rem 1rem',
                                            borderRadius: '12px',
                                            border: '1px solid #E2E8F0',
                                            outline: 'none'
                                        }} />
                                    </div>
                                </div>
                                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                                    <label style={{ fontSize: '0.9rem', fontWeight: 'bold' }}>Inquiry Type</label>
                                    <select style={{
                                        padding: '0.8rem 1rem',
                                        borderRadius: '12px',
                                        border: '1px solid #E2E8F0',
                                        outline: 'none',
                                        backgroundColor: 'white'
                                    }}>
                                        <option>Order Assistance</option>
                                        <option>Delivery Inquiry</option>
                                        <option>Payment Support</option>
                                        <option>Other</option>
                                    </select>
                                </div>
                                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                                    <label style={{ fontSize: '0.9rem', fontWeight: 'bold' }}>Your Message</label>
                                    <textarea rows={5} placeholder="Tell us how we can help..." style={{
                                        padding: '0.8rem 1rem',
                                        borderRadius: '12px',
                                        border: '1px solid #E2E8F0',
                                        outline: 'none',
                                        resize: 'none'
                                    }}></textarea>
                                </div>
                                <button type="submit" className="btn-primary" style={{ width: 'fit-content', padding: '1rem 3rem' }}>
                                    SEND MESSAGE ➔
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>

            {/* Map Placeholder */}
            <section style={{ padding: '0 0 80px', backgroundColor: 'var(--bg-light)' }}>
                <div className="container">
                    <div style={{
                        height: '300px',
                        backgroundColor: '#1A202C',
                        borderRadius: '24px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: 'white',
                        flexDirection: 'column',
                        gap: '1rem',
                        position: 'relative',
                        overflow: 'hidden'
                    }}>
                        <div style={{ color: 'var(--primary)', marginBottom: '0.5rem' }}>
                            <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" /><circle cx="12" cy="10" r="3" /></svg>
                        </div>
                        <div style={{ textAlign: 'center', position: 'relative', zIndex: 1 }}>
                            <h4 style={{ color: 'white' }}>Accra Main Office</h4>
                            <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '0.9rem' }}>Visit us for corporate inquiries</p>
                        </div>
                        <div style={{
                            position: 'absolute',
                            top: 0,
                            left: 0,
                            right: 0,
                            bottom: 0,
                            opacity: 0.1,
                            backgroundImage: 'radial-gradient(circle, #009933 1px, transparent 1px)',
                            backgroundSize: '20px 20px'
                        }}></div>
                    </div>
                </div>
            </section>

            <Footer />

            <style jsx>{`
        input:focus, select:focus, textarea:focus {
          border-color: var(--primary) !important;
          box-shadow: 0 0 0 3px rgba(0, 153, 51, 0.1);
        }
        @media (max-width: 768px) {
          .section-title {
            text-align: center;
          }
        }
      `}</style>
        </main>
    );
}
