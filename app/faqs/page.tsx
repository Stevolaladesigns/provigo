'use client';

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function FAQ() {
    const faqs = [
        { q: "What is ProviGo?", a: "ProviGo is a service that makes it easy for parents and guardians to send provision supplies to Senior High School students anywhere in Ghana via a simple USSD interface." },
        { q: "How do I place an order?", a: "Simply dial *920*332# on any mobile network in Ghana and follow the on-screen prompts to select a package and provide student details." },
        { q: "Which schools do you deliver to?", a: "We deliver to all Government and Private Senior High Schools across all 16 regions of Ghana." },
        { q: "How long does delivery take?", a: "Orders are typically delivered within 48 to 72 hours after payment verification." },
        { q: "How can I track my order?", a: "You can track your order on our 'Track Order' page using the unique Order ID sent to you via SMS." }
    ];

    return (
        <main>
            <Navbar />
            <section style={{ padding: '120px 0 80px', backgroundColor: 'var(--bg-light)' }}>
                <div className="container" style={{ maxWidth: '800px' }}>
                    <h1 className="section-title">Frequently Asked Questions</h1>
                    <div style={{ marginTop: '3rem', display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                        {faqs.map((faq, i) => (
                            <div key={i} className="glass" style={{ padding: '2rem', borderRadius: '24px' }}>
                                <h3 style={{ fontSize: '1.25rem', marginBottom: '1rem', color: 'var(--text-dark)' }}>{faq.q}</h3>
                                <p style={{ color: 'var(--text-gray)', lineHeight: '1.6' }}>{faq.a}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
            <Footer />
        </main>
    );
}
