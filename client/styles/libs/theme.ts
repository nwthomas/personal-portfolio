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
  transparent: "transparent",
  vistaBlue: "#95dbb3",
  white: "#ffffff",
  woodsmoke: "#161618",
};

// ===================================== Color Theme
const darkColorTheme = {
  bodyBackground: colors.woodsmoke,
  bodyBackgroundAccentOne: colors.shark,
  themeButtonIcon: colors.finn,
  text: colors.white,
  textAccent: colors.emerald,
  textAccentHover: colors.vistaBlue,
  transparent: colors.transparent,
};

const lightColorTheme = {
  bodyBackground: colors.alabaster,
  bodyBackgroundAccentOne: colors.mercury,
  themeButtonIcon: colors.crusta,
  text: colors.mineShaft,
  textAccent: colors.emerald,
  textAccentHover: colors.vistaBlue,
  transparent: colors.transparent,
};

// ===================================== Space Variables
const spaces = {
  nano: "2px",
  micro: "5px",
  small: "20px",
  medium: "30px",
  large: "35px",
  xLarge: "40px",
  xxLarge: "50px",
};

const borderRadii = {
  nano: "2px",
  micro: "5px",
  small: "8px",
  medium: "10px",
  large: "15px",
  infinity: "9999px",
};

// ===================================== Main Theme
type ThemeColorTypeEnum = "dark" | "light";

export function makeMainTheme(themeColor: ThemeColorTypeEnum) {
  return {
    borderRadii,
    colors: themeColor === "light" ? lightColorTheme : darkColorTheme,
    spaces,
  };
}

export default makeMainTheme;
