import { createGlobalStyle } from 'styled-components';
import { responsiveFontSizes, responsiveSpacing, mediaQuery } from './responsive';

export const GlobalStyles = createGlobalStyle`
  /* CSS Custom Properties for Spacing Scale */
  :root {
    --spacing-xs: 0.25rem;   /* 4px */
    --spacing-sm: 0.5rem;    /* 8px */
    --spacing-md: 1rem;      /* 16px */
    --spacing-lg: 1.5rem;    /* 24px */
    --spacing-xl: 2rem;      /* 32px */
    --spacing-2xl: 3rem;     /* 48px */
    --spacing-3xl: 4rem;     /* 64px */
    --spacing-4xl: 6rem;     /* 96px */
    --spacing-5xl: 8rem;     /* 128px */
    
    /* Color custom properties */
    --color-coral: #ed6664;
    --color-primary: #ed6664;
    --color-text-primary: #212529;
    --color-text-secondary: #6c757d;
    --color-bg-primary: #ffffff;
    --color-bg-secondary: #f8f9fa;
  }

  /* CSS Reset and Base Styles */
  *,
  *::before,
  *::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    font-size: 16px;
    scroll-behavior: smooth;
    height: 100%;
  }

  body {
    font-family: ${({ theme }) => theme.fonts.main};
    line-height: 1.6;
    color: ${({ theme }) => theme.text.primary};
    background-color: ${({ theme }) => theme.backgrounds.primary};
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    height: 100%;
    overflow-x: hidden;
  }

  /* Heading Styles */
  h1, h2, h3, h4, h5, h6 {
    font-family: ${({ theme }) => theme.fonts.heading};
    font-weight: 400;
    line-height: 1.2;
    color: ${({ theme }) => theme.text.primary};
    margin-bottom: var(--spacing-md);
  }

  h1 {
    ${responsiveFontSizes.h1}
    margin-bottom: var(--spacing-xl);
    ${mediaQuery.md`
      margin-bottom: var(--spacing-lg);
    `}
    ${mediaQuery.xs`
      margin-bottom: var(--spacing-md);
    `}
  }

  h2 {
    ${responsiveFontSizes.h2}
    margin-bottom: var(--spacing-lg);
    ${mediaQuery.md`
      margin-bottom: var(--spacing-md);
    `}
    ${mediaQuery.xs`
      margin-bottom: var(--spacing-sm);
    `}
  }

  h3 {
    ${responsiveFontSizes.h3}
    margin-bottom: var(--spacing-lg);
    ${mediaQuery.md`
      margin-bottom: var(--spacing-md);
    `}
    ${mediaQuery.xs`
      margin-bottom: var(--spacing-sm);
    `}
  }

  h4 {
    font-size: ${({ theme }) => theme.sizes['2xl']};
    margin-bottom: var(--spacing-md);
  }

  h5 {
    font-size: ${({ theme }) => theme.sizes.xl};
    margin-bottom: var(--spacing-md);
  }

  h6 {
    font-size: ${({ theme }) => theme.sizes.lg};
    margin-bottom: var(--spacing-sm);
  }

  /* Link Styles */
  a {
    color: ${({ theme }) => theme.palette.coral};
    text-decoration: none;
    transition: all 0.2s ease;
    position: relative;

    &:hover {
      color: ${({ theme }) => theme.text.dark};
      text-decoration: underline;
      text-underline-offset: 4px;
      text-decoration-thickness: 2px;
    }

    &:focus {
      outline: 2px solid ${({ theme }) => theme.palette.coral};
      outline-offset: 2px;
      border-radius: 2px;
    }

    &:focus:not(:focus-visible) {
      outline: none;
    }
  }

  /* Form Elements */
  button {
    cursor: pointer;
    border: none;
    background: none;
    font-family: inherit;
    transition: all 0.2s ease;
    border-radius: 4px;

    &:hover:not(:disabled) {
      transform: translateY(-1px);
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    }

    &:focus {
      outline: 2px solid ${({ theme }) => theme.palette.coral};
      outline-offset: 2px;
    }

    &:focus:not(:focus-visible) {
      outline: none;
    }

    &:disabled {
      cursor: not-allowed;
      opacity: 0.6;
    }
  }

  input, textarea, select {
    font-family: inherit;
    font-size: inherit;
    border: 2px solid ${({ theme }) => theme.text.secondary};
    border-radius: 4px;
    padding: var(--spacing-sm) var(--spacing-md);
    transition: all 0.2s ease;
    background-color: ${({ theme }) => theme.backgrounds.primary};

    &:hover:not(:disabled) {
      border-color: ${({ theme }) => theme.palette.coral};
      box-shadow: 0 2px 4px rgba(237, 102, 100, 0.1);
    }

    &:focus {
      outline: 2px solid ${({ theme }) => theme.palette.coral};
      outline-offset: 2px;
      border-color: ${({ theme }) => theme.palette.coral};
      box-shadow: 0 0 0 3px rgba(237, 102, 100, 0.1);
    }

    &:focus:not(:focus-visible) {
      outline: none;
    }

    &:disabled {
      background-color: ${({ theme }) => theme.backgrounds.secondary};
      cursor: not-allowed;
      opacity: 0.6;
    }
  }

  /* Image Styles */
  img {
    max-width: 100%;
    height: auto;
    display: block;
  }

  /* Paragraph Styles */
  p {
    margin-bottom: var(--spacing-md);
    color: ${({ theme }) => theme.text.primary};
  }

  /* List Styles */
  ul, ol {
    margin-bottom: var(--spacing-md);
    padding-left: var(--spacing-xl);
  }

  li {
    margin-bottom: var(--spacing-xs);
  }

  /* Custom scrollbar */
  ::-webkit-scrollbar {
    width: 8px;
  }

  ::-webkit-scrollbar-track {
    background: ${({ theme }) => theme.backgrounds.secondary};
  }

  ::-webkit-scrollbar-thumb {
    background: ${({ theme }) => theme.palette.coral};
    border-radius: 4px;
  }

  ::-webkit-scrollbar-thumb:hover {
    background: ${({ theme }) => theme.text.dark};
  }

  /* Utility Classes */
  .sr-only {
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    white-space: nowrap;
    border: 0;
  }

  .container {
    max-width: 1200px;
    margin: 0 auto;
    ${responsiveSpacing.container}
  }
`;
