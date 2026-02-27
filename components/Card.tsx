'use client';

import { ReactNode } from 'react';
import Link from 'next/link';

interface CardProps {
    title: string;
    description: string;
    icon?: ReactNode;
    variant?: 'feature' | 'pricing' | 'step';
    price?: string;
    features?: string[];
    recommended?: boolean;
    badge?: string;
}

const Card = ({
    title,
    description,
    icon,
    variant = 'feature',
    price,
    features,
    recommended,
    badge
}: CardProps) => {
    return (
        <div className={`card ${recommended ? 'recommended' : ''}`} style={{
            backgroundColor: 'white',
            padding: '2rem',
            borderRadius: '24px',
            boxShadow: recommended ? '0 10px 30px rgba(0, 153, 51, 0.15)' : 'var(--card-shadow)',
            position: 'relative',
            border: recommended ? '2px solid var(--primary)' : '1px solid rgba(0,0,0,0.05)',
            display: 'flex',
            flexDirection: 'column',
            height: '100%',
            transition: 'transform 0.3s ease, box-shadow 0.3s ease'
        }}>
            {badge && (
                <div style={{
                    position: 'absolute',
                    top: '-12px',
                    right: '24px',
                    backgroundColor: recommended ? 'var(--primary)' : '#1A202C',
                    color: 'white',
                    padding: '4px 12px',
                    borderRadius: '12px',
                    fontSize: '0.75rem',
                    fontWeight: '700',
                    textTransform: 'uppercase'
                }}>
                    {badge}
                </div>
            )}

            {icon && (
                <div style={{
                    width: '50px',
                    height: '50px',
                    backgroundColor: 'rgba(0, 153, 51, 0.1)',
                    borderRadius: '12px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginBottom: '1.5rem',
                    color: 'var(--primary)'
                }}>
                    {icon}
                </div>
            )}

            <h3 style={{ fontSize: '1.25rem', marginBottom: '1rem', fontWeight: '700' }}>{title}</h3>
            <p style={{ fontSize: '0.95rem', color: 'var(--text-gray)', marginBottom: variant === 'pricing' ? '1.5rem' : '0' }}>
                {description}
            </p>

            {variant === 'pricing' && price && (
                <div style={{ marginTop: 'auto' }}>
                    <div style={{ fontSize: '2rem', fontWeight: '800', marginBottom: '1.5rem', color: 'var(--text-dark)' }}>
                        {price} <span style={{ fontSize: '1rem', fontWeight: '500', color: 'var(--text-light)' }}>GHC</span>
                    </div>
                    {features && (
                        <ul style={{ listStyle: 'none', marginBottom: '2rem' }}>
                            {features.map((f, i) => (
                                <li key={i} style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '0.75rem', fontSize: '0.9rem' }}>
                                    <span style={{ color: 'var(--primary)' }}>✓</span> {f}
                                </li>
                            ))}
                        </ul>
                    )}
                    <Link href="tel:*920*332#" style={{ textDecoration: 'none', display: 'block', width: '100%' }}>
                        <button className={recommended ? 'btn-primary' : 'btn-secondary'} style={{ width: '100%' }}>
                            Select Package
                        </button>
                    </Link>
                </div>
            )}

            <style jsx>{`
        .card:hover {
          transform: translateY(-5px);
          box-shadow: 0 15px 40px rgba(0,0,0,0.08);
        }
        .recommended {
          transform: scale(1.02);
        }
      `}</style>
        </div>
    );
};

export default Card;
