import { DefaultTheme } from 'styled-components';

// Central color palette - coral is the main accent color
const colors = {
  coral: '#ed6664',
  coralLight: '#f5a5a4',
  coralDark: '#d65452',
  white: '#ffffff',
  black: '#000000',
  gray: {
    50: '#f9fafb',
    100: '#f3f4f6',
    200: '#e5e7eb',
    300: '#d1d5db',
    400: '#9ca3af',
    500: '#6b7280',
    600: '#4b5563',
    700: '#374151',
    800: '#1f2937',
    900: '#111827',
  },
  blue: {
    500: '#3b82f6',
    600: '#2563eb',
  },
  green: {
    500: '#10b981',
    600: '#059669',
  },
  red: {
    500: '#ef4444',
    600: '#dc2626',
  },
  yellow: {
    500: '#f59e0b',
    600: '#d97706',
  },
};

export const theme: DefaultTheme = {
  palette: {
    coral: colors.coral,
    primary: colors.coral,
    secondary: colors.gray[500],
    success: colors.green[500],
    danger: colors.red[500],
    warning: colors.yellow[500],
    info: colors.blue[500],
  },
  backgrounds: {
    primary: colors.white,
    secondary: colors.gray[50],
    dark: colors.gray[800],
    light: colors.gray[100],
    accent: colors.coral,
  },
  text: {
    primary: colors.gray[900],
    secondary: colors.gray[600],
    light: colors.white,
    dark: colors.gray[800],
    muted: colors.gray[500],
    accent: colors.coral,
  },
  fonts: {
    main: 'var(--font-poppins), Poppins, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, sans-serif',
    heading: 'Dancing Script, Swanky and Moo Moo, cursive',
    mono: 'ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, Liberation Mono, Courier New, monospace',
  },
  sizes: {
    xs: '0.75rem', // 12px
    sm: '0.875rem', // 14px
    md: '1rem', // 16px
    lg: '1.125rem', // 18px
    xl: '1.25rem', // 20px
    '2xl': '1.5rem', // 24px
    '3xl': '1.875rem', // 30px
    '4xl': '2.25rem', // 36px
    '5xl': '3rem', // 48px
    '6xl': '3.75rem', // 60px
    '7xl': '4.5rem', // 72px
  },
  breakpoints: {
    xs: '575px',
    sm: '767px',
    md: '991px',
    lg: '1199px',
  },
  spacing: {
    xs: '0.25rem', // 4px
    sm: '0.5rem', // 8px
    md: '1rem', // 16px
    lg: '1.5rem', // 24px
    xl: '2rem', // 32px
    '2xl': '3rem', // 48px
    '3xl': '4rem', // 64px
    '4xl': '6rem', // 96px
    '5xl': '8rem', // 128px
  },
  shadows: {
    sm: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
    base: '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
    md: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
    lg: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
    xl: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
    coral: '0 4px 14px 0 rgba(237, 102, 100, 0.25)',
  },
};

export { colors };
