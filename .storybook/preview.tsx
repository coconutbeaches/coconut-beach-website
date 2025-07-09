import type { Preview } from '@storybook/nextjs-vite';
import React from 'react';
import { ThemeProvider } from 'styled-components';
import { theme } from '../src/styles/theme';
import { GlobalStyles } from '../src/styles/globalStyles';

const withTheme = (Story: any) => (
  <ThemeProvider theme={theme}>
    <GlobalStyles />
    <Story />
  </ThemeProvider>
);

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    viewport: {
      viewports: {
        mobile: {
          name: 'Mobile',
          styles: {
            width: '375px',
            height: '667px',
          },
        },
        tablet: {
          name: 'Tablet',
          styles: {
            width: '768px',
            height: '1024px',
          },
        },
        desktop: {
          name: 'Desktop',
          styles: {
            width: '1200px',
            height: '800px',
          },
        },
        // Theme breakpoints
        xs: {
          name: 'XS (575px)',
          styles: {
            width: '575px',
            height: '800px',
          },
        },
        sm: {
          name: 'SM (767px)',
          styles: {
            width: '767px',
            height: '800px',
          },
        },
        md: {
          name: 'MD (991px)',
          styles: {
            width: '991px',
            height: '800px',
          },
        },
        lg: {
          name: 'LG (1199px)',
          styles: {
            width: '1199px',
            height: '800px',
          },
        },
      },
    },
    a11y: {
      // 'todo' - show a11y violations in the test UI only
      // 'error' - fail CI on a11y violations
      // 'off' - skip a11y checks entirely
      test: 'todo',
    },
  },
  decorators: [withTheme],
};

export default preview;
