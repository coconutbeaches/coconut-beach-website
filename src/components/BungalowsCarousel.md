# BungalowsCarousel Component

A responsive carousel component built with `react-slick` that displays bungalow accommodations with booking functionality.

## Features

- **Responsive Design**: Shows 5 items on desktop, 3 on tablet, 1 on mobile
- **Breakpoints**: 1199px, 991px, 767px, 575px
- **Image Optimization**: Uses Next.js Image component with lazy loading and blur placeholders
- **Hover Effects**: Cards lift on hover with smooth animations
- **Auto-play**: Carousel automatically advances every 4 seconds
- **Touch Support**: Swipe gestures on mobile devices
- **Booking Integration**: "Book Now" buttons link to booking widget with prefilled data

## Props

```typescript
interface BungalowsCarouselProps {
  bungalows?: BungalowData[];
  className?: string;
}

interface BungalowData {
  id: string;
  name: string;
  image: string;
  specs: {
    size: string;
    beds: string;
    occupancy: string;
  };
  checkIn?: string;
  checkOut?: string;
  guests?: string;
}
```

## Usage

### Basic Usage
```tsx
import BungalowsCarousel from '@/components/BungalowsCarousel';

export default function HomePage() {
  return (
    <div>
      <BungalowsCarousel />
    </div>
  );
}
```

### With Custom Data
```tsx
import BungalowsCarousel from '@/components/BungalowsCarousel';

const customBungalows = [
  {
    id: 'deluxe-suite',
    name: 'Deluxe Suite',
    image: '/images/deluxe-suite.jpg',
    specs: {
      size: '50 sqm',
      beds: '2 beds',
      occupancy: '4 guests'
    },
    checkIn: '2024-12-01',
    checkOut: '2024-12-07',
    guests: '2'
  }
];

export default function BungalowsPage() {
  return (
    <div>
      <BungalowsCarousel bungalows={customBungalows} />
    </div>
  );
}
```

## Responsive Breakpoints

- **Desktop (>1199px)**: 5 slides
- **Large Tablet (992px - 1199px)**: 4 slides  
- **Tablet (768px - 991px)**: 3 slides
- **Mobile Large (576px - 767px)**: 2 slides
- **Mobile (≤575px)**: 1 slide

## Styling

The component uses styled-components with theme-based styling:

- Card hover lift animation (translateY(-8px))
- Smooth transitions (0.3s ease)
- Coral color scheme from theme
- Responsive font sizes and spacing

## Dependencies

- `react-slick`: Carousel functionality
- `slick-carousel`: Slick carousel CSS
- `styled-components`: Component styling
- `next/image`: Optimized image loading
- `framer-motion`: Button animations (via Button component)

## Accessibility

- Semantic HTML structure
- Keyboard navigation support
- Screen reader friendly
- High contrast design
- Touch-friendly button sizes

## Performance

- Lazy loading images
- Blur placeholders for smooth loading
- Optimized image sizes with responsive `sizes` attribute
- Efficient carousel rendering with react-slick
