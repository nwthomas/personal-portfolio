// ===================================== Color Assignment Variables
// All color names pulled directly from http://chir.ag/projects/name-that-color/
const colors = {
  alabaster: "#f8f8f8f8",
  crusta: "#f98a31",
  electricViolet: "#642af5",
  bunker: "#101419",
  emerald: "#59c689",
  finn: "#6e2d6a",
  mercury: "#e2e2e2",
  mineShaft: "#333333",
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
  text: colors.titanWhite,
  textAccent: colors.emerald,
  textAccentHover: colors.vistaBlue,
  transparent: colors.transparent,
  themeIconBackground: colors.finn,
};

const lightColorTheme = {
  bodyBackground: colors.alabaster,
  bodyBackgroundAccentOne: colors.mercury,
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
  desktopFooterHeight: "200px",
  desktopNavbarHeight: "120px",
  mobileFooterHeight: "200px",
  mobileNavbarHeight: "70px",
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
};

// ===================================== Main Theme
type ThemeColorTypeEnum = "dark" | "light";

function makeMainTheme(themeColor: ThemeColorTypeEnum) {
  return {
    appDimensions,
    breakpoints,
    borderRadii,
    colors: themeColor === "light" ? lightColorTheme : darkColorTheme,
    spaces,
    transitions,
  };
}

export default makeMainTheme;
