import type { Meta, StoryObj } from '@storybook/react';
import Navbar from './Navbar';

const meta: Meta<typeof Navbar> = {
  title: 'Components/Layout/Navbar',
  component: Navbar,
  parameters: {
    layout: 'fullscreen',
    viewport: {
      defaultViewport: 'responsive',
    },
    nextjs: {
      appDirectory: true,
    },
  },
  tags: ['autodocs'],
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

export const ScrolledState: Story = {
  parameters: {
    viewport: {
      defaultViewport: 'lg',
    },
  },
};
