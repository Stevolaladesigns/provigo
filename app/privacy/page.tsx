'use client';

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function Privacy() {
    return (
        <main>
            <Navbar />
            <section style={{ padding: '120px 0 80px', backgroundColor: 'var(--bg-light)' }}>
                <div className="container" style={{ maxWidth: '800px' }}>
                    <h1 className="section-title">Privacy Policy</h1>
                    <div className="glass" style={{ padding: '3rem', borderRadius: '32px', marginTop: '3rem', color: 'var(--text-gray)', lineHeight: '1.8' }}>
                        <p>Your privacy is important to us. This policy outlines how ProviGo handles your data.</p>
                        <h3 style={{ color: 'var(--text-dark)', marginTop: '2rem' }}>1. Data Collection</h3>
                        <p>We collect student names, school details, and sender contact information solely for the purpose of fulfilling deliveries.</p>
                        <h3 style={{ color: 'var(--text-dark)', marginTop: '2rem' }}>2. Data Usage</h3>
                        <p>Your data is used to coordinate logistics and provide order status updates via SMS.</p>
                        <h3 style={{ color: 'var(--text-dark)', marginTop: '2rem' }}>3. Security</h3>
                        <p>We implement industry-standard security measures to protect your information from unauthorized access.</p>
                    </div>
                </div>
            </section>
            <Footer />
        </main>
    );
}
