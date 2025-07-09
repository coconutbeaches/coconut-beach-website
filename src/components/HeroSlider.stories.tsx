import type { Meta, StoryObj } from '@storybook/react';
import HeroSlider from './HeroSlider';

const meta: Meta<typeof HeroSlider> = {
  title: 'Components/HeroSlider',
  component: HeroSlider,
  parameters: {
    layout: 'fullscreen',
    viewport: {
      defaultViewport: 'responsive',
    },
  },
  tags: ['autodocs'],
  args: {
    slides: [
      {
        image: '/images/hero-1.jpg',
        title: 'Welcome to Coconut Beach',
        subtitle: 'Paradise in Koh Phangan',
      },
      {
        image: '/images/hero-2.jpg',
        title: 'Eco-Friendly Bungalows',
        subtitle: 'Sustainable beachfront living',
      },
      {
        image: '/images/hero-3.jpg',
        title: 'Pristine Beach Views',
        subtitle: 'Wake up to crystal clear waters',
      },
    ],
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Mobile: Story = {
  parameters: {
    viewport: {
      defaultViewport: 'xs',
    },
  },
};

export const Tablet: Story = {
  parameters: {
    viewport: {
      defaultViewport: 'sm',
    },
  },
};

export const Desktop: Story = {
  parameters: {
    viewport: {
      defaultViewport: 'md',
    },
  },
};

export const LargeDesktop: Story = {
  parameters: {
    viewport: {
      defaultViewport: 'lg',
    },
  },
};

// Breakpoint-specific stories for regression testing
export const Breakpoint_575px: Story = {
  parameters: {
    viewport: {
      defaultViewport: 'xs',
    },
  },
};

export const Breakpoint_767px: Story = {
  parameters: {
    viewport: {
      defaultViewport: 'sm',
    },
  },
};

export const Breakpoint_991px: Story = {
  parameters: {
    viewport: {
      defaultViewport: 'md',
    },
  },
};

export const Breakpoint_1199px: Story = {
  parameters: {
    viewport: {
      defaultViewport: 'lg',
    },
  },
};
