import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    palette: {
      coral: string;
      primary: string;
      secondary: string;
      success: string;
      danger: string;
      warning: string;
      info: string;
    };
    backgrounds: {
      primary: string;
      secondary: string;
      dark: string;
      light: string;
      accent: string;
    };
    text: {
      primary: string;
      secondary: string;
      light: string;
      dark: string;
      muted: string;
      accent: string;
    };
    fonts: {
      main: string;
      heading: string;
      mono: string;
    };
    sizes: {
      xs: string;
      sm: string;
      md: string;
      lg: string;
      xl: string;
      '2xl': string;
      '3xl': string;
      '4xl': string;
      '5xl': string;
    };
    breakpoints: {
      xs: string;
      sm: string;
      md: string;
      lg: string;
    };
    spacing: {
      xs: string;
      sm: string;
      md: string;
      lg: string;
      xl: string;
      '2xl': string;
      '3xl': string;
      '4xl': string;
      '5xl': string;
    };
    shadows: {
      sm: string;
      base: string;
      md: string;
      lg: string;
      xl: string;
    };
  }
}
