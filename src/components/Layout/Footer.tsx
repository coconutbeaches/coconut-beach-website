'use client';

import React, { useState } from 'react';
import styled from 'styled-components';
import Slider from 'react-slick';

const FooterContainer = styled.footer`
  background: #fafbfb;
  border-top: 2px solid #ff6b6b;
  padding: 60px 0 20px;
  color: #2c3e50;
`;

const FooterContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 40px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 30px;
  }
`;

const FooterColumn = styled.div`
  display: flex;
  flex-direction: column;
`;

const ColumnTitle = styled.h3`
  font-size: 18px;
  font-weight: 600;
  margin-bottom: 20px;
  color: #2c3e50;
`;

// Reviews Column Styles
const ReviewsSlider = styled(Slider)`
  .slick-slide {
    outline: none;
    padding: 0 10px;
  }

  .slick-dots {
    bottom: -30px;

    li button:before {
      color: #ff6b6b;
      font-size: 8px;
    }

    li.slick-active button:before {
      color: #ff6b6b;
    }
  }
`;

const ReviewCard = styled.div`
  background: white;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  margin-bottom: 20px;
`;

const ReviewText = styled.p`
  font-size: 14px;
  line-height: 1.5;
  color: #5a6c7d;
  margin-bottom: 10px;
  font-style: italic;
`;

const ReviewerName = styled.p`
  font-size: 12px;
  font-weight: 600;
  color: #2c3e50;
  margin: 0;
`;

// Contact Column Styles
const ContactInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

const ContactItem = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 14px;
  color: #5a6c7d;
`;

const ContactIcon = styled.span`
  font-size: 16px;
  color: #ff6b6b;
  width: 20px;
  text-align: center;
`;

const ContactLink = styled.a`
  color: #5a6c7d;
  text-decoration: none;
  transition: color 0.3s;

  &:hover {
    color: #ff6b6b;
  }
`;

const SocialIcons = styled.div`
  display: flex;
  gap: 15px;
  margin-top: 10px;
`;

const SocialIcon = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  background: #ff6b6b;
  color: white;
  border-radius: 50%;
  text-decoration: none;
  font-size: 16px;
  transition: background-color 0.3s;

  &:hover {
    background: #ff5252;
  }
`;

// Gallery Column Styles
const GalleryGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 8px;
  margin-bottom: 20px;
`;

const GalleryItem = styled.div`
  aspect-ratio: 1;
  background: #e0e0e0;
  border-radius: 4px;
  cursor: pointer;
  overflow: hidden;
  transition: transform 0.3s;

  &:hover {
    transform: scale(1.05);
  }
`;

const GalleryImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const LightboxOverlay = styled.div<{ isOpen: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.9);
  display: ${(props) => (props.isOpen ? 'flex' : 'none')};
  align-items: center;
  justify-content: center;
  z-index: 1000;
`;

const LightboxContent = styled.div`
  position: relative;
  max-width: 90vw;
  max-height: 90vh;
`;

const LightboxImage = styled.img`
  max-width: 100%;
  max-height: 100%;
  object-fit: contain;
`;

const CloseButton = styled.button`
  position: absolute;
  top: -40px;
  right: 0;
  background: none;
  border: none;
  color: white;
  font-size: 24px;
  cursor: pointer;
  padding: 5px;

  &:hover {
    color: #ff6b6b;
  }
`;

const Copyright = styled.div`
  text-align: center;
  margin-top: 40px;
  padding-top: 20px;
  border-top: 1px solid #e0e0e0;
  font-size: 12px;
  color: #7f8c8d;
