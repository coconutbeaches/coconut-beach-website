import { Metadata } from 'next';
import { Layout } from '../../components/Layout';
import BungalowsClient from '../../components/BungalowsClient';
import BungalowsCarousel from '../../components/BungalowsCarousel';
import { Suspense } from 'react';

export const metadata: Metadata = {
  title: 'Bungalows',
  description: 'Explore our eco-friendly beachfront bungalows on Salad Beach, Koh Phangan. Choose from seaview, jungle, and beachfront accommodations.',
  keywords: 'bungalows, beachfront accommodation, seaview, jungle view, Koh Phangan accommodation',
  openGraph: {
    title: 'Bungalows - Coconut Beach Bungalows',
    description: 'Explore our eco-friendly beachfront bungalows on Salad Beach, Koh Phangan',
  },
};

export default function Bungalows() {
  return (
    <Layout>
      <div style={{ padding: '2rem', fontFamily: 'Poppins, sans-serif' }}>
        <h1 style={{ 
          fontFamily: 'Swanky and Moo Moo, cursive', 
          fontSize: '3rem', 
          color: '#ed6664', 
          marginBottom: '1rem',
          textAlign: 'center'
        }}>
          Our Bungalows
        </h1>
        <p style={{ 
          fontSize: '1.2rem', 
          marginBottom: '2rem',
          textAlign: 'center',
          maxWidth: '800px',
          margin: '0 auto 2rem'
        }}>
          Choose from our selection of eco-friendly bungalows, each designed to provide comfort while respecting the natural beauty of Salad Beach.
        </p>
        <Suspense fallback={<div>Loading...</div>}>
          <BungalowsCarousel />
        </Suspense>
        
        <Suspense fallback={<div>Loading...</div>}>
          <BungalowsClient />
        </Suspense>
      </div>
    </Layout>
  );
}
