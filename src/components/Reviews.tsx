'use client';

import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import Slider from 'react-slick';

const ReviewsSection = styled.section`
  id: reviews;
  background: white;
  padding: 100px 0;
  
  @media (max-width: 768px) {
    padding: 60px 0;
  }
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
`;

const SectionTitle = styled.h2`
  text-align: center;
  font-size: 36px;
  font-weight: 700;
  color: #2c3e50;
  margin-bottom: 50px;
  
  @media (max-width: 768px) {
    font-size: 28px;
    margin-bottom: 30px;
  }
`;

const ReviewSlider = styled(Slider)`
  .slick-slide {
    outline: none;
  }
`;

const ReviewCard = styled(motion.div)`
  background: #f8f9fa;
  padding: 30px;
  border-radius: 10px;
  box-shadow: 0 15px 30px rgba(0, 0, 0, 0.1);
  text-align: center;
  
  :hover {
    box-shadow: 0 25px 50px rgba(0, 0, 0, 0.15);
  }
`;

const ReviewText = styled.p`
  font-size: 16px;
  line-height: 1.6;
  color: #5a6c7d;
  margin-bottom: 20px;
`;

const ReviewerName = styled.p`
  font-size: 14px;
  font-weight: 600;
  color: #2c3e50;
  margin-bottom: 5px;
`;

const ReviewerLocation = styled.p`
  font-size: 14px;
  color: #7f8c8d;
`;

const Reviews: React.FC = () => {
  const reviews = [
    {
      text: 'Absolutely loved our stay at Coconut Beach Bungalows! The location is breathtaking and the service was exceptional.',
      name: 'John D.',
      location: 'USA',
    },
    {
      text: 'Perfect getaway. The bungalows are quaint yet modern. We woke up to the sound of the ocean every morning.',
      name: 'Lara S.',
      location: 'UK',
    },
    {
      text: 'A hidden gem! The resort offers stunning views and the staff made us feel right at home.',
      name: 'Krit P.',
      location: 'Thailand',
    },
    {
      text: 'Such a peaceful and beautiful place. Perfect for unwinding and enjoying the natural beauty of Koh Phangan.',
      name: 'Emma T.',
      location: 'Australia',
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
  };

  return (
    <ReviewsSection>
      <Container>
        <SectionTitle>Guest Reviews</SectionTitle>
        <ReviewSlider {...settings}>
          {reviews.map((review, index) => (
            <ReviewCard
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
            >
              <ReviewText>&quot;{review.text}&quot;</ReviewText>
              <ReviewerName>{review.name}</ReviewerName>
              <ReviewerLocation>{review.location}</ReviewerLocation>
            </ReviewCard>
          ))}
        </ReviewSlider>
      </Container>
    </ReviewsSection>
  );
};

export default Reviews;

