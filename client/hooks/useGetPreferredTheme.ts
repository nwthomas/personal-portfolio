import { useEffect, useState } from "react";

const DEFAULT_THEME = "dark";

export default function useGetPreferredTheme(): ["dark" | "light", () => void] {
  const [preferredTheme, setPreferredTheme] = useState<"dark" | "light">(
    "dark"
  );

  useEffect(() => {
    try {
      const pastThemeState = window.localStorage.getItem("preferredTheme");
      if (pastThemeState === "dark" || pastThemeState === "light") {
        setPreferredTheme(pastThemeState);
      } else {
        setPreferredTheme(DEFAULT_THEME);
      }
    } catch (_) {
      setPreferredTheme(DEFAULT_THEME);
    }
  }, []);

  function handleSetPreferredTheme() {
    const newPreferredTheme = preferredTheme === "dark" ? "light" : "dark";

    try {
      window.localStorage.setItem("preferredTheme", newPreferredTheme);
    } catch (_) {}

    setPreferredTheme(newPreferredTheme);
  }

  return [preferredTheme, handleSetPreferredTheme];
}
