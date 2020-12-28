import { useEffect, useState } from "react";
import { ThemeProvider } from "styled-components";
import Navbar from "../components/Navbar";
import GlobalStyle, { makeMainTheme } from "../styles";
import "../styles/libs/fonts.css";

function MyApp({ Component, pageProps }) {
  const [currentTheme, setCurrentTheme] = useState("dark");
  const [isPageLoaded, setIsPageLoaded] = useState(false);

  useEffect(() => {
    setIsPageLoaded(true);
  }, []);

  const handleSetCurrentTheme = () => {
    setCurrentTheme(currentTheme === "dark" ? "light" : "dark");
  };

  return (
    <ThemeProvider theme={makeMainTheme(currentTheme)}>
      <GlobalStyle isPageLoaded={isPageLoaded} />
      <Navbar onThemeChangeClick={handleSetCurrentTheme} />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
