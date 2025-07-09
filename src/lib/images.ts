// Simple base64 encoded blur data URLs for placeholders
const blurDataURLs = {
  heroBeach:
    'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTkyMCIgaGVpZ2h0PSIxMDgwIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9IiM0NjgyQjQiLz48L3N2Zz4=',
  seaview2Bed:
    'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iODAwIiBoZWlnaHQ9IjYwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjNDY4MkI0Ii8+PC9zdmc+',
  beachfrontHouse:
    'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iODAwIiBoZWlnaHQ9IjYwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjNDY4MkI0Ii8+PC9zdmc+',
  seaviewJungle:
    'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iODAwIiBoZWlnaHQ9IjYwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjNDY4MkI0Ii8+PC9zdmc+',
  twoBedroomTwoBath:
    'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iODAwIiBoZWlnaHQ9IjYwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjNDY4MkI0Ii8+PC9zdmc+',
  a3Bungalow:
    'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iODAwIiBoZWlnaHQ9IjYwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjNDY4MkI0Ii8+PC9zdmc+',
  aboutResort:
    'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iODAwIiBoZWlnaHQ9IjYwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjNDY4MkI0Ii8+PC9zdmc+',
};

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
    blurDataURL: blurDataURLs.heroBeach,
    placeholder: '/images/hero-beach.svg',
    alt: 'Coconut Beach beachfront view with crystal clear waters and tropical landscape',
    priority: true, // Above-the-fold hero image
  },
  seaview2Bed: {
    src: seaview2BedImage,
    width: 800,
    height: 600,
    blurDataURL: blurDataURLs.seaview2Bed,
    placeholder: '/images/seaview-2bed.svg',
    alt: 'Seaview 2-bedroom bungalow with ocean views and tropical décor',
    priority: false,
  },
  beachfrontHouse: {
    src: beachfrontHouseImage,
    width: 800,
    height: 600,
    blurDataURL: blurDataURLs.beachfrontHouse,
    placeholder: '/images/beachfront-house.svg',
    alt: 'Beachfront house accommodation with direct beach access',
    priority: false,
  },
  seaviewJungle: {
    src: seaviewJungleImage,
    width: 800,
    height: 600,
    blurDataURL: blurDataURLs.seaviewJungle,
    placeholder: '/images/seaview-jungle.svg',
    alt: 'Jungle retreat bungalow surrounded by tropical vegetation',
    priority: false,
  },
  twoBedroomTwoBath: {
    src: twoBedroomTwoBathImage,
    width: 800,
    height: 600,
    blurDataURL: blurDataURLs.twoBedroomTwoBath,
    placeholder: '/images/2bed-2bath.svg',
    alt: 'Two-bedroom two-bathroom family suite with modern amenities',
    priority: false,
  },
  a3Bungalow: {
    src: a3BungalowImage,
    width: 800,
    height: 600,
    blurDataURL: blurDataURLs.a3Bungalow,
    placeholder: '/images/a3-bungalow.svg',
    alt: 'Premium A3 bungalow with traditional Thai architecture',
    priority: false,
  },
  aboutResort: {
    src: aboutResortImage,
    width: 800,
    height: 600,
    blurDataURL: blurDataURLs.aboutResort,
    placeholder: '/images/about-resort.svg',
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
