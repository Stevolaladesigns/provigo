'use client';

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Hero from '@/components/Hero';
import Image from 'next/image';
import Link from 'next/link';

export default function About() {
    return (
        <main>
            <Navbar />

            <Hero
                title="About ProviGo"
                subtitle="Bridge the gap between home and campus with Ghana's most reliable provision delivery service. Supporting students since 2023."
                imageSrc="/images/about.jpeg"
            />

            {/* Redesigned Mission & Vision Section */}
            <section style={{
                padding: '100px 0',
                backgroundColor: 'white',
                position: 'relative',
                overflow: 'hidden'
            }}>
                {/* Decorative background elements */}
                <div style={{
                    position: 'absolute',
                    top: '10%',
                    right: '-5%',
                    width: '400px',
                    height: '400px',
                    background: 'radial-gradient(circle, rgba(0, 153, 51, 0.05) 0%, transparent 70%)',
                    borderRadius: '50%',
                    zIndex: 0
                }}></div>
                <div style={{
                    position: 'absolute',
                    bottom: '10%',
                    left: '-5%',
                    width: '300px',
                    height: '300px',
                    background: 'radial-gradient(circle, rgba(0, 153, 51, 0.03) 0%, transparent 70%)',
                    borderRadius: '50%',
                    zIndex: 0
                }}></div>

                <div className="container" style={{ position: 'relative', zIndex: 1 }}>
                    <div style={{ textAlign: 'center', marginBottom: '5rem' }}>
                        <span style={{
                            color: 'var(--primary)',
                            fontWeight: '700',
                            textTransform: 'uppercase',
                            letterSpacing: '0.1em',
                            fontSize: '0.9rem'
                        }}>Our Purpose</span>
                        <h2 className="section-title" style={{ marginTop: '0.5rem', fontSize: '3rem' }}>Driving Impact Through Delivery</h2>
                        <div style={{
                            width: '80px',
                            height: '4px',
                            backgroundColor: 'var(--primary)',
                            margin: '1.5rem auto',
                            borderRadius: '2px'
                        }}></div>
                    </div>

                    <div style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
                        gap: '3rem',
                        alignItems: 'stretch'
                    }}>
                        {/* Mission Card */}
                        <div className="mv-card" style={{
                            backgroundColor: 'white',
                            padding: '4rem 3rem',
                            borderRadius: '40px',
                            boxShadow: '0 20px 50px rgba(0,0,0,0.05)',
                            border: '1px solid rgba(0, 153, 51, 0.1)',
                            position: 'relative',
                            transition: 'all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)'
                        }}>
                            <div className="mv-icon-wrapper" style={{
                                width: '80px',
                                height: '80px',
                                backgroundColor: 'var(--primary)',
                                borderRadius: '24px',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                color: 'white',
                                marginBottom: '2.5rem',
                                boxShadow: '0 10px 25px rgba(0, 153, 51, 0.3)'
                            }}>
                                <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="m22 2-7 20-4-9-9-4Z" /><path d="M22 2 11 13" /></svg>
                            </div>
                            <h3 style={{ fontSize: '2rem', marginBottom: '1.5rem', fontWeight: '800', color: 'var(--text-dark)' }}>Our Mission</h3>
                            <p style={{
                                color: 'var(--text-gray)',
                                margin: 0,
                                lineHeight: '1.8',
                                fontSize: '1.1rem'
                            }}>
                                To revolutionize student logistics in Ghana by providing a seamless, digital-first provision delivery platform that removes the stress of sourcing and transport for parents and guardians.
                            </p>
                        </div>

                        {/* Vision Card */}
                        <div className="mv-card" style={{
                            backgroundColor: '#1A202C',
                            padding: '4rem 3rem',
                            borderRadius: '40px',
                            boxShadow: '0 25px 60px rgba(0,0,0,0.2)',
                            position: 'relative',
                            color: 'white',
                            transition: 'all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)'
                        }}>
                            <div className="mv-icon-wrapper" style={{
                                width: '80px',
                                height: '80px',
                                backgroundColor: 'white',
                                borderRadius: '24px',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                color: 'var(--primary)',
                                marginBottom: '2.5rem',
                                boxShadow: '0 10px 25px rgba(255, 255, 255, 0.1)'
                            }}>
                                <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z" /><circle cx="12" cy="12" r="3" /></svg>
                            </div>
                            <h3 style={{ fontSize: '2rem', marginBottom: '1.5rem', fontWeight: '800', color: 'white' }}>Our Vision</h3>
                            <p style={{
                                color: 'rgba(255, 255, 255, 0.7)',
                                margin: 0,
                                lineHeight: '1.8',
                                fontSize: '1.1rem'
                            }}>
                                To become the primary choice for student welfare services in West Africa, setting the standard for reliability, speed, and community support in the educational sector.
                            </p>
                        </div>
                    </div>
                </div>

                <style jsx>{`
                    .mv-card:hover {
                        transform: translateY(-15px);
                        box-shadow: 0 30px 70px rgba(0, 153, 51, 0.1) !important;
                    }
                    .mv-card:hover .mv-icon-wrapper {
                        transform: rotate(-5deg) scale(1.1);
                    }
                    @media (max-width: 768px) {
                        .mv-card {
                            padding: 3rem 2rem !important;
                        }
                        .container > div[style*="grid-template-columns"] {
                            grid-template-columns: 1fr !important;
                            gap: 2rem !important;
                        }
                        .section-title {
                            font-size: 2.25rem !important;
                        }
                    }
                `}</style>
            </section>

            {/* Why Choose Us Section */}
            <section style={{ padding: '80px 0', backgroundColor: 'var(--bg-light)' }}>
                <div className="container" style={{ textAlign: 'center' }}>
                    <h2 className="section-title">Why Families Choose Us</h2>

                    <div style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                        gap: '2rem',
                        marginTop: '3rem'
                    }}>
                        {[
                            { icon: <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /></svg>, title: 'Reliability', desc: 'We guarantee your delivery arrives safely and on time, every time.' },
                            { icon: <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" /><circle cx="12" cy="10" r="3" /></svg>, title: 'Ghana-Wide', desc: 'Our network covers major SHS campuses across all regions of Ghana.' },
                            { icon: <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 10v6M2 10l10-5 10 5-10 5z" /><path d="M6 12v5c0 1.1.9 2 2 2h8a2 2 0 0 0 2-2v-5" /></svg>, title: 'Student-Centric', desc: 'We tailor our packages and schedules around the school calendar.' }
                        ].map((item, idx) => (
                            <div key={idx} style={{
                                padding: '2.5rem',
                                backgroundColor: 'white',
                                borderRadius: '24px',
                                boxShadow: 'var(--card-shadow)',
                                textAlign: 'center'
                            }}>
                                <div style={{ color: 'var(--primary)', marginBottom: '1.5rem', display: 'flex', justifyContent: 'center' }}>{item.icon}</div>
                                <h4 style={{ fontSize: '1.25rem', marginBottom: '1rem' }}>{item.title}</h4>
                                <p style={{ fontSize: '0.95rem', color: 'var(--text-gray)', margin: 0 }}>{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section style={{ padding: '80px 0' }}>
                <div className="container">
                    <div style={{
                        backgroundColor: 'var(--primary)',
                        borderRadius: '32px',
                        padding: '4rem',
                        textAlign: 'center',
                        color: 'white',
                        background: 'linear-gradient(135deg, #009933 0%, #00802b 100%)'
                    }}>
                        <h2 style={{ color: 'white', fontSize: '2.5rem', marginBottom: '1.5rem' }}>Ready to support your student?</h2>
                        <p style={{ color: 'rgba(255,255,255,0.9)', fontSize: '1.1rem', marginBottom: '2.5rem' }}>
                            Browse our packages and start your first delivery today.
                        </p>
                        <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
                            <Link href="/packages" className="btn-secondary" style={{ backgroundColor: '#1A202C', color: 'white', border: 'none', padding: '1rem 2.5rem' }}>
                                View Packages
                            </Link>
                            <Link href="/contact" className="btn-secondary" style={{ backgroundColor: 'white', color: 'var(--primary)', border: 'none', padding: '1rem 2.5rem' }}>
                                Contact Support
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
