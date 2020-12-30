import { useState } from "react";
import { ThemeProvider } from "styled-components";
import Navbar from "../components/Navbar";
import useGetPreferredTheme from "../hooks/useGetPreferredTheme";
import MobileNavbar from "../components/MobileNavbar";
import { QueryClientProvider, QueryClient } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import GlobalStyle, { makeMainTheme } from "../styles";
import "../styles/libs/fonts.css";

const queryClient = new QueryClient();

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
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={makeMainTheme(currentTheme)}>
        <GlobalStyle isPageLoaded={shouldUseThemeTransition} />
        <Navbar
          onThemeChangeClick={handleSetCurrentTheme}
          themeName={currentTheme}
        />
        <Component {...pageProps} />
        <MobileNavbar />
      </ThemeProvider>
      {process.env.NEXT_PUBLIC_RUNTIME_ENV === "development" ? (
        <ReactQueryDevtools initialIsOpen />
      ) : null}
    </QueryClientProvider>
  );
}

export default MyApp;
