// ===================================== Color Assignment Variables
// All color names pulled directly from http://chir.ag/projects/name-that-color/
const colors = {
  alabaster: "#f8f8f8f8",
  crusta: "#f98a31",
  bunker: "#101419",
  emerald: "#59c689",
  finn: "#6e2d6a",
  gainsboro: "#dadde1",
  mercury: "#e2e2e2",
  mineShaft: "#333333",
  onyx: "#3b3b40",
  shark: "#27272a",
  titanWhite: "#f8f8ff",
  transparent: "transparent",
  vistaBlue: "#95dbb3",
  woodsmoke: "#161618",
};

// ===================================== Color Theme
const darkColorTheme = {
  bodyBackground: colors.woodsmoke,
  bodyBackgroundAccentOne: colors.shark,
  bodyBackgroundAccentTwo: colors.onyx,
  text: colors.titanWhite,
  textAccent: colors.emerald,
  textAccentHover: colors.vistaBlue,
  transparent: colors.transparent,
  themeIconBackground: colors.finn,
};

const lightColorTheme = {
  bodyBackground: colors.alabaster,
  bodyBackgroundAccentOne: colors.mercury,
  bodyBackgroundAccentTwo: colors.gainsboro,
  text: colors.mineShaft,
  textAccent: colors.emerald,
  textAccentHover: colors.vistaBlue,
  transparent: colors.transparent,
  themeIconBackground: colors.crusta,
};

// ===================================== Space Variables
const appDimensions = {
  appHorizontalGutters: "3%",
  appMaxWidth: "1400px",
  appMinHeight: "100vh",
  articleHeroImageMaxWidth: "1000px",
  articleMaxWidth: "680px",
  desktopFooterHeight: "200px",
  desktopNavbarHeight: "120px",
  mobileFooterHeight: "200px",
  mobileNavbarHeight: "70px",
  quoteHorizontalGutters: "6%",
  navbarLinkWidth: "100px",
};

const borderRadii = {
  nano: "2px",
  micro: "5px",
  small: "8px",
  medium: "10px",
  large: "15px",
  infinity: "9999px",
};

const breakpoints = {
  mobile: "600px",
  desktop: "1000px",
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
  nano: "1px",
  micro: "5px",
  small: "10px",
  medium: "30px",
  large: "35px",
  xLarge: "40px",
  xxLarge: "50px",
  jumbo: "100px",
};

const transitions = {
  short: "0.3s",
  medium: "0.5s",
  long: "1s",
};

// ===================================== Main Theme
type ThemeColorTypeEnum = "dark" | "light";

function makeMainTheme(themeColor: ThemeColorTypeEnum) {
  return {
    appDimensions,
    breakpoints,
    borderRadii,
    colors: themeColor === "light" ? lightColorTheme : darkColorTheme,
    opacity,
    spaces,
    transitions,
  };
}

export default makeMainTheme;
