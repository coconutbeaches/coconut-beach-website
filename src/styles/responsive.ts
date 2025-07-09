import { css, Interpolation } from 'styled-components';
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
  xs: (styles: TemplateStringsArray, ...args: Interpolation<object>[]) => css`
    @media ${media.xs} {
      ${css(styles, ...args)}
    }
  `,
  sm: (styles: TemplateStringsArray, ...args: Interpolation<object>[]) => css`
    @media ${media.sm} {
      ${css(styles, ...args)}
    }
  `,
  md: (styles: TemplateStringsArray, ...args: Interpolation<object>[]) => css`
    @media ${media.md} {
      ${css(styles, ...args)}
    }
  `,
  lg: (styles: TemplateStringsArray, ...args: Interpolation<object>[]) => css`
    @media ${media.lg} {
      ${css(styles, ...args)}
    }
  `,
  xsUp: (styles: TemplateStringsArray, ...args: Interpolation<object>[]) => css`
    @media ${media.xsUp} {
      ${css(styles, ...args)}
    }
  `,
  smUp: (styles: TemplateStringsArray, ...args: Interpolation<object>[]) => css`
    @media ${media.smUp} {
      ${css(styles, ...args)}
    }
  `,
  mdUp: (styles: TemplateStringsArray, ...args: Interpolation<object>[]) => css`
    @media ${media.mdUp} {
      ${css(styles, ...args)}
    }
  `,
  lgUp: (styles: TemplateStringsArray, ...args: Interpolation<object>[]) => css`
    @media ${media.lgUp} {
      ${css(styles, ...args)}
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
