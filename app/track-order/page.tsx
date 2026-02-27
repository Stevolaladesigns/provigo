'use client';

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { useState } from 'react';

const BACKEND_URL = 'https://dashboard.provigogh.com';

// Define expected order shape based on backend schema
interface OrderDetails {
    id: string;
    status: string;
    packageDetails: any[];
    amount: number;
    deliveryAddress: string;
    orderDate: string;
    updatedAt: string;
}

export default function TrackOrder() {
    const [orderId, setOrderId] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const [orderData, setOrderData] = useState<OrderDetails | null>(null);

    const handleTrackOrder = async () => {
        if (!orderId.trim()) {
            setError("Please enter a valid Order ID");
            return;
        }

        setLoading(true);
        setError(null);
        setOrderData(null);

        try {
            const response = await fetch(`${BACKEND_URL}/api/track?orderId=${orderId.trim()}`);
            const data = await response.json();

            if (response.ok && data.order) {
                setOrderData(data.order);
            } else {
                setError(data.error || "Order not found");
            }
        } catch (err) {
            console.error("Network or server error:", err);
            setError("Network error. Please try again later.");
        } finally {
            setLoading(false);
        }
    };

    // Helper to format the timeline based on status
    const getStatusSteps = (status: string) => {
        const statuses = ['pending', 'paid', 'processing', 'delivered'];
        let currentIndex = statuses.indexOf(status.toLowerCase());
        if (currentIndex === -1) currentIndex = 0; // Default to pending if unknown

        return [
            { label: 'Order Placed & Pending', status: currentIndex >= 0 ? (currentIndex > 0 ? 'completed' : 'current') : 'pending' },
            { label: 'Payment Verified', status: currentIndex >= 1 ? (currentIndex > 1 ? 'completed' : 'current') : 'pending' },
            { label: 'Package Processing', status: currentIndex >= 2 ? (currentIndex > 2 ? 'completed' : 'current') : 'pending' },
            { label: 'Delivered', status: currentIndex >= 3 ? 'completed' : 'pending' }
        ];
    };

    return (
        <main>
            <Navbar />

            <section className="responsive-section page-header" style={{ padding: '120px 0 80px', backgroundColor: 'var(--bg-light)', minHeight: '80vh' }}>
                <div className="container">
                    <div style={{ maxWidth: '700px', margin: '0 auto' }}>
                        <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
                            <h1 className="section-title">Track Your Order</h1>
                            <p className="section-subtitle">
                                Enter your Order ID to see the real-time status of your provision delivery.
                            </p>
                        </div>

                        <div className="glass track-card" style={{ padding: '3rem', borderRadius: '32px', textAlign: 'center' }}>
                            <div className="input-group" style={{ display: 'flex', gap: '1rem', marginBottom: '2rem' }}>
                                <input
                                    type="text"
                                    placeholder="Enter Order ID"
                                    value={orderId}
                                    onChange={(e) => setOrderId(e.target.value)}
                                    onKeyDown={(e) => e.key === 'Enter' && handleTrackOrder()}
                                    style={{
                                        flex: 1,
                                        padding: '1rem 1.5rem',
                                        borderRadius: '16px',
                                        border: '1px solid #E2E8F0',
                                        fontSize: '1.1rem',
                                        outline: 'none'
                                    }}
                                />
                                <button
                                    onClick={handleTrackOrder}
                                    className="btn-primary"
                                    disabled={loading}
                                    style={{ padding: '0 2rem', minHeight: '56px', opacity: loading ? 0.7 : 1 }}
                                >
                                    {loading ? 'Tracking...' : 'Track'}
                                </button>
                            </div>

                            {error && (
                                <div style={{ color: 'red', marginTop: '1rem', padding: '1rem', backgroundColor: '#ffe6e6', borderRadius: '12px' }}>
                                    {error}
                                </div>
                            )}

                            {orderData && (
                                <div style={{ textAlign: 'left', marginTop: '3rem' }}>
                                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '2rem', flexWrap: 'wrap', gap: '1rem' }}>
                                        <div>
                                            <h4 style={{ fontSize: '1.25rem', marginBottom: '0.5rem' }}>Order Details</h4>
                                            <p style={{ margin: 0, color: 'var(--text-gray)' }}>ID: <strong style={{ color: 'var(--text-dark)' }}>{orderData.id}</strong></p>
                                        </div>
                                        <div style={{ textAlign: 'right' }}>
                                            <div style={{
                                                display: 'inline-block',
                                                padding: '4px 12px',
                                                borderRadius: '20px',
                                                fontSize: '0.85rem',
                                                fontWeight: 'bold',
                                                backgroundColor: orderData.status.toLowerCase() === 'delivered' ? '#d4edda' : 'rgba(0, 153, 51, 0.1)',
                                                color: orderData.status.toLowerCase() === 'delivered' ? '#155724' : 'var(--primary)',
                                                textTransform: 'uppercase'
                                            }}>
                                                {orderData.status}
                                            </div>
                                        </div>
                                    </div>

                                    <div style={{ display: 'flex', flexDirection: 'column', gap: '0', backgroundColor: 'white', padding: '2rem', borderRadius: '16px', border: '1px solid #E2E8F0' }}>
                                        <div style={{ display: 'flex', flexDirection: 'column', gap: '0' }}>
                                            {getStatusSteps(orderData.status).map((step, idx, arr) => (
                                                <div key={idx} style={{ display: 'flex', gap: '1.5rem', position: 'relative' }}>
                                                    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                                                        <div style={{
                                                            width: '24px',
                                                            height: '24px',
                                                            borderRadius: '50%',
                                                            backgroundColor: step.status === 'completed' || step.status === 'current' ? 'var(--primary)' : '#E2E8F0',
                                                            border: step.status === 'current' ? '4px solid rgba(0, 153, 51, 0.2)' : 'none',
                                                            zIndex: 2
                                                        }} />
                                                        {idx !== arr.length - 1 && (
                                                            <div style={{
                                                                width: '2px',
                                                                flex: 1,
                                                                backgroundColor: step.status === 'completed' ? 'var(--primary)' : '#E2E8F0',
                                                                margin: '4px 0',
                                                                minHeight: '40px'
                                                            }} />
                                                        )}
                                                    </div>
                                                    <div style={{ paddingBottom: '2.5rem', flex: 1 }}>
                                                        <h5 style={{
                                                            fontSize: '1.1rem',
                                                            margin: 0,
                                                            color: step.status === 'pending' ? 'var(--text-light)' : 'var(--text-dark)',
                                                            fontWeight: step.status === 'current' ? '800' : '600'
                                                        }}>
                                                            {step.label}
                                                        </h5>
                                                        {step.status === 'current' && (
                                                            <p style={{ fontSize: '0.85rem', color: 'var(--text-light)', margin: '4px 0 0' }}>
                                                                Current active step
                                                            </p>
                                                        )}
                                                    </div>
                                                </div>
                                            ))}
                                        </div>

                                        <div style={{ marginTop: '2rem', paddingTop: '2rem', borderTop: '1px solid #E2E8F0' }}>
                                            <h5 style={{ fontSize: '1.1rem', marginBottom: '1rem' }}>Order Information</h5>
                                            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1rem' }}>
                                                <div>
                                                    <p style={{ fontSize: '0.85rem', color: 'var(--text-light)', margin: '0 0 4px' }}>Amount Paid</p>
                                                    <p style={{ fontWeight: '600', margin: 0 }}>GH₵ {orderData.amount}</p>
                                                </div>
                                                <div>
                                                    <p style={{ fontSize: '0.85rem', color: 'var(--text-light)', margin: '0 0 4px' }}>Order Date</p>
                                                    <p style={{ fontWeight: '600', margin: 0 }}>{new Date(orderData.orderDate).toLocaleDateString()}</p>
                                                </div>
                                                <div style={{ gridColumn: '1 / -1' }}>
                                                    <p style={{ fontSize: '0.85rem', color: 'var(--text-light)', margin: '0 0 4px' }}>Delivery Address</p>
                                                    <p style={{ fontWeight: '600', margin: 0 }}>{orderData.deliveryAddress || 'N/A'}</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )}

                            {!orderData && !loading && (
                                <div style={{ textAlign: 'left', marginTop: '3rem', opacity: 0.5 }}>
                                    <h4 style={{ marginBottom: '2rem', fontSize: '1.25rem' }}>Example Order Status</h4>
                                    <div style={{ display: 'flex', flexDirection: 'column', gap: '0' }}>
                                        {[
                                            { label: 'Order Placed', status: 'completed' },
                                            { label: 'Payment Verified', status: 'completed' },
                                            { label: 'Package Processing', status: 'current' },
                                            { label: 'Delivered', status: 'pending' }
                                        ].map((step, idx, arr) => (
                                            <div key={idx} style={{ display: 'flex', gap: '1.5rem', position: 'relative' }}>
                                                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                                                    <div style={{
                                                        width: '24px',
                                                        height: '24px',
                                                        borderRadius: '50%',
                                                        backgroundColor: step.status === 'completed' || step.status === 'current' ? 'var(--primary)' : '#E2E8F0',
                                                        border: step.status === 'current' ? '4px solid rgba(0, 153, 51, 0.2)' : 'none',
                                                        zIndex: 2
                                                    }} />
                                                    {idx !== arr.length - 1 && (
                                                        <div style={{
                                                            width: '2px',
                                                            flex: 1,
                                                            backgroundColor: step.status === 'completed' ? 'var(--primary)' : '#E2E8F0',
                                                            margin: '4px 0',
                                                            minHeight: '40px'
                                                        }} />
                                                    )}
                                                </div>
                                                <div style={{ paddingBottom: '2.5rem', flex: 1 }}>
                                                    <h5 style={{
                                                        fontSize: '1.1rem',
                                                        margin: 0,
                                                        color: step.status === 'pending' ? 'var(--text-light)' : 'var(--text-dark)',
                                                        fontWeight: step.status === 'current' ? '800' : '600'
                                                    }}>
                                                        {step.label}
                                                    </h5>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            )}
                        </div>

                        <div className="hint-box" style={{ marginTop: '3rem', padding: '2rem', borderRadius: '24px', border: '1px dashed var(--primary)', textAlign: 'center' }}>
                            <p style={{ fontSize: '0.9rem', color: 'var(--text-gray)', margin: 0 }}>
                                💡 <strong>Can't find your Order ID?</strong> Check your SMS inbox for the unique PV number sent after payment verification.
                            </p>
                        </div>
                    </div>
                </div>

                <style jsx>{`
                    @media (max-width: 768px) {
                        .responsive-section {
                            padding: 80px 0 60px !important;
                        }
                        .track-card {
                            padding: 2rem 1.5rem !important;
                        }
                        .input-group {
                            flex-direction: column !important;
                        }
                        .input-group button {
                            width: 100% !important;
                        }
                        .hint-box {
                            padding: 1.5rem !important;
                        }
                    }
                `}</style>
            </section>

            <Footer />
        </main>
    );
}
