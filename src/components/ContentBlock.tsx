import React from 'react';
import styled from 'styled-components';

const Block = styled.div`
  max-width: 1140px;
  margin: 0 auto;
  padding: 3rem 2rem;
  font-family: ${({ theme }) => theme.fonts.main};
  color: ${({ theme }) => theme.text.primary};

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    padding: 2rem 1.5rem;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    padding: 1.5rem 1rem;
  }

  /* Typography - using exact rem values from theme */
  h2 {
    font-size: ${({ theme }) => theme.sizes['4xl']}; /* 2.25rem = 36px */
    color: ${({ theme }) => theme.text.accent};
    margin-bottom: ${({ theme }) => theme.spacing.xl}; /* 2rem = 32px */
    margin-top: ${({ theme }) => theme.spacing['2xl']}; /* 3rem = 48px */
    font-family: ${({ theme }) => theme.fonts.heading};
    line-height: 1.2;
    font-weight: 400;
    
    &:first-child {
      margin-top: 0;
    }
  }

  h3 {
    font-size: ${({ theme }) => theme.sizes['3xl']}; /* 1.875rem = 30px */
    color: ${({ theme }) => theme.text.accent};
    margin-bottom: ${({ theme }) => theme.spacing.lg}; /* 1.5rem = 24px */
    margin-top: ${({ theme }) => theme.spacing.xl}; /* 2rem = 32px */
    font-family: ${({ theme }) => theme.fonts.heading};
    line-height: 1.2;
    font-weight: 400;
    
    &:first-child {
      margin-top: 0;
    }
  }

  p {
    margin-bottom: ${({ theme }) => theme.spacing.md}; /* 1rem = 16px */
    line-height: 1.6;
    font-size: ${({ theme }) => theme.sizes.md}; /* 1rem = 16px */
    color: ${({ theme }) => theme.text.primary};
    
    &:last-child {
      margin-bottom: 0;
    }
  }

  ul {
    margin-bottom: ${({ theme }) => theme.spacing.xl}; /* 2rem = 32px */
    padding-left: 0;
    
    &:last-child {
      margin-bottom: 0;
    }

    li {
      list-style-type: none;
      margin-bottom: ${({ theme }) => theme.spacing.sm}; /* 0.5rem = 8px */
      position: relative;
      padding-left: ${({ theme }) => theme.spacing.lg}; /* 1.5rem = 24px */
      line-height: 1.6;
      font-size: ${({ theme }) => theme.sizes.md}; /* 1rem = 16px */
      color: ${({ theme }) => theme.text.primary};
      
      &:last-child {
        margin-bottom: 0;
      }

      &::before {
        content: '•';
        position: absolute;
        left: 0;
        color: ${({ theme }) => theme.text.accent};
        font-weight: bold;
      }
    }
  }

  /* Section spacing */
  section {
    margin-bottom: ${({ theme }) => theme.spacing['2xl']}; /* 3rem = 48px */
    
    &:last-child {
      margin-bottom: 0;
    }
  }
`;

const ContentBlock: React.FC = () => {
  return (
    <Block>
      <section>
        <h2>Our Story</h2>
        <p>Founded in 2015, Coconut Beach Bungalows was born from a dream to create an authentic Thai hospitality experience
           that respects and preserves the natural beauty of Koh Phangan. Our founders, a local Thai family with deep roots
           in the island community, envisioned a place where travelers could connect with nature while enjoying comfortable,
           eco-friendly accommodations.</p>
        <p>What started as a small collection of traditional bamboo bungalows has grown into a beloved destination for
           travelers seeking an authentic island experience. We&apos;ve maintained our commitment to sustainability and
           community involvement while continuously improving our facilities and services.</p>
      </section>

      <section>
        <h3>🌱 Our Eco-Friendly Philosophy</h3>
        <ul>
          <li>Solar power for hot water and lighting</li>
          <li>Rainwater harvesting systems</li>
          <li>Locally sourced, organic materials</li>
          <li>Waste reduction and recycling programs</li>
          <li>Native plant landscaping</li>
          <li>Support for local conservation efforts</li>
        </ul>
      </section>

      <section>
        <h3>🏝️ Our Location</h3>
        <p>Nestled on the tranquil Salad Beach, we&apos;re perfectly positioned to offer both serenity and adventure.
           Our beachfront location provides:</p>
        <ul>
          <li>Direct access to pristine white sand beach</li>
          <li>Crystal clear waters perfect for swimming</li>
          <li>Stunning sunrise and sunset views</li>
          <li>Easy access to island attractions</li>
          <li>Peaceful atmosphere away from crowds</li>
        </ul>
      </section>

      <section>
        <h3>🤝 Community Commitment</h3>
        <p>We believe in giving back to the community that has welcomed us. Our initiatives include:</p>
        <ul>
          <li>Supporting local fishermen and farmers</li>
          <li>Employing local staff and guides</li>
          <li>Beach and marine conservation programs</li>
          <li>Cultural exchange opportunities</li>
          <li>Educational workshops for visitors</li>
        </ul>
      </section>

      <section>
        <h2>Resort Policies</h2>
        <p>To ensure a pleasant stay for all guests and to maintain the natural beauty of our environment,
           we have established the following policies:</p>
      </section>

      <section>
        <h3>Check-in & Check-out</h3>
        <ul>
          <li>Check-in: 2:00 PM - 11:00 PM</li>
          <li>Check-out: 6:00 AM - 12:00 PM</li>
          <li>Early check-in and late check-out available upon request</li>
          <li>Valid photo ID required at check-in</li>
          <li>Advance notice required for arrivals after 11:00 PM</li>
        </ul>
      </section>

      <section>
        <h3>Cancellation Policy</h3>
        <ul>
          <li>Free cancellation up to 48 hours before arrival</li>
          <li>Cancellations within 48 hours subject to one night&apos;s charge</li>
          <li>No-show reservations charged in full</li>
          <li>Peak season bookings may have different cancellation terms</li>
        </ul>
      </section>

      <section>
        <h3>Environmental Guidelines</h3>
        <ul>
          <li>No single-use plastics on property</li>
          <li>Reef-safe sunscreen only</li>
          <li>Respect marine life and coral reefs</li>
          <li>Participate in our towel and linen reuse program</li>
          <li>No feeding of wildlife</li>
          <li>Proper waste disposal and recycling</li>
        </ul>
      </section>

      <section>
        <h3>Property Rules</h3>
        <ul>
          <li>Quiet hours: 10:00 PM - 8:00 AM</li>
          <li>No smoking in bungalows or common areas</li>
          <li>Pets not permitted</li>
          <li>Maximum occupancy strictly enforced</li>
          <li>Outside food and beverages not permitted in restaurant areas</li>
          <li>Beachfront fires only in designated areas</li>
        </ul>
      </section>

      <section>
        <h3>Payment & Deposits</h3>
        <ul>
          <li>50% deposit required to secure reservation</li>
          <li>Final payment due upon arrival</li>
          <li>Thai Baht, USD, EUR accepted</li>
          <li>Credit cards accepted (Visa, Mastercard)</li>
          <li>Security deposit may be required for certain room types</li>
        </ul>
      </section>
    </Block>
  );
};

export default ContentBlock;
