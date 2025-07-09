'use client';

import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay, EffectFade } from 'swiper/modules';
import type { Swiper as SwiperType } from 'swiper';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';

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

  .swiper {
    height: 100%;
    width: 100%;
  }

  .swiper-slide {
    height: 100%;
  }

  .swiper-pagination {
    bottom: 30px;
  }

  .swiper-pagination-bullet {
    background: rgba(255, 255, 255, 0.5);
    width: 12px;
    height: 12px;
    opacity: 0.5;
  }

  .swiper-pagination-bullet-active {
    background: white;
    opacity: 1;
  }

  .swiper-button-next,
  .swiper-button-prev {
    display: none; /* Hide default arrows, we'll use custom ones */
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
  const [slides, setSlides] = useState<string[]>([]);
  const swiperRef = useRef<SwiperType | null>(null);

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const response = await fetch('/api/hero-images');
        const images = await response.json();
        setSlides(images);
      } catch (error) {
        console.error('Error fetching hero images:', error);
      }
    };
    fetchImages();
  }, []);

  const handlePrevClick = () => {
    if (swiperRef.current) {
      swiperRef.current.slidePrev();
    }
  };

  const handleNextClick = () => {
    if (swiperRef.current) {
      swiperRef.current.slideNext();
    }
  };

  return (
    <HeroSliderContainer role="region" aria-label="Hero image carousel">
      <Swiper
        modules={[Navigation, Pagination, Autoplay, EffectFade]}
        pagination={{ clickable: true }}
        autoplay={{ delay: 4000, disableOnInteraction: false }}
        effect="fade"
        fadeEffect={{ crossFade: true }}
        loop
        onSwiper={(swiper) => (swiperRef.current = swiper)}
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <SlideImage>
              <img src={`/images/hero/${slide}`} alt={`Slide ${index + 1}`} />
            </SlideImage>
          </SwiperSlide>
        ))}
      </Swiper>

      <CustomArrow
        $direction="prev"
        onClick={handlePrevClick}
        aria-label="Previous slide"
        role="button"
        tabIndex={0}
      >
        <ChevronLeft />
      </CustomArrow>

      <CustomArrow
        $direction="next"
        onClick={handleNextClick}
        aria-label="Next slide"
        role="button"
        tabIndex={0}
      >
        <ChevronRight />
      </CustomArrow>

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
