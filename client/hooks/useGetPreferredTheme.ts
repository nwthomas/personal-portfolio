import { useEffect, useState } from "react";

const themeOptions = {
  DARK: "dark",
  LIGHT: "light",
};
const DEFAULT_THEME = themeOptions.DARK;

export default function useGetPreferredTheme() {
  const [preferredTheme, setPreferredTheme] = useState("dark");

  useEffect(() => {
    try {
      const pastThemeState = window.localStorage.getItem("preferredTheme");
      if (pastThemeState) {
        setPreferredTheme(pastThemeState);
      } else {
        setPreferredTheme(DEFAULT_THEME);
      }
    } catch (_) {
      setPreferredTheme(DEFAULT_THEME);
    }
  }, []);

  function handleSetPreferredTheme() {
    const newPreferredTheme =
      preferredTheme === themeOptions.DARK
        ? themeOptions.LIGHT
        : themeOptions.DARK;

    try {
      window.localStorage.setItem("preferredTheme", newPreferredTheme);
    } catch (_) {}

    setPreferredTheme(newPreferredTheme);
  }

  return [preferredTheme, handleSetPreferredTheme];
}
