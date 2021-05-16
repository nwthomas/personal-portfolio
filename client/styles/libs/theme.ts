export type ThemeEnum = 'dark' | 'light';

// ===================================== Color Assignment Variables
// All color names pulled directly from http://chir.ag/projects/name-that-color/
export const colors = {
  alabaster: '#f8f8f8f8',
  australianMint: '#F9FFC2',
  black: '#000000',
  crusta: '#f98a31',
  bilobaFlower: '#BBADEB',
  bunker: '#101419',
  dullLavender: '#9F8AE5',
  dolly: '#F4FE86',
  emerald: '#59c689',
  goldenFizz: '#eefd42',
  mediumPurple: '#7E61DC',
  mercury: '#e2e2e2',
  mineShaft: '#333333',
  mirage: '#171F2A',
  pictonBlue: '#479ded',
  onyx: '#3b3b40',
  shark: '#27272a',
  titanWhite: '#f8f8ff',
  transparent: 'transparent',
  vistaBlue: '#95dbb3',
  white: '#ffffff',
  whitePointer: '#FCF7FF',
  woodsmoke: '#161618',
};

// ===================================== Color Theme
export const themeColorValues = {
  bodyBackground: 'var(--body-bg)',
  bodyBackgroundAccentOne: 'var(--body-bg-accent-one)',
  bodyBackgroundAccentTwo: 'var(--body-bg-accent-two)',
  bodyBackgroundAccentThree: 'var(--body-bg-accent-three)',
  text: 'var(--text)',
  textOnColor: 'var(--text-on-color)',
  textAccentOne: 'var(--text-accent-one)',
  textAccentTwo: 'var(--text-accent-two)',
  textAccentThree: 'var(--text-accent-three)',
  transparent: 'var(--transparent)',
  themeIconBackground: 'var(--theme-icon-bg)',
};

// ===================================== Space Variables
export const appDimensions = {
  appHorizontalGutters: '3%',
  appMaxWidth: '1200px',
  appMinHeight: '100vh',
  articleHeroImageMaxWidth: '1200px',
  articleMaxWidth: '600px',
  desktopFooterHeight: '200px',
  desktopNavbarHeight: '120px',
  desktopNavbarMinimizedHeight: '60px',
  mobileFooterHeight: '200px',
  mobileNavbarHeight: '70px',
  quoteHorizontalGutters: '6%',
  navbarLinkWidth: '100px',
};

const borderRadii = {
  nano: '2px',
  micro: '4px',
  small: '8px',
  medium: '10px',
  large: '15px',
  infinity: '9999px',
};

const breakpoints = {
  mobile: '600px',
  desktop: '1000px',
  ultrawide: '1200px',
};

const opacity = {
  opacity00: 0,
  opacity10: 0.1,
  opacity20: 0.2,
  opacity30: 0.3,
  opacity40: 0.4,
  opacity50: 0.5,
  opacity60: 0.6,
  opacity70: 0.7,
  opacity80: 0.8,
  opacity90: 0.9,
};

const spaces = {
  nano: '2px',
  micro: '5px',
  small: '10px',
  medium: '30px',
  large: '40px',
  xLarge: '50px',
  xxLarge: '70px',
  jumbo: '100px',
};

const transitions = {
  short: '0.03s',
  medium: '0.15s',
  long: '0.5s',
};

export interface Theme {
  appDimensions: typeof appDimensions;
  breakpoints: typeof breakpoints;
  borderRadii: typeof borderRadii;
  colors: typeof themeColorValues;
  colorsHex: typeof colors;
  currentTheme: ThemeEnum;
  opacity: typeof opacity;
  spaces: typeof spaces;
  transitions: typeof transitions;
}

// ===================================== Main Theme
function makeMainTheme(currentTheme: ThemeEnum): Theme {
  return {
    appDimensions,
    breakpoints,
    borderRadii,
    colors: themeColorValues,
    colorsHex: colors,
    currentTheme,
    opacity,
    spaces,
    transitions,
  };
}

export default makeMainTheme;
