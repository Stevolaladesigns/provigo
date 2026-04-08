'use client';

import { useState, useEffect, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Script from 'next/script';

const PACKAGES = [
    {
        id: 'starter',
        name: 'Starter',
        price: 420,
        description: 'Essential breakfast, food & hygiene to kick off the term.',
        items: [
            { label: 'Bfast', value: '1 Milo Tin, 1 Nido Tin, Sugar, Gari 5kg' },
            { label: 'Food', value: '12pcs Kivo Gari, Shito, Sardine/Mackerel' },
            { label: 'Hygiene', value: 'T-roll, Geisha Soap ×3' },
        ],
    },
    {
        id: 'readybox',
        name: 'Ready Box',
        price: 680,
        description: 'Fuller package with snacks, drinks & extra hygiene items.',
        items: [
            { label: 'Bfast', value: '1 Milo Tin, 1 Nido Tin, Sugar, Gari 5kg' },
            { label: 'Food', value: '12pcs Kivo Gari, Shito, 5 Sardine/Mackerel' },
            { label: 'Snacks', value: 'Tampico 1pk, 15pcs Kalyppo, Soda Biscuit ×2' },
            { label: 'Hygiene', value: 'T-roll, Dettol ×1, Geisha Soap ×5, Washing Powder ×1' },
        ],
    },
    {
        id: 'dadabee',
        name: 'Dada Bee',
        price: 950,
        description: 'Premium bundle with double essentials & school supplies.',
        items: [
            { label: 'Bfast', value: '2 Milo, 2 Nido, Sugar, Gari 5kg, Cornflakes ×1' },
            { label: 'Food', value: '24pcs Kivo Gari, Shito, 8 Sardine, 7 Mackerel' },
            { label: 'Snacks', value: 'Tampico 2pk, 20pcs Kalyppo, Soda Biscuit ×4' },
            { label: 'Hygiene', value: 'T-roll, Dettol ×1, Geisha Soap ×5, W. Powder ×2' },
            { label: 'Extra', value: 'Snappy Nut, Afterwash ×1, 15 Exercise books, 3 Notebooks' },
        ],
    },
];

const CheckIcon = () => (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--primary)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ marginTop: 2, flexShrink: 0 }}>
        <polyline points="20 6 9 17 4 12" />
    </svg>
);

