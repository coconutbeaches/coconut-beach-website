import { Layout } from '../components/Layout';
import HeroSlider from '../components/HeroSlider';
import BookingWidget from '../components/BookingWidget';
import InfoSection from '../components/InfoSection';
import BungalowsCarousel from '../components/BungalowsCarousel';
import { Suspense } from 'react';

export default function Home() {
  return (
    <Layout>
      <HeroSlider
        title="Welcome to Coconut Beach"
        subtitle="Paradise Found"
        showTitle={true}
      />
      <BookingWidget />
      <InfoSection />
      <div style={{ padding: '2rem', fontFamily: 'Poppins, sans-serif' }}>
        <p style={{ fontSize: '1.2rem', marginBottom: '1rem' }}>
          Discover our eco-friendly beachfront bungalows nestled on the pristine
          shores of Salad Beach, Koh Phangan.
        </p>
        <div
          style={{
            backgroundColor: '#f8f9fa',
            padding: '1rem',
            borderRadius: '8px',
            marginBottom: '1rem',
          }}
        >
          <h3 style={{ color: '#ed6664', marginBottom: '0.5rem' }}>
            Why Choose Coconut Beach?
          </h3>
          <ul style={{ fontSize: '1.1rem', marginBottom: '1rem' }}>
            <li>✓ Beachfront location with stunning ocean views</li>
            <li>✓ Eco-friendly accommodation in harmony with nature</li>
            <li>✓ Authentic Thai hospitality and local experiences</li>
            <li>✓ Perfect for relaxation and adventure seekers</li>
            <li>✓ Close to Koh Phangan&apos;s best attractions</li>
          </ul>
        </div>

        <Suspense fallback={<div>Loading...</div>}>
          <BungalowsCarousel />
        </Suspense>

        <div
          style={{
            backgroundColor: '#ed6664',
            color: 'white',
            padding: 'var(--spacing-md)',
            borderRadius: '4px',
            textAlign: 'center',
            marginTop: '2rem',
          }}
        >
          Book your tropical getaway today!
        </div>
      </div>
    </Layout>
  );
}
