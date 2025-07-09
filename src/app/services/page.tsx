import { Metadata } from 'next';
import { Layout } from '../../components/Layout';

export const metadata: Metadata = {
  title: 'Services',
  description: 'Discover our range of services at Coconut Beach Bungalows including tours, activities, spa treatments, and local experiences in Koh Phangan.',
  keywords: 'services, tours, activities, spa, massage, Koh Phangan experiences, beach services',
  openGraph: {
    title: 'Services - Coconut Beach Bungalows',
    description: 'Discover our range of services including tours, activities, and spa treatments in Koh Phangan',
  },
};

export default function Services() {
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
          Our Services
        </h1>
        <p style={{ 
          fontSize: '1.2rem', 
          marginBottom: '2rem',
          textAlign: 'center',
          maxWidth: '800px',
          margin: '0 auto 2rem'
        }}>
          Enhance your stay with our curated selection of services designed to make your Koh Phangan experience unforgettable.
        </p>
        
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', 
          gap: '2rem',
          marginBottom: '2rem'
        }}>
          <div style={{ 
            backgroundColor: '#f8f9fa', 
            padding: '1.5rem', 
            borderRadius: '8px',
            border: '2px solid #ed6664'
          }}>
            <h3 style={{ color: '#ed6664', marginBottom: '1rem' }}>🌊 Water Activities</h3>
            <p>Make the most of our beachfront location with exciting water-based adventures.</p>
            <ul style={{ marginTop: '1rem' }}>
              <li>• Snorkeling equipment rental</li>
              <li>• Kayak and paddleboard rental</li>
              <li>• Fishing trips</li>
              <li>• Sunset boat tours</li>
            </ul>
          </div>
          
          <div style={{ 
            backgroundColor: '#f8f9fa', 
            padding: '1.5rem', 
            borderRadius: '8px',
            border: '2px solid #ed6664'
          }}>
            <h3 style={{ color: '#ed6664', marginBottom: '1rem' }}>🏝️ Island Tours</h3>
            <p>Explore the best of Koh Phangan with our guided tours and excursions.</p>
            <ul style={{ marginTop: '1rem' }}>
              <li>• Full Moon Party transfers</li>
              <li>• Island hopping tours</li>
              <li>• Jungle trekking</li>
              <li>• Temple and cultural visits</li>
            </ul>
          </div>
          
          <div style={{ 
            backgroundColor: '#f8f9fa', 
            padding: '1.5rem', 
            borderRadius: '8px',
            border: '2px solid #ed6664'
          }}>
            <h3 style={{ color: '#ed6664', marginBottom: '1rem' }}>💆 Wellness & Spa</h3>
            <p>Relax and rejuvenate with our wellness services right at your bungalow.</p>
            <ul style={{ marginTop: '1rem' }}>
              <li>• Traditional Thai massage</li>
              <li>• Beachside yoga sessions</li>
              <li>• Meditation classes</li>
              <li>• Aromatherapy treatments</li>
            </ul>
          </div>
          
          <div style={{ 
            backgroundColor: '#f8f9fa', 
            padding: '1.5rem', 
            borderRadius: '8px',
            border: '2px solid #ed6664'
          }}>
            <h3 style={{ color: '#ed6664', marginBottom: '1rem' }}>🍽️ Dining Services</h3>
            <p>Savor authentic Thai cuisine and international dishes at our beachfront restaurant.</p>
            <ul style={{ marginTop: '1rem' }}>
              <li>• Fresh seafood daily</li>
              <li>• Vegetarian & vegan options</li>
              <li>• Cooking classes</li>
              <li>• Room service available</li>
            </ul>
          </div>
          
          <div style={{ 
            backgroundColor: '#f8f9fa', 
            padding: '1.5rem', 
            borderRadius: '8px',
            border: '2px solid #ed6664'
          }}>
            <h3 style={{ color: '#ed6664', marginBottom: '1rem' }}>🚗 Transportation</h3>
            <p>Convenient transport options to help you explore the island with ease.</p>
            <ul style={{ marginTop: '1rem' }}>
              <li>• Airport transfers</li>
              <li>• Motorbike rentals</li>
              <li>• Taxi service</li>
              <li>• Ferry bookings</li>
            </ul>
          </div>
          
          <div style={{ 
            backgroundColor: '#f8f9fa', 
            padding: '1.5rem', 
            borderRadius: '8px',
            border: '2px solid #ed6664'
          }}>
            <h3 style={{ color: '#ed6664', marginBottom: '1rem' }}>🏨 Concierge Services</h3>
            <p>Our friendly staff is here to help make your stay perfect in every way.</p>
            <ul style={{ marginTop: '1rem' }}>
              <li>• Travel planning assistance</li>
              <li>• Restaurant reservations</li>
              <li>• Laundry service</li>
              <li>• Currency exchange</li>
            </ul>
          </div>
        </div>
        
        <div style={{ 
          backgroundColor: '#ed6664', 
          color: 'white', 
          padding: '2rem', 
          borderRadius: '8px', 
          textAlign: 'center',
          marginTop: '2rem'
        }}>
          <h3 style={{ marginBottom: '1rem' }}>Need More Information?</h3>
          <p style={{ marginBottom: '1rem' }}>Contact our friendly staff to learn more about our services and make arrangements.</p>
          <p style={{ fontSize: '1.1rem', fontWeight: 'bold' }}>📞 +66 81 234 5678 | ✉️ info@coconutbeachkohphangan.com</p>
        </div>
      </div>
    </Layout>
  );
}
