'use client';

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Hero from '@/components/Hero';

import Link from 'next/link';
import Image from 'next/image';

export default function Home() {
  return (
    <main>
      <Navbar />

      <Hero
        title="Your Child's Provision, Just a Click Away"
        subtitle="Reliable and fast provision delivery service for Senior High School students across Ghana. Support your child's education without the travel stress."
        imageSrc="/images/hero.png"
        ctaText="Get Started Now"
        ctaLink="tel:*920*332#"
        secondaryCtaText="Learn More"
        secondaryCtaLink="/how-it-works"
      />

      {/* Our Packages Section */}
      <section style={{ padding: '100px 0', backgroundColor: 'white' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <h2 className="section-title">Our Packages</h2>
            <p className="section-subtitle">
              Choose from our curated provision bundles.
            </p>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '2rem',
            alignItems: 'center'
          }}>
            {/* Starter Package */}
            <div style={{
              backgroundColor: 'white',
              borderRadius: '24px',
              padding: '2.5rem',
              boxShadow: 'var(--card-shadow)',
              border: '2px solid var(--primary)',
              transition: 'transform 0.3s ease',
              display: 'flex',
              flexDirection: 'column',
              height: '100%'
            }} className="pricing-card">
              <h3 style={{ fontSize: '1.5rem', color: 'var(--text-dark)', marginBottom: '0.5rem' }}>Starter</h3>
              <div style={{ display: 'flex', alignItems: 'baseline', gap: '4px', marginBottom: '2rem' }}>
                <span style={{ fontSize: '1.2rem', fontWeight: 'bold', color: 'var(--primary)' }}>GH₵</span>
                <span style={{ fontSize: '3rem', fontWeight: '900', color: 'var(--text-dark)', lineHeight: '1' }}>350</span>
              </div>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '1rem', flex: 1 }}>
                {['Milo & Nido', 'Gari & Sugar', 'Shito', 'Biscuits', 'Basic Toiletries'].map((item, i) => (
                  <li key={i} style={{ display: 'flex', alignItems: 'center', gap: '10px', color: 'var(--text-gray)' }}>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--primary)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Ready Box Package */}
            <div style={{
              backgroundColor: 'var(--text-dark)',
              borderRadius: '24px',
              padding: '3rem 2.5rem',
              boxShadow: '0 20px 40px rgba(0,0,0,0.15)',
              border: '2px solid var(--primary)',
              color: 'white',
              position: 'relative',
              transform: 'scale(1.05)',
              zIndex: 10,
              display: 'flex',
              flexDirection: 'column',
              height: '100%'
            }} className="pricing-card highlighted">
              <div style={{
                position: 'absolute',
                top: '-15px',
                left: '50%',
                transform: 'translateX(-50%)',
                backgroundColor: 'var(--primary)',
                color: 'white',
                padding: '4px 16px',
                borderRadius: '20px',
                fontSize: '0.85rem',
                fontWeight: 'bold',
                letterSpacing: '1px',
                textTransform: 'uppercase'
              }}>
                Most Popular
              </div>
              <h3 style={{ fontSize: '1.5rem', color: 'white', marginBottom: '0.5rem' }}>Ready Box</h3>
              <div style={{ display: 'flex', alignItems: 'baseline', gap: '4px', marginBottom: '2rem' }}>
                <span style={{ fontSize: '1.2rem', fontWeight: 'bold', color: 'var(--primary)' }}>GH₵</span>
                <span style={{ fontSize: '3rem', fontWeight: '900', color: 'white', lineHeight: '1' }}>580</span>
              </div>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '1rem', flex: 1 }}>
                {['Everything in Starter', 'Milk & Assorted Drinks', 'Variety of Snacks', 'Notebooks & Stationery', 'Extra Toiletries'].map((item, i) => (
                  <li key={i} style={{ display: 'flex', alignItems: 'center', gap: '10px', color: 'rgba(255,255,255,0.85)' }}>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--primary)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Dadabee Package */}
            <div style={{
              backgroundColor: 'white',
              borderRadius: '24px',
              padding: '2.5rem',
              boxShadow: 'var(--card-shadow)',
              border: '2px solid var(--primary)',
              transition: 'transform 0.3s ease',
              display: 'flex',
              flexDirection: 'column',
              height: '100%'
            }} className="pricing-card">
              <h3 style={{ fontSize: '1.5rem', color: 'var(--text-dark)', marginBottom: '0.5rem' }}>Dadabee</h3>
              <div style={{ display: 'flex', alignItems: 'baseline', gap: '4px', marginBottom: '2rem' }}>
                <span style={{ fontSize: '1.2rem', fontWeight: 'bold', color: 'var(--primary)' }}>GH₵</span>
                <span style={{ fontSize: '3rem', fontWeight: '900', color: 'var(--text-dark)', lineHeight: '1' }}>780</span>
              </div>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '1rem', flex: 1 }}>
                {['Double Milo & Nido', 'Cornflakes', 'Plenty of Snacks', '15 Exercise Books', 'Huge Soap & Toiletry Pack'].map((item, i) => (
                  <li key={i} style={{ display: 'flex', alignItems: 'center', gap: '10px', color: 'var(--text-gray)' }}>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--primary)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* How to Order (USSD Process) - Restored 2-column layout */}
      <section style={{ padding: '100px 0', backgroundColor: 'var(--bg-light)' }}>
        <div className="container">
          <div className="how-it-works-container" style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '5rem',
            alignItems: 'center'
          }}>
            <div className="image-side" style={{
              position: 'relative',
              height: '500px',
              borderRadius: '32px',
              overflow: 'hidden',
              boxShadow: 'var(--card-shadow)'
            }}>
              <Image
                src="/images/ussd.jpg"
                alt="How to Order"
                fill
                style={{ objectFit: 'cover' }}
              />
            </div>
            <div className="content-side">
              <h2 className="section-title" style={{ textAlign: 'left', marginBottom: '1.5rem' }}>How to Order (USSD Process)</h2>
              <p style={{ color: 'var(--text-gray)', marginBottom: '2.5rem', fontSize: '1.1rem' }}>
                No internet? No problem. Our simple USSD menu allows you to place orders from any mobile phone instantly.
              </p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                {[
                  { step: '1', title: 'Dial *920*332#', desc: 'Start the process on any phone network (MTN, Telecel, AT).' },
                  { step: '2', title: "Select 'Buy Provision'", desc: 'Navigate the simple text-based menu to find our shop.' },
                  { step: '3', title: 'Choose Your Package', desc: 'Pick from Starter, Ready Box, or Dadabee bundles based on your budget.' },
                  { step: '4', title: 'Enter Student Details', desc: 'Provide the school name and student\'s full name for accurate delivery.' },
                  { step: '5', title: 'Pay with Mobile Money', desc: 'Secure payment via Paystack & Nalo Solutions for instant confirmation.' }
                ].map((item) => (
                  <div key={item.step} style={{ display: 'flex', gap: '1.5rem' }}>
                    <div style={{
                      minWidth: '32px',
                      height: '32px',
                      borderRadius: '50%',
                      backgroundColor: 'var(--primary)',
                      color: 'white',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontWeight: 'bold',
                      fontSize: '0.9rem'
                    }}>{item.step}</div>
                    <div>
                      <h4 style={{ fontSize: '1.1rem', marginBottom: '0.25rem', color: 'var(--text-dark)' }}>{item.title}</h4>
                      <p style={{ color: 'var(--text-gray)', fontSize: '0.9rem' }}>{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* CTA Promo Section */}
      <section style={{ padding: '80px 0' }}>
        <div className="container">
          <div style={{
            backgroundColor: '#1A202C',
            borderRadius: '32px',
            padding: '5rem 4rem',
            textAlign: 'center',
            color: 'white',
            position: 'relative',
            overflow: 'hidden'
          }}>
            <div style={{ position: 'relative', zIndex: 1 }}>
              <h2 style={{ color: 'white', fontSize: '2.8rem', marginBottom: '1.5rem', maxWidth: '800px', margin: '0 auto 1.5rem' }}>Give your child the comfort and support they need at school.</h2>
              <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '1.2rem', marginBottom: '2.5rem' }}>
                Order now and we'll deliver directly to your ward's school campus.
              </p>

              <Link href="tel:*920*332#" className="btn-primary" style={{ padding: '1.2rem 3rem', fontSize: '1.4rem', borderRadius: '12px' }}>
                Dial *920*332# Now
              </Link>

              <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: '0.9rem', marginTop: '2rem' }}>
                Secure payments powered by Paystack & Nalo Solutions
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />

      <style jsx>{`
        @media (max-width: 968px) {
          .how-it-works-container {
            grid-template-columns: 1fr !important;
            gap: 3rem !important;
          }
          .image-side {
            height: 300px !important;
            order: -1;
          }
          section {
            padding: 60px 0 !important;
          }
        }
        @media (max-width: 768px) {
          .feature-grid {
            grid-template-columns: 1fr !important;
          }
          h2 {
            font-size: 2rem !important;
          }
        }
      `}</style>
    </main>
  );
}
