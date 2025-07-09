'use client';

import React from 'react';
import styled from 'styled-components';
import Slider from 'react-slick';
import { OptimizedImage } from './OptimizedImage';
import { Button } from './Button';
import { ImageKey } from '../lib/images';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

interface BungalowSpec {
  size: string;
  beds: string;
  occupancy: string;
}

interface BungalowData {
  id: string;
  name: string;
  imageKey: ImageKey;
  specs: BungalowSpec;
  checkIn?: string;
  checkOut?: string;
  guests?: string;
}

interface BungalowsCarouselProps {
  bungalows?: BungalowData[];
  className?: string;
}

const CarouselContainer = styled.div`
  position: relative;
  width: 100%;
  padding: ${({ theme }) => theme.spacing.xl} 0;

  .slick-slider {
    margin: 0 -${({ theme }) => theme.spacing.sm};
  }

  .slick-slide {
    padding: 0 ${({ theme }) => theme.spacing.sm};
  }

  .slick-dots {
    bottom: -50px;
    
    li button:before {
      color: ${({ theme }) => theme.palette.coral};
      font-size: 12px;
      opacity: 0.5;
    }
    
    li.slick-active button:before {
      opacity: 1;
    }
  }

  .slick-arrow {
    z-index: 10;
    
    &:before {
      color: ${({ theme }) => theme.palette.coral};
      font-size: 24px;
      opacity: 0.8;
    }
    
    &:hover:before {
      opacity: 1;
    }
  }

  .slick-prev {
    left: -40px;
    
    @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
      left: -30px;
    }
    
    @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
      left: -20px;
    }
  }

  .slick-next {
    right: -40px;
    
    @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
      right: -30px;
    }
    
    @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
      right: -20px;
    }
  }
`;

const BungalowCard = styled.div`
  background: ${({ theme }) => theme.backgrounds.primary};
  border-radius: 12px;
  overflow: hidden;
  box-shadow: ${({ theme }) => theme.shadows.md};
  transition: all 0.3s ease;
  height: 100%;
  display: flex;
  flex-direction: column;
  
  &:hover {
    transform: translateY(-8px);
    box-shadow: ${({ theme }) => theme.shadows.xl};
  }
`;

const ImageContainer = styled.div`
  position: relative;
  width: 100%;
  height: 200px;
  overflow: hidden;
  
  img {
    object-fit: cover;
    transition: transform 0.3s ease;
  }
  
  &:hover img {
    transform: scale(1.05);
  }
`;

const CardContent = styled.div`
  padding: ${({ theme }) => theme.spacing.lg};
  flex: 1;
  display: flex;
  flex-direction: column;
`;

const BungalowName = styled.h3`
  font-family: ${({ theme }) => theme.fonts.heading};
  font-size: ${({ theme }) => theme.sizes.xl};
  color: ${({ theme }) => theme.palette.coral};
  margin-bottom: ${({ theme }) => theme.spacing.md};
  text-align: center;
`;

const SpecList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0 0 ${({ theme }) => theme.spacing.lg} 0;
  flex: 1;
`;

const SpecItem = styled.li`
  display: flex;
  align-items: center;
  padding: ${({ theme }) => theme.spacing.xs} 0;
  font-size: ${({ theme }) => theme.sizes.sm};
  color: ${({ theme }) => theme.text.primary};
  
  &:before {
    content: "✓";
    color: ${({ theme }) => theme.palette.coral};
    font-weight: bold;
    margin-right: ${({ theme }) => theme.spacing.sm};
  }
`;

const BookButton = styled(Button)`
  width: 100%;
  margin-top: auto;
`;

const SectionTitle = styled.h2`
  font-family: ${({ theme }) => theme.fonts.heading};
  font-size: ${({ theme }) => theme.sizes['3xl']};
  color: ${({ theme }) => theme.palette.coral};
  text-align: center;
  margin-bottom: ${({ theme }) => theme.spacing.xl};
  
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    font-size: ${({ theme }) => theme.sizes['2xl']};
  }
  
  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    font-size: ${({ theme }) => theme.sizes.xl};
  }
