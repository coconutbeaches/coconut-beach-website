'use client';

import { useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';

interface BookingData {
  checkIn: string;
  checkOut: string;
  guests: string;
  selected?: string;
}

const BungalowsClient: React.FC = () => {
  const searchParams = useSearchParams();
  const [bookingData, setBookingData] = useState<BookingData | null>(null);

  useEffect(() => {
    const checkIn = searchParams.get('checkIn');
    const checkOut = searchParams.get('checkOut');
    const guests = searchParams.get('guests');
    const selected = searchParams.get('selected');

    if (checkIn && checkOut && guests) {
      setBookingData({
        checkIn,
        checkOut,
        guests,
        selected: selected || undefined
      });
    } else if (selected) {
      setBookingData({
        checkIn: '',
        checkOut: '',
        guests: '',
        selected
      });
    }
  }, [searchParams]);

  return (
    <div>
      {bookingData && (
        <div style={{ 
          backgroundColor: '#ed6664', 
          color: 'white', 
          padding: '1rem', 
          borderRadius: '8px', 
          marginBottom: '2rem',
          textAlign: 'center'
        }}>
          <h3 style={{ marginBottom: '0.5rem' }}>Booking Details</h3>
          {bookingData.selected && (
            <p>Selected Bungalow: {bookingData.selected.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase())}</p>
          )}
          {bookingData.checkIn && <p>Check-in: {new Date(bookingData.checkIn).toLocaleDateString()}</p>}
          {bookingData.checkOut && <p>Check-out: {new Date(bookingData.checkOut).toLocaleDateString()}</p>}
          {bookingData.guests && <p>Guests: {bookingData.guests}</p>}
          <p style={{ marginTop: '1rem', fontStyle: 'italic' }}>
            🚧 Booking system coming soon! Please contact us directly for now.
          </p>
        </div>
      )}
      
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
          <h3 style={{ color: '#ed6664', marginBottom: '1rem' }}>Seaview Bungalows</h3>
          <p>Wake up to breathtaking ocean views from your private terrace. These elevated bungalows offer the perfect blend of comfort and natural beauty.</p>
          <ul style={{ marginTop: '1rem' }}>
            <li>• Private bathroom with hot water</li>
            <li>• Air conditioning and fan</li>
            <li>• Ocean view terrace</li>
            <li>• Mini-fridge</li>
          </ul>
        </div>
        
        <div style={{ 
          backgroundColor: '#f8f9fa', 
          padding: '1.5rem', 
          borderRadius: '8px',
          border: '2px solid #ed6664'
        }}>
          <h3 style={{ color: '#ed6664', marginBottom: '1rem' }}>Jungle Bungalows</h3>
          <p>Immerse yourself in nature with our jungle-side bungalows. Perfect for those seeking tranquility and a connection with the tropical environment.</p>
          <ul style={{ marginTop: '1rem' }}>
            <li>• Surrounded by tropical vegetation</li>
            <li>• Private bathroom</li>
            <li>• Fan cooling system</li>
            <li>• Peaceful jungle atmosphere</li>
          </ul>
        </div>
        
        <div style={{ 
          backgroundColor: '#f8f9fa', 
          padding: '1.5rem', 
          borderRadius: '8px',
          border: '2px solid #ed6664'
        }}>
          <h3 style={{ color: '#ed6664', marginBottom: '1rem' }}>Beachfront Bungalows</h3>
          <p>Step directly onto the sand from your doorstep. Our beachfront bungalows offer the ultimate beach experience with unparalleled access to the sea.</p>
          <ul style={{ marginTop: '1rem' }}>
            <li>• Direct beach access</li>
            <li>• Private bathroom with hot water</li>
            <li>• Air conditioning</li>
            <li>• Beachfront terrace</li>
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
        <h3 style={{ marginBottom: '1rem' }}>Ready to Book Your Stay?</h3>
        <p style={{ marginBottom: '1rem' }}>Contact us today to check availability and make your reservation.</p>
        <p style={{ fontSize: '1.1rem', fontWeight: 'bold' }}>📞 +66 81 234 5678 | ✉️ info@coconutbeachkohphangan.com</p>
      </div>
    </div>
  );
};

export default BungalowsClient;
