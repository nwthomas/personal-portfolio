import { useState } from "react";
import { ThemeProvider } from "styled-components";
import Navbar from "../components/Navbar";
import useGetPreferredTheme from "../hooks/useGetPreferredTheme";
import AppBar from "../components/AppBar";
import GlobalStyle, { makeMainTheme } from "../styles";
import "../styles/libs/fonts.css";

function MyApp({ Component, pageProps }) {
  const [currentTheme, setCurrentTheme] = useGetPreferredTheme();
  const [shouldUseThemeTransition, setShouldUseThemeTransition] = useState(
    false
  );

  const handleSetCurrentTheme = () => {
    setShouldUseThemeTransition(true);
    setCurrentTheme(currentTheme === "dark" ? "light" : "dark");
  };

  return (
    <ThemeProvider theme={makeMainTheme(currentTheme)}>
      <GlobalStyle isPageLoaded={shouldUseThemeTransition} />
      <Navbar
        onThemeChangeClick={handleSetCurrentTheme}
        themeName={currentTheme}
      />
      <Component {...pageProps} />
      <AppBar />
    </ThemeProvider>
  );
}

export default MyApp;
