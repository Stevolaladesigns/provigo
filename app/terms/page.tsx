'use client';

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function Terms() {
    return (
        <main>
            <Navbar />
            <section className="page-header" style={{ padding: '120px 0 80px', backgroundColor: 'var(--bg-light)' }}>
                <div className="container" style={{ maxWidth: '800px' }}>
                    <h1 className="section-title">Terms of Service</h1>
                    <div className="glass" style={{ padding: '3rem', borderRadius: '32px', marginTop: '3rem', color: 'var(--text-gray)', lineHeight: '1.8' }}>
                        <p>Welcome to ProviGo. By using our USSD service (*920*332#) and website, you agree to the following terms:</p>
                        <h3 style={{ color: 'var(--text-dark)', marginTop: '2rem' }}>1. Service Overview</h3>
                        <p>ProviGo provides provision procurement and delivery services for students in Ghana.</p>
                        <h3 style={{ color: 'var(--text-dark)', marginTop: '2rem' }}>2. Payments</h3>
                        <p>All payments are processed securely via our partners. Orders are only processed after successful payment verification.</p>
                        <h3 style={{ color: 'var(--text-dark)', marginTop: '2rem' }}>3. Delivery</h3>
                        <p>We aim for delivery within 48-72 hours. ProviGo is not liable for delays caused by incorrect student information or school-imposed restrictions.</p>
                    </div>
                </div>
            </section>
            <Footer />
        </main>
    );
}