function OrderPageContent() {
    const searchParams = useSearchParams();
    const [step, setStep] = useState(1);
    const [selectedPkgId, setSelectedPkgId] = useState<string | null>(null);
    const [paystackLoaded, setPaystackLoaded] = useState(false);
    const [loading, setLoading] = useState(false);
    const [form, setForm] = useState({
        parentName: '',
        phone: '',
        studentName: '',
        school: '',
        houseYear: '',
    });

    useEffect(() => {
        const pkg = searchParams.get('package');
        if (pkg && PACKAGES.find(p => p.id === pkg)) {
            setSelectedPkgId(pkg);
            setStep(2);
        }
    }, [searchParams]);

    const selectedPkg = PACKAGES.find(p => p.id === selectedPkgId) || null;

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));
    };

    const handlePay = async () => {
        if (!selectedPkg) return;
        setLoading(true);

        try {
            const res = await fetch('/api/paystack/initialize', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    package: selectedPkg.name,
                    packageId: selectedPkg.id,
                    packagePrice: selectedPkg.price,
                    ...form,
                }),
            });

            const data = await res.json();

            if (!data.reference) {
                throw new Error(data.error || 'Could not initialize payment');
            }

            const paystackPublicKey = process.env.NEXT_PUBLIC_PAYSTACK_PUBLIC_KEY || '';
            if (!paystackPublicKey) {
                alert('Payment gateway is not fully configured. Please try again later.');
                setLoading(false);
                return;
            }

            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            const handler = (window as any).PaystackPop.setup({
                key: paystackPublicKey,
                email: data.email,
                amount: selectedPkg.price * 100, // Amount is in pesewas
                currency: 'GHS',
                ref: data.reference,
                metadata: {
                    custom_fields: [
                        { display_name: 'Student', variable_name: 'student_name', value: form.studentName },
                        { display_name: 'School', variable_name: 'school', value: form.school },
                        { display_name: 'House/Year', variable_name: 'house_year', value: form.houseYear },
                        { display_name: 'Parent', variable_name: 'parent_name', value: form.parentName },
                        { display_name: 'Package', variable_name: 'package', value: selectedPkg.name },
                    ],
                    parentName: form.parentName,
                    studentName: form.studentName,
                    school: form.school,
                    houseYear: form.houseYear,
                    phone: form.phone,
                    package: selectedPkg.name,
                    source: 'web'
                },
                callback: function (response: any) {
                    // Verify payment & redirect to success securely
                    fetch('/api/paystack/verify?reference=' + response.reference)
                        .then(() => {
                            window.location.href = '/order/success?ref=' + response.reference + '&pkg=' + encodeURIComponent(selectedPkg.name) + '&school=' + encodeURIComponent(form.school) + '&student=' + encodeURIComponent(form.studentName) + '&phone=' + encodeURIComponent(form.phone);
                        })
                        .catch(() => {
                            window.location.href = '/order/success?ref=' + response.reference + '&pkg=' + encodeURIComponent(selectedPkg.name) + '&school=' + encodeURIComponent(form.school) + '&student=' + encodeURIComponent(form.studentName) + '&phone=' + encodeURIComponent(form.phone);
                        });
                },
                onClose: function () {
                    setLoading(false);
                },
            });

            handler.openIframe();
        } catch (err: unknown) {
            const message = err instanceof Error ? err.message : 'Something went wrong';
            alert(message);
            setLoading(false);
        }
    };

    const steps = ['Select Package', 'Your Details', 'Review & Pay'];

    return (
        <main>
            <Navbar />
            <Script src="https://js.paystack.co/v1/inline.js" onLoad={() => setPaystackLoaded(true)} />

            {/* Header */}
            <section className="page-header" style={{ background: 'linear-gradient(135deg, #009933 0%, #00802b 100%)', padding: '120px 0 70px', color: 'white', textAlign: 'center' }}>
                <div className="container" style={{ padding: '0 20px' }}>
                    <h1 style={{ fontSize: 'clamp(2rem,5vw,2.8rem)', color: 'white', fontWeight: 900, marginBottom: '0.75rem', padding: '0 15px' }}>Order Your Package</h1>
                    <p style={{ color: 'rgba(255,255,255,0.85)', fontSize: '1.05rem', marginBottom: '3rem', padding: '0 15px' }}>
                        Fill in the details below and pay securely with Paystack
                    </p>

                    {/* Step indicator */}
                    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'flex-start', gap: 0 }}>
                        {steps.map((label, i) => (
                            <div key={i} style={{ display: 'flex', alignItems: 'center' }}>
                                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.5rem' }}>
                                    <div style={{
                                        width: 36, height: 36, borderRadius: '50%',
                                        backgroundColor: step > i + 1 ? 'white' : step === i + 1 ? 'white' : 'rgba(255,255,255,0.25)',
                                        color: step >= i + 1 ? 'var(--primary)' : 'rgba(255,255,255,0.5)',
                                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                                        fontWeight: 'bold', fontSize: '0.95rem', transition: 'all 0.3s',
                                    }}>
                                        {step > i + 1 ? '✓' : i + 1}
                                    </div>
                                    <span style={{ fontSize: '0.78rem', color: step >= i + 1 ? 'white' : 'rgba(255,255,255,0.5)', fontWeight: step === i + 1 ? 700 : 400, whiteSpace: 'nowrap' }}>
                                        {label}
                                    </span>
                                </div>
                                {i < 2 && (
                                    <div style={{ width: 70, height: 2, backgroundColor: step > i + 1 ? 'white' : 'rgba(255,255,255,0.3)', margin: '0 8px', marginBottom: 22, transition: 'all 0.3s' }} />
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Step Content */}
            <section style={{ padding: '60px 0 100px', backgroundColor: 'var(--bg-light)', minHeight: '60vh' }}>
                <div className="container" style={{ maxWidth: 920 }}>

                    {/* ── STEP 1: Package Selection ── */}
                    {step === 1 && (
                        <div>
                            <h2 style={{ textAlign: 'center', fontSize: '1.8rem', fontWeight: 800, marginBottom: '0.5rem' }}>Choose Your Package</h2>
                            <p style={{ textAlign: 'center', color: 'var(--text-gray)', marginBottom: '2.5rem' }}>Click a package to continue</p>

                            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(270px,1fr))', gap: '1.5rem' }}>
                                {PACKAGES.map(pkg => (
                                    <div key={pkg.id} onClick={() => { setSelectedPkgId(pkg.id); setStep(2); }}
                                        style={{
                                            backgroundColor: 'white', borderRadius: 20, padding: '2rem',
                                            border: `2px solid ${selectedPkgId === pkg.id ? 'var(--primary)' : 'rgba(0,0,0,0.08)'}`,
                                            cursor: 'pointer', transition: 'all 0.25s ease',
                                            boxShadow: selectedPkgId === pkg.id ? '0 8px 28px rgba(0,153,51,0.15)' : 'var(--card-shadow)',
                                            position: 'relative',
                                        }}
                                        onMouseEnter={e => { (e.currentTarget as HTMLDivElement).style.transform = 'translateY(-6px)'; (e.currentTarget as HTMLDivElement).style.boxShadow = '0 12px 32px rgba(0,153,51,0.18)'; }}
                                        onMouseLeave={e => { (e.currentTarget as HTMLDivElement).style.transform = 'none'; (e.currentTarget as HTMLDivElement).style.boxShadow = 'var(--card-shadow)'; }}
                                    >
                                        {pkg.id === 'readybox' && (
                                            <div style={{ position: 'absolute', top: -12, right: 20, backgroundColor: 'var(--primary)', color: 'white', padding: '3px 12px', borderRadius: 20, fontSize: '0.72rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.5px' }}>
                                                Most Popular
                                            </div>
                                        )}
                                        <h3 style={{ fontSize: '1.3rem', fontWeight: 800, marginBottom: '0.25rem' }}>{pkg.name}</h3>
                                        <div style={{ display: 'flex', alignItems: 'baseline', gap: 4, marginBottom: '1.25rem' }}>
                                            <span style={{ fontSize: '1rem', fontWeight: 700, color: 'var(--primary)' }}>GH₵</span>
                                            <span style={{ fontSize: '2.5rem', fontWeight: 900, color: 'var(--text-dark)', lineHeight: 1 }}>{pkg.price}</span>
                                        </div>
                                        <p style={{ fontSize: '0.85rem', color: 'var(--text-gray)', marginBottom: '1rem' }}>{pkg.description}</p>
                                        <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.55rem' }}>
                                            {pkg.items.map((item, i) => (
                                                <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: 8, fontSize: '0.86rem', color: 'var(--text-gray)', lineHeight: 1.5 }}>
                                                    <CheckIcon />
                                                    <span><strong>{item.label}:</strong> {item.value}</span>
                                                </li>
                                            ))}
                                        </ul>
                                        <div style={{ marginTop: '1.5rem', padding: '0.7rem', backgroundColor: 'var(--primary)', borderRadius: 10, textAlign: 'center', color: 'white', fontWeight: 700, fontSize: '0.92rem' }}>
                                            Select this Package →
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}

                    {/* ── STEP 2: Customer Details ── */}
                    {step === 2 && selectedPkg && (
                        <div style={{ maxWidth: 610, margin: '0 auto' }}>
                            {/* Selected package banner */}
                            <div style={{ backgroundColor: 'white', borderRadius: 16, padding: '1.25rem 1.5rem', marginBottom: '1.75rem', border: '2px solid var(--primary)', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem' }}>
                                <div>
                                    <div style={{ fontSize: '0.75rem', color: 'var(--text-light)', textTransform: 'uppercase', letterSpacing: '0.5px', marginBottom: 2 }}>Selected</div>
                                    <div style={{ fontSize: '1.15rem', fontWeight: 800 }}>{selectedPkg.name} — <span style={{ color: 'var(--primary)' }}>GH₵{selectedPkg.price}</span></div>
                                </div>
                                <button onClick={() => setStep(1)} style={{ backgroundColor: 'transparent', border: '1.5px solid var(--primary)', color: 'var(--primary)', padding: '0.45rem 1rem', borderRadius: 8, fontWeight: 600, cursor: 'pointer', fontSize: '0.85rem', fontFamily: 'inherit' }}>
                                    Change
                                </button>
                            </div>

                            <div style={{ backgroundColor: 'white', borderRadius: 20, padding: '2.5rem', boxShadow: 'var(--card-shadow)' }}>
                                <h2 style={{ fontSize: '1.5rem', fontWeight: 800, marginBottom: '0.4rem' }}>Your Details</h2>
                                <p style={{ color: 'var(--text-gray)', marginBottom: '2rem', fontSize: '0.93rem' }}>
                                    We need these to process and deliver the order correctly.
                                </p>

                                <div style={{ display: 'flex', flexDirection: 'column', gap: '1.2rem' }}>
                                    {[
                                        { name: 'parentName', label: 'Parent / Guardian Name', placeholder: 'e.g. Kofi Mensah' },
                                        { name: 'phone', label: 'Phone Number (for SMS updates)', placeholder: 'e.g. 0241234567', type: 'tel' },
                                        { name: 'studentName', label: 'Student Name', placeholder: 'e.g. Ama Mensah' },
                                        { name: 'school', label: 'School Name', placeholder: 'e.g. Legon Presec' },
                                        { name: 'houseYear', label: 'House / Year', placeholder: 'e.g. Akufo Hall / Year 2' },
                                    ].map(field => (
                                        <div key={field.name}>
                                            <label style={{ display: 'block', fontWeight: 600, marginBottom: '0.45rem', fontSize: '0.88rem', color: 'var(--text-dark)' }}>
                                                {field.label} <span style={{ color: '#e53e3e' }}>*</span>
                                            </label>
                                            <input
                                                type={field.type || 'text'}
                                                name={field.name}
                                                placeholder={field.placeholder}
                                                value={form[field.name as keyof typeof form]}
                                                onChange={handleChange}
                                                required
                                                style={{ width: '100%', padding: '0.85rem 1rem', borderRadius: 10, border: '1.5px solid rgba(0,0,0,0.12)', fontSize: '0.93rem', outline: 'none', fontFamily: 'inherit', color: 'var(--text-dark)', backgroundColor: 'white', transition: 'border-color 0.2s' }}
                                                onFocus={e => (e.target.style.borderColor = 'var(--primary)')}
                                                onBlur={e => (e.target.style.borderColor = 'rgba(0,0,0,0.12)')}
                                            />
                                        </div>
                                    ))}
                                </div>

                                <div style={{ display: 'flex', gap: '1rem', marginTop: '2rem' }}>
                                    <button onClick={() => setStep(1)} style={{ flex: '0 0 auto', padding: '0.85rem 1.4rem', borderRadius: 10, border: '1.5px solid rgba(0,0,0,0.15)', backgroundColor: 'white', color: 'var(--text-dark)', fontWeight: 600, cursor: 'pointer', fontSize: '0.93rem', fontFamily: 'inherit' }}>
                                        ← Back
                                    </button>
                                    <button
                                        onClick={() => {
                                            const { parentName, phone, studentName, school, houseYear } = form;
                                            if (!parentName.trim() || !phone.trim() || !studentName.trim() || !school.trim() || !houseYear.trim()) {
                                                alert('Please fill in all fields before continuing.');
                                                return;
                                            }
                                            setStep(3);
                                        }}
                                        style={{ flex: 1, padding: '0.85rem 1.4rem', borderRadius: 10, border: 'none', backgroundColor: 'var(--primary)', color: 'white', fontWeight: 700, cursor: 'pointer', fontSize: '0.95rem', fontFamily: 'inherit' }}
                                    >
                                        Review Order →
                                    </button>
                                </div>
                            </div>
                        </div>
                    )}

                    {/* ── STEP 3: Review & Pay ── */}
                    {step === 3 && selectedPkg && (
                        <div style={{ maxWidth: 610, margin: '0 auto' }}>
                            <div style={{ backgroundColor: 'white', borderRadius: 20, padding: '2.5rem', boxShadow: 'var(--card-shadow)' }}>
                                <h2 style={{ fontSize: '1.5rem', fontWeight: 800, marginBottom: '1.75rem' }}>Order Summary</h2>

                                {/* Package block */}
                                <div style={{ backgroundColor: 'var(--bg-light)', borderRadius: 14, padding: '1.5rem', marginBottom: '1.5rem' }}>
                                    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '1rem', alignItems: 'center' }}>
                                        <span style={{ fontWeight: 800, fontSize: '1.1rem' }}>{selectedPkg.name} Package</span>
                                        <span style={{ fontWeight: 900, fontSize: '1.3rem', color: 'var(--primary)' }}>GH₵{selectedPkg.price}</span>
                                    </div>
                                    {selectedPkg.items.map((item, i) => (
                                        <div key={i} style={{ fontSize: '0.85rem', color: 'var(--text-gray)', marginBottom: '0.3rem' }}>
                                            <strong>{item.label}:</strong> {item.value}
                                        </div>
                                    ))}
                                </div>

                                {/* Customer info block */}
                                <div style={{ border: '1px solid rgba(0,0,0,0.08)', borderRadius: 14, padding: '1.5rem', marginBottom: '2rem' }}>
                                    <h4 style={{ fontSize: '0.78rem', textTransform: 'uppercase', letterSpacing: '0.6px', color: 'var(--text-light)', marginBottom: '1rem' }}>Delivery Details</h4>
                                    {[
                                        ['Parent / Guardian', form.parentName],
                                        ['Phone', form.phone],
                                        ['Student Name', form.studentName],
                                        ['School', form.school],
                                        ['House / Year', form.houseYear],
                                    ].map(([label, value]) => (
                                        <div key={label} style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.6rem', fontSize: '0.9rem', gap: '1rem' }}>
                                            <span style={{ color: 'var(--text-gray)', flexShrink: 0 }}>{label}</span>
                                            <span style={{ fontWeight: 600, textAlign: 'right' }}>{value}</span>
                                        </div>
                                    ))}
                                </div>

                                <div style={{ display: 'flex', gap: '1rem' }}>
                                    <button onClick={() => setStep(2)} style={{ flex: '0 0 auto', padding: '0.85rem 1.4rem', borderRadius: 10, border: '1.5px solid rgba(0,0,0,0.15)', backgroundColor: 'white', color: 'var(--text-dark)', fontWeight: 600, cursor: 'pointer', fontSize: '0.93rem', fontFamily: 'inherit' }}>
                                        ← Back
                                    </button>
                                    <button
                                        onClick={handlePay}
                                        disabled={loading || !paystackLoaded}
                                        style={{ flex: 1, padding: '0.9rem 1.4rem', borderRadius: 10, border: 'none', backgroundColor: loading ? '#9ca3af' : 'var(--primary)', color: 'white', fontWeight: 700, cursor: loading ? 'not-allowed' : 'pointer', fontSize: '1rem', fontFamily: 'inherit', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8, transition: 'background-color 0.2s' }}
                                    >
                                        {loading ? (
                                            <>
                                                <span style={{ display: 'inline-block', width: 16, height: 16, border: '2px solid rgba(255,255,255,0.4)', borderTopColor: 'white', borderRadius: '50%', animation: 'spin 0.7s linear infinite' }} />
                                                Processing...
                                            </>
                                        ) : `Pay GH₵${selectedPkg.price} Now`}
                                    </button>
                                </div>

                                <p style={{ textAlign: 'center', fontSize: '0.78rem', color: 'var(--text-light)', marginTop: '1rem' }}>
                                    🔒 Secured by Paystack · SMS confirmation sent to {form.phone}
                                </p>
                            </div>
                        </div>
                    )}
                </div>
            </section>

            <Footer />

            <style jsx>{`
                @keyframes spin { to { transform: rotate(360deg); } }
                @media (max-width: 768px) {
                    .pkg-grid { grid-template-columns: 1fr !important; }
                }
            `}</style>
        </main>
    );
}

export default function OrderPage() {
    return (
        <Suspense fallback={<div style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}><p>Loading...</p></div>}>
            <OrderPageContent />
        </Suspense>
    );
}
