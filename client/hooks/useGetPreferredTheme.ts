import { useEffect, useState } from "react";

const DARK_THEME = "dark";
const LIGHT_THEME = "light";
const LOCAL_STORAGE_KEY = "preferredTheme";

export default function useGetPreferredTheme(): ["dark" | "light", () => void] {
  const [preferredTheme, setPreferredTheme] = useState<"dark" | "light">(
    DARK_THEME
  );

  useEffect(() => {
    try {
      const pastThemeState = window.localStorage.getItem(LOCAL_STORAGE_KEY);
      if (pastThemeState === DARK_THEME || pastThemeState === LIGHT_THEME) {
        setPreferredTheme(pastThemeState);
      } else {
        setPreferredTheme(DARK_THEME);
      }
    } catch (_) {
      setPreferredTheme(DARK_THEME);
    }
  }, []);

  function handleSetPreferredTheme() {
    const newPreferredTheme =
      preferredTheme === DARK_THEME ? LIGHT_THEME : DARK_THEME;

    try {
      window.localStorage.setItem(LOCAL_STORAGE_KEY, newPreferredTheme);
    } catch (_) {}

    setPreferredTheme(newPreferredTheme);
  }

  return [preferredTheme, handleSetPreferredTheme];
}
