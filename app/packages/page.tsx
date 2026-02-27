'use client';

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Hero from '@/components/Hero';
import Card from '@/components/Card';
import Link from 'next/link';

export default function Packages() {
    return (
        <main>
            <Navbar />

            <Hero
                title="Our Provision Packages"
                subtitle="Choose the perfect essentials bundle for the term ahead. Expertly curated for students' needs and parent peace of mind."
                imageSrc="/images/packages.png"
            />

            {/* Pricing Section */}
            <section className="responsive-section" style={{ padding: '80px 0', backgroundColor: 'white' }}>
                <div className="container">
                    <div className="responsive-grid" style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                        gap: '2.5rem',
                        alignItems: 'stretch'
                    }}>
                        <Card
                            variant="pricing"
                            title="Starter Package"
                            description="Best for: Basic term support. Essential food and toiletries to get the term started."
                            price="350"
                            features={[
                                "Milo, Nido, Sugar",
                                "Gari, Shito, Biscuits",
                                "Essential Toiletries",
                                "Fast Campus Delivery"
                            ]}
                            badge="Recommended"
                        />
                        <Card
                            variant="pricing"
                            title="Ready Box"
                            description="Best for: Balanced provision support. A comprehensive package for the hungry student."
                            price="580"
                            features={[
                                "Everything in Starter",
                                "Milk, Drinks, Snacks",
                                "Notebooks & Pens",
                                "Additional toiletries",
                                "Priority Handling"
                            ]}
                            recommended={true}
                            badge="Popular Choice"
                        />
                        <Card
                            variant="pricing"
                            title="Dadabee Package"
                            description="Best for: Complete term preparation. The premium choice with double the essentials."
                            price="780"
                            features={[
                                "Double Milo/Nido",
                                "Cornflakes & Assorted snacks",
                                "15 Exercise books",
                                "Large toiletries bundle",
                                "Premium Support"
                            ]}
                            badge="Premium"
                        />
                    </div>
                </div>
            </section>

            {/* What's Inside Section */}
            <section className="responsive-section" style={{ padding: '80px 0', backgroundColor: 'var(--bg-light)' }}>
                <div className="container" style={{ textAlign: 'center' }}>
                    <h2 className="section-title">What's Inside Our Boxes</h2>
                    <p className="section-subtitle">We only include premium products from brands you trust, ensuring your child gets the best.</p>

                    <div className="responsive-grid" style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                        gap: '2rem',
                        marginTop: '3rem'
                    }}>
                        {[
                            { title: "High-Quality Groceries", desc: "Essential nutritious provisions like Milo, Nido, and Gari.", icon: <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z" /><line x1="3" y1="6" x2="21" y2="6" /><path d="M16 10a4 4 0 0 1-8 0" /></svg> },
                            { title: "Academic Essentials", desc: "Books, pens, and paper to support their studies.", icon: <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" /><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" /></svg> },
                            { title: "Full Hygiene Kits", desc: "Daily care items for students to stay fresh.", icon: <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M7 11v8a2 2 0 0 1-2 2H3" /><path d="M15 11v8a2 2 0 0 0 2 2h2" /><path d="M10 3a2 2 0 0 1 2-2 2 2 0 0 1 2 2" /><rect x="8" y="7" width="8" height="14" rx="2" /></svg> }
                        ].map((item, idx) => (
                            <div key={idx} className="glass" style={{
                                padding: '3rem 2rem',
                                borderRadius: '32px',
                                textAlign: 'left',
                                display: 'flex',
                                flexDirection: 'column',
                                gap: '1rem'
                            }}>
                                <div style={{ marginBottom: '1rem', color: 'var(--primary)' }}>{item.icon}</div>
                                <h3 style={{ fontSize: '1.5rem', fontWeight: '800' }}>{item.title}</h3>
                                <p style={{ color: 'var(--text-gray)' }}>{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Final CTA */}
            <section className="responsive-section" style={{ padding: '80px 0' }}>
                <div className="container">
                    <div style={{
                        backgroundColor: 'var(--primary)',
                        borderRadius: '32px',
                        padding: '4rem',
                        color: 'white',
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        gap: '2rem',
                        flexWrap: 'wrap'
                    }}>
                        <div style={{ flex: '1', minWidth: '300px' }}>
                            <h2 style={{ color: 'white', fontSize: '2.5rem', marginBottom: '1rem' }}>Ready to stock up?</h2>
                            <p style={{ color: 'rgba(255,255,255,0.9)', fontSize: '1.1rem' }}>
                                Order now and we'll deliver directly to your child's school within 48 hours. Secure payments and tracking included.
                            </p>
                        </div>
                        <div style={{ display: 'flex', gap: '1rem', alignItems: 'center', flexWrap: 'wrap' }}>
                            <Link href="tel:*920*332#" className="btn-secondary" style={{ backgroundColor: 'white', color: 'var(--text-dark)', border: 'none', padding: '1rem 2.5rem' }}>
                                Order Now
                            </Link>
                            <Link href="/how-it-works" style={{ color: 'white', fontWeight: '600', textDecoration: 'underline' }}>
                                How It Works →
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />

            <style jsx>{`
                @media (max-width: 768px) {
                    .responsive-grid {
                        grid-template-columns: 1fr !important;
                        gap: 2rem !important;
                    }
                    .responsive-section {
                        padding: 60px 0 !important;
                    }
                    h2 {
                        font-size: 2rem !important;
                    }
                    .container > div[style*="padding: 4rem"] {
                        padding: 2.5rem 1.5rem !important;
                        text-align: center !important;
                    }
                    div[style*="justify-content: space-between"] {
                        justify-content: center !important;
                    }
                }
            `}</style>
        </main>
    );
}
