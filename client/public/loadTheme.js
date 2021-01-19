(function getUserPreferredTheme() {
  const DARK_THEME = "dark";
  const LIGHT_THEME = "light";
  const LOCAL_STORAGE_KEY = "preferredTheme";

  try {
    const pastThemeState = window.localStorage.getItem(LOCAL_STORAGE_KEY);

    if (pastThemeState === DARK_THEME || pastThemeState === LIGHT_THEME) {
      window.__userPreferredTheme = pastThemeState;
    } else {
      window.__userPreferredTheme = DARK_THEME;
    }
  } catch (_) {
    window.__userPreferredTheme = DARK_THEME;
  }
})();
