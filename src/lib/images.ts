import heroBeachPlaceholder from '/public/images/hero-beach.svg';
import seaview2BedPlaceholder from '/public/images/seaview-2bed.svg';
import beachfrontHousePlaceholder from '/public/images/beachfront-house.svg';
import seaviewJunglePlaceholder from '/public/images/seaview-jungle.svg';
import twoBedroomTwoBathPlaceholder from '/public/images/2bed-2bath.svg';
import a3BungalowPlaceholder from '/public/images/a3-bungalow.svg';
import aboutResortPlaceholder from '/public/images/about-resort.svg';

// High-quality image imports (when available)
// For now, these will point to JPG placeholders, but can be easily updated to real images
import heroBeachImage from '/public/images/hero-beach.jpg';
import seaview2BedImage from '/public/images/seaview-2bed.jpg';
import beachfrontHouseImage from '/public/images/beachfront-house.jpg';
import seaviewJungleImage from '/public/images/seaview-jungle.jpg';
import twoBedroomTwoBathImage from '/public/images/2bed-2bath.jpg';
import a3BungalowImage from '/public/images/a3-bungalow.jpg';
import aboutResortImage from '/public/images/about-resort.jpg';

export interface OptimizedImageData {
  src: string;
  width: number;
  height: number;
  blurDataURL: string;
  placeholder: string;
}

// Create optimized image data with proper dimensions and blur data
export const images = {
  heroBeach: {
    src: heroBeachImage,
    width: 1920,
    height: 1080,
    blurDataURL: heroBeachPlaceholder,
    placeholder: heroBeachPlaceholder,
    alt: 'Coconut Beach beachfront view with crystal clear waters and tropical landscape',
    priority: true, // Above-the-fold hero image
  },
  seaview2Bed: {
    src: seaview2BedImage,
    width: 800,
    height: 600,
    blurDataURL: seaview2BedPlaceholder,
    placeholder: seaview2BedPlaceholder,
    alt: 'Seaview 2-bedroom bungalow with ocean views and tropical décor',
    priority: false,
  },
  beachfrontHouse: {
    src: beachfrontHouseImage,
    width: 800,
    height: 600,
    blurDataURL: beachfrontHousePlaceholder,
    placeholder: beachfrontHousePlaceholder,
    alt: 'Beachfront house accommodation with direct beach access',
    priority: false,
  },
  seaviewJungle: {
    src: seaviewJungleImage,
    width: 800,
    height: 600,
    blurDataURL: seaviewJunglePlaceholder,
    placeholder: seaviewJunglePlaceholder,
    alt: 'Jungle retreat bungalow surrounded by tropical vegetation',
    priority: false,
  },
  twoBedroomTwoBath: {
    src: twoBedroomTwoBathImage,
    width: 800,
    height: 600,
    blurDataURL: twoBedroomTwoBathPlaceholder,
    placeholder: twoBedroomTwoBathPlaceholder,
    alt: 'Two-bedroom two-bathroom family suite with modern amenities',
    priority: false,
  },
  a3Bungalow: {
    src: a3BungalowImage,
    width: 800,
    height: 600,
    blurDataURL: a3BungalowPlaceholder,
    placeholder: a3BungalowPlaceholder,
    alt: 'Premium A3 bungalow with traditional Thai architecture',
    priority: false,
  },
  aboutResort: {
    src: aboutResortImage,
    width: 800,
    height: 600,
    blurDataURL: aboutResortPlaceholder,
    placeholder: aboutResortPlaceholder,
    alt: 'About Coconut Beach Resort - eco-friendly beachfront accommodation',
    priority: false,
  },
} as const;

export type ImageKey = keyof typeof images;

// Helper function to get image data
export const getImageData = (key: ImageKey) => images[key];

// Helper function to get responsive sizes for different breakpoints
export const getResponsiveSizes = (breakpoints: {
  xs?: string;
  sm?: string;
  md?: string;
  lg?: string;
  xl?: string;
  default?: string;
}) => {
  const sizes = [];
  
  if (breakpoints.xs) sizes.push(`(max-width: 575px) ${breakpoints.xs}`);
  if (breakpoints.sm) sizes.push(`(max-width: 767px) ${breakpoints.sm}`);
  if (breakpoints.md) sizes.push(`(max-width: 991px) ${breakpoints.md}`);
  if (breakpoints.lg) sizes.push(`(max-width: 1199px) ${breakpoints.lg}`);
  if (breakpoints.xl) sizes.push(`(max-width: 1399px) ${breakpoints.xl}`);
  
  sizes.push(breakpoints.default || '100vw');
  
  return sizes.join(', ');
};