`;

// Default bungalow data
const defaultBungalows: BungalowData[] = [
  {
    id: 'seaview-deluxe',
    name: 'Seaview Deluxe',
    imageKey: 'seaview2Bed',
    specs: {
      size: '45 sqm',
      beds: '2 beds',
      occupancy: '4 guests'
    }
  },
  {
    id: 'beachfront-house',
    name: 'Beachfront House',
    imageKey: 'beachfrontHouse',
    specs: {
      size: '65 sqm',
      beds: '3 beds',
      occupancy: '6 guests'
    }
  },
  {
    id: 'jungle-retreat',
    name: 'Jungle Retreat',
    imageKey: 'seaviewJungle',
    specs: {
      size: '35 sqm',
      beds: '1 bed',
      occupancy: '2 guests'
    }
  },
  {
    id: 'family-suite',
    name: 'Family Suite',
    imageKey: 'twoBedroomTwoBath',
    specs: {
      size: '55 sqm',
      beds: '2 beds',
      occupancy: '5 guests'
    }
  },
  {
    id: 'premium-bungalow',
    name: 'Premium Bungalow',
    imageKey: 'a3Bungalow',
    specs: {
      size: '40 sqm',
      beds: '2 beds',
      occupancy: '3 guests'
    }
  },
  {
    id: 'ocean-view-suite',
    name: 'Ocean View Suite',
    imageKey: 'aboutResort',
    specs: {
      size: '50 sqm',
      beds: '2 beds',
      occupancy: '4 guests'
    }
  }
];

const BungalowsCarousel: React.FC<BungalowsCarouselProps> = ({ 
  bungalows = defaultBungalows,
  className 
}) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 4000,
    pauseOnHover: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1199, // lg breakpoint
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 991, // md breakpoint
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 767, // sm breakpoint
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 575, // xs breakpoint
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      }
    ]
  };

  const handleBookNow = (bungalow: BungalowData) => {
    // Create query parameters for booking widget
    const queryParams = new URLSearchParams();
    
    // Add bungalow selection
    queryParams.append('selected', bungalow.id);
    
    // Add existing booking data if available
    if (bungalow.checkIn) queryParams.append('checkIn', bungalow.checkIn);
    if (bungalow.checkOut) queryParams.append('checkOut', bungalow.checkOut);
    if (bungalow.guests) queryParams.append('guests', bungalow.guests);
    
    // Navigate to booking page
    window.location.href = `/bungalows?${queryParams.toString()}`;
  };

  return (
    <div className={className}>
      <SectionTitle>Our Bungalows</SectionTitle>
      <CarouselContainer>
        <Slider {...settings}>
          {bungalows.map((bungalow) => (
            <div key={bungalow.id}>
              <BungalowCard>
                <ImageContainer>
                  <OptimizedImage
                    imageKey={bungalow.imageKey}
                    alt={bungalow.name}
                    fill
                    loading="lazy"
                    responsive={{
                      xs: '100vw',
                      sm: '50vw',
                      md: '33vw',
                      lg: '25vw',
                      default: '20vw'
                    }}
                    style={{
                      objectFit: 'cover',
                    }}
                  />
                </ImageContainer>
                <CardContent>
                  <BungalowName>{bungalow.name}</BungalowName>
                  <SpecList>
                    <SpecItem>Size: {bungalow.specs.size}</SpecItem>
                    <SpecItem>Beds: {bungalow.specs.beds}</SpecItem>
                    <SpecItem>Occupancy: {bungalow.specs.occupancy}</SpecItem>
                  </SpecList>
                  <BookButton 
                    variant="primary" 
                    size="sm"
                    onClick={() => handleBookNow(bungalow)}
                  >
                    Book Now
                  </BookButton>
                </CardContent>
              </BungalowCard>
            </div>
          ))}
        </Slider>
      </CarouselContainer>
    </div>
  );
};

export default BungalowsCarousel;
