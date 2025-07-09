import { Metadata } from 'next';
import { Layout } from '../../components/Layout';

export const metadata: Metadata = {
  title: 'Gallery',
  description: 'View our photo gallery showcasing the beautiful bungalows, pristine beaches, and tropical paradise of Coconut Beach Bungalows, Koh Phangan.',
  keywords: 'gallery, photos, bungalows, beach, Koh Phangan, Salad Beach, tropical paradise',
  openGraph: {
    title: 'Gallery - Coconut Beach Bungalows',
    description: 'View our photo gallery showcasing the beautiful bungalows and pristine beaches of Koh Phangan',
  },
};

export default function Gallery() {
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
          Gallery
        </h1>
        <p style={{ 
          fontSize: '1.2rem', 
          marginBottom: '2rem',
          textAlign: 'center',
          maxWidth: '800px',
          margin: '0 auto 2rem'
        }}>
          Explore our beautiful bungalows, pristine beachfront location, and the natural beauty of Salad Beach through our photo gallery.
        </p>
        
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', 
          gap: '1.5rem',
          marginBottom: '2rem'
        }}>
          <div style={{ 
            backgroundColor: '#f8f9fa', 
            padding: '1rem', 
            borderRadius: '8px',
            border: '2px solid #ed6664',
            textAlign: 'center'
          }}>
            <div style={{ 
              height: '200px', 
              backgroundColor: '#ddd', 
              borderRadius: '4px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              marginBottom: '1rem'
            }}>
              <span style={{ color: '#666' }}>🏖️ Beachfront Views</span>
            </div>
            <h4 style={{ color: '#ed6664', marginBottom: '0.5rem' }}>Pristine Salad Beach</h4>
            <p style={{ fontSize: '0.9rem' }}>Crystal clear waters and white sand right at your doorstep.</p>
          </div>
          
          <div style={{ 
            backgroundColor: '#f8f9fa', 
            padding: '1rem', 
            borderRadius: '8px',
            border: '2px solid #ed6664',
            textAlign: 'center'
          }}>
            <div style={{ 
              height: '200px', 
              backgroundColor: '#ddd', 
              borderRadius: '4px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              marginBottom: '1rem'
            }}>
              <span style={{ color: '#666' }}>🏡 Seaview Bungalows</span>
            </div>
            <h4 style={{ color: '#ed6664', marginBottom: '0.5rem' }}>Ocean View Accommodations</h4>
            <p style={{ fontSize: '0.9rem' }}>Comfortable bungalows with stunning ocean panoramas.</p>
          </div>
          
          <div style={{ 
            backgroundColor: '#f8f9fa', 
            padding: '1rem', 
            borderRadius: '8px',
            border: '2px solid #ed6664',
            textAlign: 'center'
          }}>
            <div style={{ 
              height: '200px', 
              backgroundColor: '#ddd', 
              borderRadius: '4px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              marginBottom: '1rem'
            }}>
              <span style={{ color: '#666' }}>🌴 Jungle Bungalows</span>
            </div>
            <h4 style={{ color: '#ed6664', marginBottom: '0.5rem' }}>Tropical Jungle Settings</h4>
            <p style={{ fontSize: '0.9rem' }}>Surrounded by lush tropical vegetation and wildlife.</p>
          </div>
          
          <div style={{ 
            backgroundColor: '#f8f9fa', 
            padding: '1rem', 
            borderRadius: '8px',
            border: '2px solid #ed6664',
            textAlign: 'center'
          }}>
            <div style={{ 
              height: '200px', 
              backgroundColor: '#ddd', 
              borderRadius: '4px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              marginBottom: '1rem'
            }}>
              <span style={{ color: '#666' }}>🍽️ Restaurant & Dining</span>
            </div>
            <h4 style={{ color: '#ed6664', marginBottom: '0.5rem' }}>Beachfront Dining</h4>
            <p style={{ fontSize: '0.9rem' }}>Fresh seafood and Thai cuisine with ocean views.</p>
          </div>
          
          <div style={{ 
            backgroundColor: '#f8f9fa', 
            padding: '1rem', 
            borderRadius: '8px',
            border: '2px solid #ed6664',
            textAlign: 'center'
          }}>
            <div style={{ 
              height: '200px', 
              backgroundColor: '#ddd', 
              borderRadius: '4px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              marginBottom: '1rem'
            }}>
              <span style={{ color: '#666' }}>🌅 Sunset Views</span>
            </div>
            <h4 style={{ color: '#ed6664', marginBottom: '0.5rem' }}>Spectacular Sunsets</h4>
            <p style={{ fontSize: '0.9rem' }}>Breathtaking sunsets over the Gulf of Thailand.</p>
          </div>
          
          <div style={{ 
            backgroundColor: '#f8f9fa', 
            padding: '1rem', 
            borderRadius: '8px',
            border: '2px solid #ed6664',
            textAlign: 'center'
          }}>
            <div style={{ 
              height: '200px', 
              backgroundColor: '#ddd', 
              borderRadius: '4px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              marginBottom: '1rem'
            }}>
              <span style={{ color: '#666' }}>🌊 Water Activities</span>
            </div>
            <h4 style={{ color: '#ed6664', marginBottom: '0.5rem' }}>Beach Activities</h4>
            <p style={{ fontSize: '0.9rem' }}>Snorkeling, kayaking, and water sports galore.</p>
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
          <h3 style={{ marginBottom: '1rem' }}>Ready to Experience Paradise?</h3>
          <p style={{ marginBottom: '1rem' }}>Book your stay at Coconut Beach Bungalows and create memories that will last a lifetime.</p>
          <p style={{ fontSize: '1.1rem', fontWeight: 'bold' }}>📞 +66 81 234 5678 | ✉️ info@coconutbeachkohphangan.com</p>
        </div>
      </div>
    </Layout>
  );
}
