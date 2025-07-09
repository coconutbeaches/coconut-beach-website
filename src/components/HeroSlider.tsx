'use client';

import React from 'react';
import styled from 'styled-components';
import Slider from 'react-slick';
import { OptimizedImage } from './OptimizedImage';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { mediaQuery, responsiveFontSizes } from '../styles/responsive';

const HeroSliderContainer = styled.div`
  position: relative;
  width: 100%;
  height: 100vh;
  max-height: 800px;
  overflow: hidden;
  z-index: 1;

  ${mediaQuery.lg`
    height: 80vh;
    max-height: 600px;
  `}

  ${mediaQuery.md`
    height: 60vh;
    max-height: 500px;
  `}

  ${mediaQuery.sm`
    height: 50vh;
    max-height: 400px;
  `}
  
  ${mediaQuery.xs`
    height: 40vh;
    max-height: 300px;
  `}

  .slick-slider {
    height: 100%;
  }

  .slick-list {
    height: 100%;
  }

  .slick-track {
    height: 100%;
  }

  .slick-slide {
    height: 100%;

    > div {
      height: 100%;
    }
  }

  .slick-dots {
    bottom: 30px;

    li button:before {
      color: white;
      font-size: 12px;
      opacity: 0.5;
    }

    li.slick-active button:before {
      opacity: 1;
    }
  }
`;

const SlideImage = styled.div`
  position: relative;
  width: 100%;
  height: 100%;

  img {
    object-fit: cover;
    width: 100%;
    height: 100%;
  }
`;

const TitleOverlay = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  color: white;
  z-index: 10;
  background: rgba(0, 0, 0, 0.3);
  padding: 3rem 2rem;
  border-radius: 12px;
  backdrop-filter: blur(5px);

  ${mediaQuery.lg`
    padding: 2rem 1.5rem;
  `}

  ${mediaQuery.md`
    padding: 1.5rem 1rem;
  `}
  
  ${mediaQuery.sm`
    padding: 1rem 0.5rem;
  `}
  
  ${mediaQuery.xs`
    padding: 0.5rem 0.25rem;
  `}

  h1 {
    font-family: 'Swanky and Moo Moo', cursive;
    ${responsiveFontSizes.h1}
    margin-bottom: 1rem;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);

    ${mediaQuery.sm`
      margin-bottom: 0.5rem;
    `}

    ${mediaQuery.xs`
      margin-bottom: 0.25rem;
    `}
  }

  h2 {
    font-family: 'Poppins', sans-serif;
    ${responsiveFontSizes.h2}
    font-weight: 300;
    margin-bottom: 0;
    text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.5);
  }
`;

const CustomArrow = styled.button<{ $direction: 'prev' | 'next' }>`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  ${({ $direction }) =>
    $direction === 'prev' ? 'left: 30px;' : 'right: 30px;'}

  background: #ed6664;
  border: none;
  border-radius: 50%;
  width: 50px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  z-index: 10;
  transition: all 0.3s ease;

  &:hover {
    background: #343a40;
    transform: translateY(-50%) scale(1.1);
  }

  &:focus {
    outline: 2px solid white;
    outline-offset: 2px;
  }

  @media (max-width: 1199px) {
    width: 45px;
    height: 45px;
    ${({ $direction }: { $direction: 'prev' | 'next' }) =>
      $direction === 'prev' ? 'left: 25px;' : 'right: 25px;'}
  }

  @media (max-width: 991px) {
    width: 40px;
    height: 40px;
    ${({ $direction }: { $direction: 'prev' | 'next' }) =>
      $direction === 'prev' ? 'left: 20px;' : 'right: 20px;'}
  }

  @media (max-width: 767px) {
    width: 35px;
    height: 35px;
    ${({ $direction }: { $direction: 'prev' | 'next' }) =>
      $direction === 'prev' ? 'left: 15px;' : 'right: 15px;'}
  }

  @media (max-width: 575px) {
    width: 30px;
    height: 30px;
    ${({ $direction }: { $direction: 'prev' | 'next' }) =>
      $direction === 'prev' ? 'left: 10px;' : 'right: 10px;'}
  }

  svg {
    width: 20px;
    height: 20px;
    fill: white;

    @media (max-width: 1199px) {
      width: 18px;
      height: 18px;
    }

    @media (max-width: 991px) {
      width: 16px;
      height: 16px;
    }

    @media (max-width: 767px) {
      width: 14px;
      height: 14px;
    }

    @media (max-width: 575px) {
      width: 12px;
      height: 12px;
    }
  }
`;

const ChevronLeft = () => (
  <svg
    viewBox="0 0 24 24"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M15 18L9 12L15 6"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const ChevronRight = () => (
  <svg
    viewBox="0 0 24 24"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M9 18L15 12L9 6"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

interface CustomArrowProps {
  className?: string;
  style?: React.CSSProperties;
  onClick?: () => void;
}

const PrevArrow: React.FC<CustomArrowProps> = ({ onClick }) => (
  <CustomArrow
    $direction="prev"
    onClick={onClick}
    aria-label="Previous slide"
    role="button"
    tabIndex={0}
  >
    <ChevronLeft />
  </CustomArrow>
);

const NextArrow: React.FC<CustomArrowProps> = ({ onClick }) => (
  <CustomArrow
    $direction="next"
    onClick={onClick}
    aria-label="Next slide"
    role="button"
    tabIndex={0}
  >
    <ChevronRight />
  </CustomArrow>
);

interface HeroSliderProps {
  title?: string;
  subtitle?: string;
  showTitle?: boolean;
}

const HeroSlider: React.FC<HeroSliderProps> = ({
  title = 'Welcome to Coconut Beach',
  subtitle = 'Paradise Found',
  showTitle = true,
}) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    fade: true,
    cssEase: 'ease-in-out',
    pauseOnHover: true,
    pauseOnFocus: true,
    swipeToSlide: true,
    touchMove: true,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          dots: false,
          arrows: true,
        },
      },
      {
        breakpoint: 480,
        settings: {
          dots: false,
          arrows: true,
        },
      },
    ],
  };

  // Generate 36 slides with the hero beach image
  const slides = Array.from({ length: 36 }, (_, index) => ({
    id: index + 1,
    imageKey: 'heroBeach' as const,
    alt: `Coconut Beach Hero Image ${index + 1}`,
  }));

  return (
    <HeroSliderContainer role="region" aria-label="Hero image carousel">
      <Slider {...settings} aria-label="Hero slides">
        {slides.map((slide) => (
          <div
            key={slide.id}
            role="group"
            aria-label={`Slide ${slide.id} of ${slides.length}`}
          >
            <SlideImage>
              <OptimizedImage
                imageKey={slide.imageKey}
                alt={slide.alt}
                fill
                priority={slide.id === 1}
                responsive={{
                  default: '100vw',
                }}
                style={{
                  objectFit: 'cover',
                }}
              />
            </SlideImage>
          </div>
        ))}
      </Slider>

      {showTitle && (
        <TitleOverlay>
          <h1>{title}</h1>
          <h2>{subtitle}</h2>
        </TitleOverlay>
      )}
    </HeroSliderContainer>
  );
};

export default HeroSlider;
export { HeroSlider };
