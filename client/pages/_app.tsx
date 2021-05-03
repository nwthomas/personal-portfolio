import { useMemo } from 'react';
import { Hydrate } from 'react-query/hydration';
import { QueryClientProvider, QueryClient } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import { ThemeProvider } from 'styled-components';
import { StateProvider } from 'react-conflux';
import Navbar from '../components/Navbar';
import useGetPreferredTheme from '../hooks/useGetPreferredTheme';
import MobileNavbar from '../components/MobileNavbar';
import GlobalStyle, { makeMainTheme } from '../styles';
import { reducer, StateContext } from '../store';
import Modal from '../components/Modal';

const oneDayMillis = 60000 * 60 * 24;
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: oneDayMillis,
    },
  },
});

function App({ Component, pageProps }) {
  const [currentTheme, setCurrentTheme] = useGetPreferredTheme();
  const mainTheme = useMemo(() => {
    return makeMainTheme(currentTheme);
  }, [currentTheme]);

  return (
    <StateProvider reducer={reducer} stateContext={StateContext}>
      <QueryClientProvider client={queryClient}>
        <Hydrate state={pageProps.dehydratedState}>
          <GlobalStyle theme={mainTheme} />
          <ThemeProvider theme={mainTheme}>
            <Navbar
              onThemeChangeClick={setCurrentTheme}
              themeName={currentTheme}
            />
            <Component {...pageProps} />
            <MobileNavbar />
            <Modal />
          </ThemeProvider>
          {process.env.NEXT_PUBLIC_RUNTIME_ENV === 'development' ? (
            <ReactQueryDevtools initialIsOpen />
          ) : null}
        </Hydrate>
      </QueryClientProvider>
    </StateProvider>
  );
}

export default App;
