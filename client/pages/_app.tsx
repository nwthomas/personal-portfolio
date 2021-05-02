import { useMemo } from 'react';
import { Hydrate } from 'react-query/hydration';
import { QueryClientProvider, QueryClient } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import { ThemeProvider } from 'styled-components';
import Navbar from '../components/Navbar';
import useGetPreferredTheme from '../hooks/useGetPreferredTheme';
import MobileNavbar from '../components/MobileNavbar';
import Toast from '../components/Toast';
import GlobalStyle, { makeMainTheme } from '../styles';
import '../styles/libs/fonts.css';

const oneDayMillis = 60000 * 60 * 24;
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: oneDayMillis,
    },
  },
});

export default function MyApp({ Component, pageProps }) {
  const [currentTheme, setCurrentTheme] = useGetPreferredTheme();
  const mainTheme = useMemo(() => {
    return makeMainTheme(currentTheme);
  }, [currentTheme]);

  return (
    <QueryClientProvider client={queryClient}>
      <Hydrate state={pageProps.dehydratedState}>
        <GlobalStyle theme={mainTheme} />
        <ThemeProvider theme={mainTheme}>
          <Navbar
            onThemeChangeClick={setCurrentTheme}
            themeName={currentTheme}
          />
          <Component {...pageProps} />
          <Toast isShown message="Email Sent" />
          <MobileNavbar />
        </ThemeProvider>
        {process.env.NEXT_PUBLIC_RUNTIME_ENV === 'development' ? (
          <ReactQueryDevtools initialIsOpen />
        ) : null}
      </Hydrate>
    </QueryClientProvider>
  );
}
