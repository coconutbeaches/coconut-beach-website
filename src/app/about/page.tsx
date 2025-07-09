import { Metadata } from 'next';
import { Layout } from '../../components/Layout';

export const metadata: Metadata = {
  title: 'About',
  description: 'Learn about Coconut Beach Bungalows - our story, eco-friendly philosophy, and commitment to sustainable tourism on Salad Beach, Koh Phangan.',
  keywords: 'about, eco-friendly, sustainable tourism, Koh Phangan, Salad Beach, bungalows, story',
  openGraph: {
    title: 'About - Coconut Beach Bungalows',
    description: 'Learn about our story, eco-friendly philosophy, and commitment to sustainable tourism on Salad Beach, Koh Phangan',
  },
};

export default function About() {
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
          About Coconut Beach
        </h1>
        
        <div style={{ 
          maxWidth: '800px', 
          margin: '0 auto',
          marginBottom: '3rem'
        }}>
          <p style={{ 
            fontSize: '1.2rem', 
            marginBottom: '2rem',
            textAlign: 'center',
            lineHeight: '1.6'
          }}>
            Welcome to Coconut Beach Bungalows, where paradise meets sustainability on the pristine shores of Salad Beach, Koh Phangan.
          </p>
          
          <div style={{ 
            backgroundColor: '#f8f9fa', 
            padding: '2rem', 
            borderRadius: '8px',
            marginBottom: '2rem'
          }}>
            <h2 style={{ color: '#ed6664', marginBottom: '1rem' }}>Our Story</h2>
            <p style={{ marginBottom: '1rem', lineHeight: '1.6' }}>
              Founded in 2015, Coconut Beach Bungalows was born from a dream to create an authentic Thai hospitality experience 
              that respects and preserves the natural beauty of Koh Phangan. Our founders, a local Thai family with deep roots 
              in the island community, envisioned a place where travelers could connect with nature while enjoying comfortable, 
              eco-friendly accommodations.
            </p>
            <p style={{ lineHeight: '1.6' }}>
              What started as a small collection of traditional bamboo bungalows has grown into a beloved destination for 
              travelers seeking an authentic island experience. We&apos;ve maintained our commitment to sustainability and 
              community involvement while continuously improving our facilities and services.
            </p>
          </div>
        </div>
        
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', 
          gap: '2rem',
          marginBottom: '3rem'
        }}>
          <div style={{ 
            backgroundColor: '#f8f9fa', 
            padding: '2rem', 
            borderRadius: '8px',
            border: '2px solid #ed6664'
          }}>
            <h3 style={{ color: '#ed6664', marginBottom: '1rem' }}>🌱 Our Eco-Friendly Philosophy</h3>
            <ul style={{ lineHeight: '1.6' }}>
              <li>• Solar power for hot water and lighting</li>
              <li>• Rainwater harvesting systems</li>
              <li>• Locally sourced, organic materials</li>
              <li>• Waste reduction and recycling programs</li>
              <li>• Native plant landscaping</li>
              <li>• Support for local conservation efforts</li>
            </ul>
          </div>
          
          <div style={{ 
            backgroundColor: '#f8f9fa', 
            padding: '2rem', 
            borderRadius: '8px',
            border: '2px solid #ed6664'
          }}>
            <h3 style={{ color: '#ed6664', marginBottom: '1rem' }}>🏝️ Our Location</h3>
            <p style={{ lineHeight: '1.6', marginBottom: '1rem' }}>
              Nestled on the tranquil Salad Beach, we&apos;re perfectly positioned to offer both serenity and adventure.
              Our beachfront location provides:
            </p>
            <ul style={{ lineHeight: '1.6' }}>
              <li>• Direct access to pristine white sand beach</li>
              <li>• Crystal clear waters perfect for swimming</li>
              <li>• Stunning sunrise and sunset views</li>
              <li>• Easy access to island attractions</li>
              <li>• Peaceful atmosphere away from crowds</li>
            </ul>
          </div>
          
          <div style={{ 
            backgroundColor: '#f8f9fa', 
            padding: '2rem', 
            borderRadius: '8px',
            border: '2px solid #ed6664'
          }}>
            <h3 style={{ color: '#ed6664', marginBottom: '1rem' }}>🤝 Community Commitment</h3>
            <p style={{ lineHeight: '1.6', marginBottom: '1rem' }}>
              We believe in giving back to the community that has welcomed us. Our initiatives include:
            </p>
            <ul style={{ lineHeight: '1.6' }}>
              <li>• Supporting local fishermen and farmers</li>
              <li>• Employing local staff and guides</li>
              <li>• Beach and marine conservation programs</li>
              <li>• Cultural exchange opportunities</li>
              <li>• Educational workshops for visitors</li>
            </ul>
          </div>
        </div>
        
        <div style={{ 
          maxWidth: '800px', 
          margin: '0 auto',
          backgroundColor: '#f8f9fa', 
          padding: '2rem', 
          borderRadius: '8px',
          marginBottom: '2rem'
        }}>
          <h2 style={{ color: '#ed6664', marginBottom: '1rem', textAlign: 'center' }}>Our Promise to You</h2>
          <p style={{ textAlign: 'center', lineHeight: '1.6', marginBottom: '1rem' }}>
            When you stay with us, you&apos;re not just a guest – you&apos;re part of our extended family. We promise to provide 
            you with an authentic, sustainable, and unforgettable experience that respects both you and our beautiful island home.
          </p>
          <p style={{ textAlign: 'center', lineHeight: '1.6' }}>
            Whether you&apos;re seeking adventure, relaxation, or cultural immersion, we&apos;re here to help you create memories 
            that will last a lifetime while preserving this paradise for future generations.
          </p>
        </div>
        
        <div style={{ 
          backgroundColor: '#ed6664', 
          color: 'white', 
          padding: '2rem', 
          borderRadius: '8px', 
          textAlign: 'center',
          marginTop: '2rem'
        }}>
          <h3 style={{ marginBottom: '1rem' }}>Ready to Join Our Family?</h3>
          <p style={{ marginBottom: '1rem' }}>Experience the warmth of Thai hospitality and the beauty of sustainable tourism.</p>
          <p style={{ fontSize: '1.1rem', fontWeight: 'bold' }}>📞 +66 81 234 5678 | ✉️ info@coconutbeachkohphangan.com</p>
        </div>
      </div>
    </Layout>
  );
}
