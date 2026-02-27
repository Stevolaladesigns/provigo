'use client';

import Image from 'next/image';

interface HeroProps {
    title: string;
    subtitle: string;
    imageSrc: string;
    ctaText?: string;
    ctaLink?: string;
    secondaryCtaText?: string;
    secondaryCtaLink?: string;
}

const Hero = ({
    title,
    subtitle,
    imageSrc,
    ctaText,
    ctaLink,
    secondaryCtaText,
    secondaryCtaLink
}: HeroProps) => {
    return (
        <section className="hero" style={{
            padding: '120px 0 80px',
            position: 'relative',
            overflow: 'hidden'
        }}>
            <div className="container hero-container">
                <div className="hero-content">
                    <h1 className="hero-title">
                        {title}
                    </h1>
                    <p className="hero-subtitle">
                        {subtitle}
                    </p>
                    <div className="hero-actions">
                        {ctaText && ctaLink && (
                            <a href={ctaLink} className="btn-primary">
                                {ctaText}
                            </a>
                        )}
                        {secondaryCtaText && secondaryCtaLink && (
                            <a href={secondaryCtaLink} className="btn-secondary">
                                {secondaryCtaText}
                            </a>
                        )}
                    </div>
                </div>
                <div className="hero-image-wrapper">
                    <div className="hero-image-inner">
                        <Image
                            src={imageSrc}
                            alt={title}
                            fill
                            style={{ objectFit: 'cover' }}
                            priority
                        />
                    </div>
                </div>
            </div>

            <style jsx>{`
                .hero-container {
                    display: grid;
                    grid-template-columns: 1fr 1fr;
                    align-items: center;
                    gap: 4rem;
                }
                .hero-title {
                    font-size: 3.5rem;
                    line-height: 1.1;
                    font-weight: 800;
                    color: var(--text-dark);
                }
                .hero-subtitle {
                    margin: 1.5rem 0 2.5rem;
                    font-size: 1.1rem;
                    color: var(--text-gray);
                }
                .hero-actions {
                    display: flex;
                    gap: 1rem;
                }
                .hero-image-wrapper {
                    position: relative;
                    height: 500px;
                }
                .hero-image-inner {
                    position: relative;
                    height: 100%;
                    border-radius: 24px;
                    overflow: hidden;
                    box-shadow: 0 20px 40px rgba(0,0,0,0.1);
                }

                @media (max-width: 968px) {
                    .hero {
                        padding: 100px 0 60px !important;
                    }
                    .hero-container {
                        grid-template-columns: 1fr !important;
                        gap: 3rem !important;
                        text-align: center !important;
                    }
                    .hero-title {
                        font-size: 2.5rem !important;
                    }
                    .hero-subtitle {
                        margin: 1rem 0 2rem !important;
                        font-size: 1rem !important;
                    }
                    .hero-actions {
                        justify-content: center !important;
                    }
                    .hero-image-wrapper {
                        height: 300px !important;
                    }
                }
            `}</style>
        </section>
    );
};

export default Hero;
