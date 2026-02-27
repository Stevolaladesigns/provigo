'use client';

import Link from 'next/link';

const Footer = () => {
    return (
        <footer style={{
            backgroundColor: 'var(--primary)',
            color: 'white',
            padding: '4rem 0 2rem',
            marginTop: '4rem'
        }}>
            <div className="container">
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
                    gap: '3rem',
                    marginBottom: '3rem'
                }}>
                    {/* Brand Col */}
                    <div style={{ maxWidth: '300px' }}>
                        <Link href="/" style={{ display: 'block', marginBottom: '1.5rem' }}>
                            <img src="/provigowhite.png" alt="ProviGo" style={{ height: '40px' }} />
                        </Link>
                        <p style={{ fontSize: '0.9rem', color: 'rgba(255, 255, 255, 0.8)', lineHeight: '1.6' }}>
                            Fast, reliable, and secure provision delivery for students nationwide.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 style={{ marginBottom: '1.5rem', fontSize: '1.1rem', color: 'white' }}>Quick Links</h4>
                        <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                            <li><Link href="/packages" className="footer-link">Packages</Link></li>
                            <li><Link href="/how-it-works" className="footer-link">How It Works</Link></li>
                            <li><Link href="/track-order" className="footer-link">Track Order</Link></li>
                            <li><Link href="/about" className="footer-link">About Us</Link></li>
                            <li><Link href="/contact" className="footer-link">Contact</Link></li>
                        </ul>
                    </div>

                    {/* Support */}
                    <div>
                        <h4 style={{ marginBottom: '1.5rem', fontSize: '1.1rem', color: 'white' }}>Support</h4>
                        <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                            <li><Link href="/faqs" className="footer-link">FAQs</Link></li>
                            <li><Link href="/terms" className="footer-link">Terms of Service</Link></li>
                            <li><Link href="/privacy" className="footer-link">Privacy Policy</Link></li>
                            <li><Link href="/help" className="footer-link">Help Center</Link></li>
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h4 style={{ marginBottom: '1.5rem', fontSize: '1.1rem', color: 'white' }}>Contact Info</h4>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                            <a href="tel:+233247112620" className="footer-item">
                                <span className="icon-box">
                                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" /></svg>
                                </span>
                                +233 247 112 620
                            </a>
                            <a href="mailto:provigogh@gmail.com" className="footer-item">
                                <span className="icon-box">
                                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m22 2-7 20-4-9-9-4Z" /><path d="M22 2 11 13" /></svg>
                                </span>
                                provigogh@gmail.com
                            </a>
                            <span className="ussd-badge" style={{ gap: '8px' }}>
                                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="18" height="18" rx="2" ry="2" /><circle cx="8" cy="8" r="1.5" /><circle cx="12" cy="8" r="1.5" /><circle cx="16" cy="8" r="1.5" /><circle cx="8" cy="12" r="1.5" /><circle cx="12" cy="12" r="1.5" /><circle cx="16" cy="12" r="1.5" /><circle cx="8" cy="16" r="1.5" /><circle cx="12" cy="16" r="1.5" /><circle cx="16" cy="16" r="1.5" /></svg>
                                *920*332#
                            </span>
                        </div>
                    </div>
                </div>

                <div className="footer-bottom" style={{
                    borderTop: '1px solid rgba(255, 255, 255, 0.1)',
                    paddingTop: '2rem',
                    textAlign: 'center',
                    fontSize: '0.85rem',
                    color: 'rgba(255, 255, 255, 0.6)'
                }}>
                    <p>&copy; {new Date().getFullYear() < 2026 ? 2026 : new Date().getFullYear()} ProviGo Delivery Services. All rights reserved.</p>
                    <p style={{ marginTop: '0.5rem', opacity: 0.8 }}>
                        Powered by <a href="https://stevolala.netlify.app/" target="_blank" rel="noopener noreferrer" style={{ color: 'white', textDecoration: 'underline' }}>stevolala</a>
                    </p>
                </div>
            </div>

            <style jsx>{`
        .footer-link {
          color: rgba(255, 255, 255, 0.8);
          font-size: 0.9rem;
          text-decoration: none;
          transition: color 0.2s ease;
        }
        .footer-link:hover {
          color: white;
        }
        .footer-item {
          display: flex;
          align-items: center;
          gap: 12px;
          color: rgba(255, 255, 255, 0.8);
          font-size: 0.9rem;
          text-decoration: none;
          transition: color 0.2s ease;
        }
        .footer-item:hover {
          color: white;
        }
        .icon-box {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 32px;
          height: 32px;
          background-color: rgba(255, 255, 255, 0.1);
          color: white;
          border-radius: 8px;
        }
        .ussd-badge {
          display: inline-flex;
          align-items: center;
          background-color: rgba(255, 255, 255, 0.15);
          color: white;
          padding: 6px 16px;
          border-radius: 20px;
          font-weight: 700;
          font-size: 0.9rem;
          width: fit-content;
        }
      `}</style>
        </footer>
    );
};

export default Footer;
