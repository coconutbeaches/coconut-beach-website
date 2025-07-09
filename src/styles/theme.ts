import { DefaultTheme } from 'styled-components';

export const theme: DefaultTheme = {
  palette: {
    coral: '#ed6664',
    primary: '#ed6664',
    secondary: '#6c757d',
    success: '#28a745',
    danger: '#dc3545',
    warning: '#ffc107',
    info: '#17a2b8',
  },
  backgrounds: {
    primary: '#ffffff',
    secondary: '#f8f9fa',
    dark: '#343a40',
    light: '#f1f3f4',
    accent: '#ed6664',
  },
  text: {
    primary: '#212529',
    secondary: '#6c757d',
    light: '#ffffff',
    dark: '#343a40',
    muted: '#8d9094',
    accent: '#ed6664',
  },
  fonts: {
    main: 'Poppins, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, sans-serif',
    heading: 'Swanky and Moo Moo, cursive',
    mono: 'Menlo, Monaco, Consolas, Liberation Mono, Courier New, monospace',
  },
  sizes: {
    xs: '0.75rem',
    sm: '0.875rem',
    md: '1rem',
    lg: '1.125rem',
    xl: '1.25rem',
    '2xl': '1.5rem',
    '3xl': '1.875rem',
    '4xl': '2.25rem',
    '5xl': '3rem',
  },
  breakpoints: {
    xs: '575px',
    sm: '767px',
    md: '991px',
    lg: '1199px',
  },
  spacing: {
    xs: '0.25rem',   // 4px
    sm: '0.5rem',    // 8px
    md: '1rem',      // 16px
    lg: '1.5rem',    // 24px
    xl: '2rem',      // 32px
    '2xl': '3rem',   // 48px
    '3xl': '4rem',   // 64px
    '4xl': '6rem',   // 96px
    '5xl': '8rem',   // 128px
  },
  shadows: {
    sm: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
    base: '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
    md: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
    lg: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
    xl: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
  },
};
