'use client';

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Hero from '@/components/Hero';
import Card from '@/components/Card';
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

      {/* What We Do Section */}
      <section style={{ padding: '100px 0', backgroundColor: 'white' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <h2 className="section-title">What We Do</h2>
            <p className="section-subtitle">
              ProviGo simplifies school life by providing comprehensive provision packages including food, toiletries, and study essentials. We handle the entire process from sourcing to delivery.
            </p>
          </div>

          <div className="feature-grid" style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '2.5rem'
          }}>
            <Card
              icon={<svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="9" cy="21" r="1" /><circle cx="20" cy="21" r="1" /><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" /></svg>}
              title="Sourcing"
              description="We select high-quality items students love, from nutritious snacks to essential toiletries."
            />
            <Card
              icon={<svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z" /><path d="m3.3 7 8.7 5 8.7-5" /><path d="M12 22V12" /></svg>}
              title="Packaging"
              description="Carefully packed to ensure everything arrives safely and stays fresh until it reaches the student."
            />
            <Card
              icon={<svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="1" y="3" width="15" height="13" /><polygon points="16 8 20 8 23 11 23 16 16 16 16 8" /><circle cx="5.5" cy="18.5" r="2.5" /><circle cx="18.5" cy="18.5" r="2.5" /></svg>}
              title="Delivery"
              description="Reliable and timely direct delivery to senior high schools across all regions in Ghana."
            />
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
                src="/images/ussd.jpeg"
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

      {/* Why Families Choose us Section */}
      <section style={{ padding: '100px 0', backgroundColor: 'white' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <h2 className="section-title">Why Families Choose ProviGo</h2>
          </div>

          <div className="feature-grid" style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
            gap: '2rem'
          }}>
            <Card
              icon={<svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" /></svg>}
              title="Save Time"
              description="Skip the market traffic and packing stress entirely."
            />
            <Card
              icon={<svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /></svg>}
              title="Reliable Delivery"
              description="Guaranteed delivery directly to your ward's school campus."
            />
            <Card
              icon={<svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 1v22M5 5h14M5 19h14M22 9h-4a3 3 0 0 0-3 3v0a3 3 0 0 0 3 3h4M2 9h4a3 3 0 0 1 3 3v0a3 3 0 0 1-3 3H2" /></svg>}
              title="Affordable Bundles"
              description="Best value for money with our curated provision packages."
            />
            <Card
              icon={<svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z" /></svg>}
              title="No Internet Required"
              description="Accessible to everyone, everywhere via USSD codes."
            />
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