`;

const Footer: React.FC = () => {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState('');

  const reviews = [
    {
      text: 'Absolutely loved our stay! The location is breathtaking and the service was exceptional.',
      name: 'John D.',
    },
    {
      text: 'Perfect getaway. The bungalows are quaint yet modern. Woke up to ocean sounds every morning.',
      name: 'Lara S.',
    },
    {
      text: 'A hidden gem! Stunning views and staff made us feel right at home.',
      name: 'Krit P.',
    },
    {
      text: 'Peaceful and beautiful place. Perfect for unwinding and enjoying natural beauty.',
      name: 'Emma T.',
    },
  ];

  const galleryImages = [
    { src: '/api/placeholder/150/150', alt: 'Beach view from bungalow' },
    { src: '/api/placeholder/150/150', alt: 'Sunset over the ocean' },
    { src: '/api/placeholder/150/150', alt: 'Traditional Thai bungalow' },
    { src: '/api/placeholder/150/150', alt: 'Tropical garden pathway' },
    { src: '/api/placeholder/150/150', alt: 'Beachfront dining area' },
    { src: '/api/placeholder/150/150', alt: 'Crystal clear waters' },
  ];

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    arrows: false,
  };

  const openLightbox = (imageSrc: string) => {
    setCurrentImage(imageSrc);
    setLightboxOpen(true);
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
    setCurrentImage('');
  };

  return (
    <FooterContainer>
      <FooterContent>
        {/* Reviews Column */}
        <FooterColumn>
          <ColumnTitle>Guest Reviews</ColumnTitle>
          <ReviewsSlider {...sliderSettings}>
            {reviews.map((review, index) => (
              <ReviewCard key={index}>
                <ReviewText>&quot;{review.text}&quot;</ReviewText>
                <ReviewerName>- {review.name}</ReviewerName>
              </ReviewCard>
            ))}
          </ReviewsSlider>
        </FooterColumn>

        {/* Contact Column */}
        <FooterColumn>
          <ColumnTitle>Contact Us</ColumnTitle>
          <ContactInfo>
            <ContactItem>
              <ContactIcon aria-label="Phone">📞</ContactIcon>
              <ContactLink href="tel:+66123456789">+66 123 456 789</ContactLink>
            </ContactItem>
            <ContactItem>
              <ContactIcon aria-label="Email">✉️</ContactIcon>
              <ContactLink href="mailto:info@coconutbeachbungalows.com">
                info@coconutbeachbungalows.com
              </ContactLink>
            </ContactItem>
            <ContactItem>
              <ContactIcon aria-label="Address">📍</ContactIcon>
              <span>123 Beach Road, Koh Phangan, Thailand</span>
            </ContactItem>
            <ContactItem>
              <ContactIcon aria-label="Map">🗺️</ContactIcon>
              <ContactLink
                href="https://maps.google.com/?q=Koh+Phangan,+Thailand"
                target="_blank"
                rel="noopener noreferrer"
              >
                View on Google Maps
              </ContactLink>
            </ContactItem>
          </ContactInfo>
          <SocialIcons>
            <SocialIcon
              href="https://facebook.com/coconutbeachbungalows"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
            >
              📘
            </SocialIcon>
            <SocialIcon
              href="https://instagram.com/coconutbeachbungalows"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
            >
              📷
            </SocialIcon>
            <SocialIcon
              href="https://twitter.com/coconutbeachbungalows"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Twitter"
            >
              🐦
            </SocialIcon>
          </SocialIcons>
        </FooterColumn>

        {/* Gallery Column */}
        <FooterColumn>
          <ColumnTitle>Photo Gallery</ColumnTitle>
          <GalleryGrid>
            {galleryImages.map((image, index) => (
              <GalleryItem
                key={index}
                onClick={() => openLightbox(image.src)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    openLightbox(image.src);
                  }
                }}
                aria-label={`Open ${image.alt} in lightbox`}
              >
                <GalleryImage src={image.src} alt={image.alt} />
              </GalleryItem>
            ))}
          </GalleryGrid>
        </FooterColumn>
      </FooterContent>

      {/* Lightbox */}
      <LightboxOverlay
        isOpen={lightboxOpen}
        onClick={closeLightbox}
        role="dialog"
        aria-modal="true"
        aria-label="Image lightbox"
      >
        <LightboxContent onClick={(e) => e.stopPropagation()}>
          <CloseButton onClick={closeLightbox} aria-label="Close lightbox">
            ×
          </CloseButton>
          <LightboxImage src={currentImage} alt="Gallery image" />
        </LightboxContent>
      </LightboxOverlay>

      <Copyright>
        <p>
          &copy; {new Date().getFullYear()} Coconut Beach Bungalows. All rights
          reserved.
        </p>
        <p>Made with ❤️ on Koh Phangan</p>
      </Copyright>
    </FooterContainer>
  );
};

export default Footer;
