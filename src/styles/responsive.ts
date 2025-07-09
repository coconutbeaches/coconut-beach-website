import { css } from 'styled-components';
import { theme } from './theme';

export const breakpoints = {
  xs: '575px',
  sm: '767px',
  md: '991px',
  lg: '1199px',
} as const;

export const media = {
  xs: `(max-width: ${breakpoints.xs})`,
  sm: `(max-width: ${breakpoints.sm})`,
  md: `(max-width: ${breakpoints.md})`,
  lg: `(max-width: ${breakpoints.lg})`,
  xsUp: `(min-width: ${breakpoints.xs})`,
  smUp: `(min-width: ${breakpoints.sm})`,
  mdUp: `(min-width: ${breakpoints.md})`,
  lgUp: `(min-width: ${breakpoints.lg})`,
} as const;

export const mediaQuery = {
  xs: (styles: any) => css`
    @media ${media.xs} {
      ${styles}
    }
  `,
  sm: (styles: any) => css`
    @media ${media.sm} {
      ${styles}
    }
  `,
  md: (styles: any) => css`
    @media ${media.md} {
      ${styles}
    }
  `,
  lg: (styles: any) => css`
    @media ${media.lg} {
      ${styles}
    }
  `,
  xsUp: (styles: any) => css`
    @media ${media.xsUp} {
      ${styles}
    }
  `,
  smUp: (styles: any) => css`
    @media ${media.smUp} {
      ${styles}
    }
  `,
  mdUp: (styles: any) => css`
    @media ${media.mdUp} {
      ${styles}
    }
  `,
  lgUp: (styles: any) => css`
    @media ${media.lgUp} {
      ${styles}
    }
  `,
} as const;

// Responsive font sizes based on breakpoints
export const responsiveFontSizes = {
  h1: css`
    font-size: ${theme.sizes['5xl']};
    ${mediaQuery.lg`
      font-size: ${theme.sizes['4xl']};
    `}
    ${mediaQuery.md`
      font-size: ${theme.sizes['3xl']};
    `}
    ${mediaQuery.sm`
      font-size: ${theme.sizes['2xl']};
    `}
    ${mediaQuery.xs`
      font-size: ${theme.sizes.xl};
    `}
  `,
  h2: css`
    font-size: ${theme.sizes['4xl']};
    ${mediaQuery.lg`
      font-size: ${theme.sizes['3xl']};
    `}
    ${mediaQuery.md`
      font-size: ${theme.sizes['2xl']};
    `}
    ${mediaQuery.sm`
      font-size: ${theme.sizes.xl};
    `}
    ${mediaQuery.xs`
      font-size: ${theme.sizes.lg};
    `}
  `,
  h3: css`
    font-size: ${theme.sizes['3xl']};
    ${mediaQuery.lg`
      font-size: ${theme.sizes['2xl']};
    `}
    ${mediaQuery.md`
      font-size: ${theme.sizes.xl};
    `}
    ${mediaQuery.sm`
      font-size: ${theme.sizes.lg};
    `}
    ${mediaQuery.xs`
      font-size: ${theme.sizes.md};
    `}
  `,
  body: css`
    font-size: ${theme.sizes.md};
    ${mediaQuery.md`
      font-size: ${theme.sizes.sm};
    `}
    ${mediaQuery.xs`
      font-size: ${theme.sizes.sm};
    `}
  `,
};

// Responsive spacing based on breakpoints
export const responsiveSpacing = {
  container: css`
    padding: 0 ${theme.spacing.lg};
    ${mediaQuery.md`
      padding: 0 ${theme.spacing.md};
    `}
    ${mediaQuery.sm`
      padding: 0 ${theme.spacing.sm};
    `}
    ${mediaQuery.xs`
      padding: 0 ${theme.spacing.sm};
    `}
  `,
  section: css`
    padding: ${theme.spacing['4xl']} 0;
    ${mediaQuery.md`
      padding: ${theme.spacing['3xl']} 0;
    `}
    ${mediaQuery.sm`
      padding: ${theme.spacing['2xl']} 0;
    `}
    ${mediaQuery.xs`
      padding: ${theme.spacing.xl} 0;
    `}
  `,
  component: css`
    padding: ${theme.spacing.xl};
    ${mediaQuery.md`
      padding: ${theme.spacing.lg};
    `}
    ${mediaQuery.sm`
      padding: ${theme.spacing.md};
    `}
    ${mediaQuery.xs`
      padding: ${theme.spacing.sm};
    `}
  `,
};
