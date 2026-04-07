'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    // Prevent scrolling when mobile menu is open
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
    }, [isOpen]);

    const navLinks = [
        { name: 'About', href: '/about' },
        { name: 'Packages', href: '/packages' },
        { name: 'How It Works', href: '/how-it-works' },
        { name: 'Track Order', href: '/track-order' },
        { name: 'Contact', href: '/contact' },
    ];

    return (
        <>
            <nav style={{
                position: 'fixed',
                top: 0,
                left: 0,
                right: 0,
                zIndex: 1000,
                height: '70px',
                display: 'flex',
                alignItems: 'center',
                backgroundColor: 'rgba(255, 255, 255, 0.95)',
                backdropFilter: 'blur(10px)',
                borderBottom: '1px solid rgba(0, 0, 0, 0.05)'
            }}>
                <div className="container" style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    width: '100%'
                }}>
                    <Link href="/" style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '10px'
                    }}>
                        <img src="/provigo.png" alt="ProviGo" style={{ height: '40px' }} />
                    </Link>

                    {/* Desktop Menu */}
                    <div className="desktop-menu" style={{
                        display: 'flex',
                        gap: '1.5rem',
                        alignItems: 'center'
                    }}>
                        {navLinks.map(link => (
                            <Link key={link.href} href={link.href} className="nav-link">
                                {link.name}
                            </Link>
                        ))}
                    </div>

                    {/* Mobile Toggle */}
                    <button
                        className="mobile-toggle"
                        onClick={() => setIsOpen(!isOpen)}
                        aria-label="Toggle menu"
                        style={{
                            display: 'none',
                            fontSize: '1.8rem',
                            background: 'none',
                            border: 'none',
                            cursor: 'pointer',
                            color: 'var(--text-dark)',
                            padding: '5px',
                            zIndex: 1001
                        }}
                    >
                        {isOpen ? '✕' : '☰'}
                    </button>
                </div>
            </nav>

            {/* Mobile Menu Overlay - OUTSIDE OF NAV TO PREVENT CLIPPING BY BACKDROP-FILTER */}
            <div
                className={`mobile-menu ${isOpen ? 'active' : ''}`}
                style={{
                    backgroundColor: '#ffffff',
                    position: 'fixed',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    zIndex: 2000,
                    display: 'flex',
                    flexDirection: 'column',
                    opacity: isOpen ? 1 : 0,
                    visibility: isOpen ? 'visible' : 'hidden',
                    transform: isOpen ? 'translateY(0)' : 'translateY(-10px)',
                    transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)'
                }}
            >
                {/* Mobile Menu Header */}
                <div className="mobile-menu-header" style={{
                    height: '70px',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    padding: '0 1.5rem',
                    borderBottom: '1px solid rgba(0, 0, 0, 0.05)',
                    backgroundColor: '#ffffff'
                }}>
                    <Link href="/" onClick={() => setIsOpen(false)} style={{ display: 'flex', alignItems: 'center' }}>
                        <img src="/provigo.png" alt="ProviGo" style={{ height: '40px', display: 'block' }} />
                    </Link>
                    <button
                        onClick={() => setIsOpen(false)}
                        className="mobile-close"
                        aria-label="Close menu"
                        style={{ fontSize: '1.8rem', color: 'var(--text-dark)', padding: '5px' }}
                    >
                        ✕
                    </button>
                </div>

                <div className="mobile-links" style={{
                    display: 'flex',
                    flexDirection: 'column',
                    padding: '2.5rem 1.5rem',
                    gap: '1.25rem'
                }}>
                    {navLinks.map((link, index) => (
                        <Link
                            key={link.href}
                            href={link.href}
                            onClick={() => setIsOpen(false)}
                            className="mobile-link"
                            style={{
                                fontSize: '1.25rem',
                                fontWeight: '600',
                                color: 'var(--text-dark)',
                                textDecoration: 'none',
                                opacity: isOpen ? 1 : 0,
                                transform: isOpen ? 'translateX(0)' : 'translateX(10px)',
                                transition: `all 0.3s ease ${0.1 + index * 0.05}s`
                            }}
                        >
                            {link.name}
                        </Link>
                    ))}
                </div>
            </div>

            <style jsx>{`
                .nav-link {
                    font-weight: 500;
                    color: var(--text-gray);
                    font-size: 0.95rem;
                    text-decoration: none;
                    transition: color 0.2s ease;
                }
                .nav-link:hover {
                    color: var(--primary);
                }

                @media (max-width: 968px) {
                    .desktop-menu {
                        display: none !important;
                    }
                    .mobile-toggle {
                        display: block !important;
                    }
                }
            `}</style>
        </>
    );
};

export default Navbar;
