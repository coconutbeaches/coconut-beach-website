'use client';

import React from 'react';
import styled from 'styled-components';
import { mediaQuery, responsiveSpacing } from '../styles/responsive';

const InfoSectionContainer = styled.section`
  ${responsiveSpacing.container}
  ${responsiveSpacing.section}
  background: ${({ theme }) => theme.backgrounds.primary};
  color: ${({ theme }) => theme.text.primary};
`;

const InfoContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;

  ${mediaQuery.md`
    max-width: 768px;
  `}

  ${mediaQuery.sm`
    max-width: 576px;
  `}
`;

const InfoParagraph = styled.p`
  font-family: ${({ theme }) => theme.fonts.main};
  font-size: ${({ theme }) => theme.sizes.lg};
  line-height: 1.8;
  margin-bottom: ${({ theme }) => theme.spacing.xl};
  color: ${({ theme }) => theme.text.primary};

  ${mediaQuery.md`
    font-size: ${({ theme }) => theme.sizes.md};
    line-height: 1.7;
    margin-bottom: ${({ theme }) => theme.spacing.lg};
  `}

  ${mediaQuery.sm`
    font-size: ${({ theme }) => theme.sizes.md};
    line-height: 1.6;
    margin-bottom: ${({ theme }) => theme.spacing.md};
  `}
  
  &:last-child {
    margin-bottom: 0;
  }
`;

const InfoSection: React.FC = () => {
  return (
    <InfoSectionContainer>
      <InfoContent>
        <InfoParagraph>
          Nestled on the pristine shores of Salad Beach, Koh Phangan, Coconut
          Beach offers an authentic eco-friendly retreat in perfect harmony with
          nature. Our sustainable bamboo bungalows are built using
          locally-sourced materials and traditional Thai craftsmanship,
          featuring solar power, rainwater harvesting, and natural ventilation
          systems. Wake up to stunning sunrise views over the Gulf of Thailand,
          just steps from crystal-clear waters and untouched coral reefs perfect
          for snorkeling and diving.
        </InfoParagraph>

        <InfoParagraph>
          We welcome guests of all ages and offer flexible accommodation options
          for families, couples, and solo travelers. Group bookings of 6 or more
          receive special discounts and can be arranged with advance notice.
          Children under 12 stay free when sharing with parents, and we provide
          complimentary cribs and high chairs upon request. Our property
          maintains a peaceful atmosphere perfect for relaxation, with quiet
          hours observed from 10 PM to 7 AM to ensure all guests can enjoy the
          tranquil sounds of the ocean.
        </InfoParagraph>

        <InfoParagraph>
          Experience the best of island living with our comprehensive range of
          activities and amenities. Enjoy complimentary kayaks, snorkeling gear,
          and beach volleyball equipment, or join our daily yoga sessions at
          sunrise. Our on-site restaurant serves fresh seafood and authentic
          Thai cuisine using organic ingredients from local farmers. Take
          advantage of our tour desk to explore nearby attractions like Than
          Sadet Waterfall, Secret Beach, and the famous Full Moon Party venues.
          Free Wi-Fi, laundry service, and motorcycle rentals are available to
          enhance your stay.
        </InfoParagraph>
      </InfoContent>
    </InfoSectionContainer>
  );
};

export default InfoSection;
