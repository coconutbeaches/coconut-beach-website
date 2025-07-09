import { Metadata } from 'next';
import { Layout } from '../../components/Layout';

export const metadata: Metadata = {
  title: 'Contact',
  description: 'Contact Coconut Beach Bungalows for reservations, inquiries, or information about our eco-friendly accommodations on Salad Beach, Koh Phangan.',
  keywords: 'contact, reservations, booking, inquiries, Koh Phangan, Salad Beach, phone, email',
  openGraph: {
    title: 'Contact - Coconut Beach Bungalows',
    description: 'Contact us for reservations, inquiries, or information about our eco-friendly accommodations on Salad Beach, Koh Phangan',
  },
};

export default function Contact() {
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
          Contact Us
        </h1>
        <p style={{ 
          fontSize: '1.2rem', 
          marginBottom: '2rem',
          textAlign: 'center',
          maxWidth: '800px',
          margin: '0 auto 2rem'
        }}>
          Ready to book your tropical paradise getaway? We&apos;d love to hear from you and help plan your perfect stay at Coconut Beach Bungalows.
        </p>
        
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
            <h3 style={{ color: '#ed6664', marginBottom: '1.5rem' }}>📞 Call Us</h3>
            <p style={{ marginBottom: '1rem', lineHeight: '1.6' }}>
              Our friendly staff is available to help with reservations, questions, and planning your stay.
            </p>
            <p style={{ fontSize: '1.1rem', fontWeight: 'bold', color: '#2c3e50' }}>
              +66 81 234 5678
            </p>
            <p style={{ fontSize: '0.9rem', color: '#666', marginTop: '0.5rem' }}>
              Daily: 8:00 AM - 10:00 PM (Thailand Time)
            </p>
          </div>
          
          <div style={{ 
            backgroundColor: '#f8f9fa', 
            padding: '2rem', 
            borderRadius: '8px',
            border: '2px solid #ed6664'
          }}>
            <h3 style={{ color: '#ed6664', marginBottom: '1.5rem' }}>✉️ Email Us</h3>
            <p style={{ marginBottom: '1rem', lineHeight: '1.6' }}>
              Send us an email for detailed inquiries, special requests, or general information.
            </p>
            <p style={{ fontSize: '1.1rem', fontWeight: 'bold', color: '#2c3e50' }}>
              info@coconutbeachkohphangan.com
            </p>
            <p style={{ fontSize: '0.9rem', color: '#666', marginTop: '0.5rem' }}>
              We typically respond within 24 hours
            </p>
          </div>
          
          <div style={{ 
            backgroundColor: '#f8f9fa', 
            padding: '2rem', 
            borderRadius: '8px',
            border: '2px solid #ed6664'
          }}>
            <h3 style={{ color: '#ed6664', marginBottom: '1.5rem' }}>📍 Visit Us</h3>
            <p style={{ marginBottom: '1rem', lineHeight: '1.6' }}>
              Find us on the beautiful Salad Beach, one of Koh Phangan&apos;s most pristine locations.
            </p>
            <p style={{ fontSize: '1.1rem', fontWeight: 'bold', color: '#2c3e50' }}>
              Salad Beach, Koh Phangan<br/>
              Surat Thani, Thailand
            </p>
            <p style={{ fontSize: '0.9rem', color: '#666', marginTop: '0.5rem' }}>
              Just 15 minutes from Thong Sala Pier
            </p>
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
          <h2 style={{ color: '#ed6664', marginBottom: '1.5rem', textAlign: 'center' }}>Getting Here</h2>
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', 
            gap: '1.5rem'
          }}>
            <div>
              <h4 style={{ color: '#2c3e50', marginBottom: '0.5rem' }}>✈️ From Airport</h4>
              <p style={{ fontSize: '0.9rem', lineHeight: '1.6' }}>
                Fly into Koh Samui Airport, take ferry to Koh Phangan (Thong Sala Pier), then taxi or motorbike to Salad Beach.
              </p>
            </div>
            <div>
              <h4 style={{ color: '#2c3e50', marginBottom: '0.5rem' }}>⛴️ By Ferry</h4>
              <p style={{ fontSize: '0.9rem', lineHeight: '1.6' }}>
                Regular ferries from Koh Samui and mainland Thailand arrive at Thong Sala Pier. We can arrange pickup.
              </p>
            </div>
            <div>
              <h4 style={{ color: '#2c3e50', marginBottom: '0.5rem' }}>🚗 Local Transport</h4>
              <p style={{ fontSize: '0.9rem', lineHeight: '1.6' }}>
                Motorbike taxis, songthaews, and rental scooters are available for the short journey to our bungalows.
              </p>
            </div>
          </div>
        </div>
        
        <div style={{ 
          backgroundColor: '#f8f9fa', 
          padding: '2rem', 
          borderRadius: '8px',
          marginBottom: '2rem'
        }}>
          <h2 style={{ color: '#ed6664', marginBottom: '1.5rem', textAlign: 'center' }}>Booking Information</h2>
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', 
            gap: '1.5rem'
          }}>
            <div>
              <h4 style={{ color: '#2c3e50', marginBottom: '0.5rem' }}>📅 Reservation Policy</h4>
              <ul style={{ fontSize: '0.9rem', lineHeight: '1.6' }}>
                <li>• Advanced booking recommended</li>
                <li>• Minimum 2-night stay during peak season</li>
                <li>• Deposit required to secure reservation</li>
                <li>• Flexible cancellation policy</li>
              </ul>
            </div>
            <div>
              <h4 style={{ color: '#2c3e50', marginBottom: '0.5rem' }}>💳 Payment Options</h4>
              <ul style={{ fontSize: '0.9rem', lineHeight: '1.6' }}>
                <li>• Cash (Thai Baht preferred)</li>
                <li>• Credit cards accepted</li>
                <li>• Bank transfers available</li>
                <li>• PayPal for international guests</li>
              </ul>
            </div>
            <div>
              <h4 style={{ color: '#2c3e50', marginBottom: '0.5rem' }}>🌟 Special Requests</h4>
              <ul style={{ fontSize: '0.9rem', lineHeight: '1.6' }}>
                <li>• Dietary requirements</li>
                <li>• Airport transfers</li>
                <li>• Tour arrangements</li>
                <li>• Celebration packages</li>
              </ul>
            </div>
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
          <h3 style={{ marginBottom: '1rem' }}>Ready to Book Your Paradise Escape?</h3>
          <p style={{ marginBottom: '1rem' }}>
            Don&apos;t wait – our bungalows fill up quickly, especially during peak season. Contact us today to secure your dates!
          </p>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '2rem', flexWrap: 'wrap' }}>
            <div>
              <p style={{ fontSize: '1.1rem', fontWeight: 'bold' }}>📞 +66 81 234 5678</p>
            </div>
            <div>
              <p style={{ fontSize: '1.1rem', fontWeight: 'bold' }}>✉️ info@coconutbeachkohphangan.com</p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
