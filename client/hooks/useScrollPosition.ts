import { useEffect, useState } from 'react';
import { appDimensions } from '../styles/libs/theme';

const DESKTOP_NAVBAR_HEIGHT_INT = Number(
  appDimensions.desktopNavbarHeight.split('px').join(''),
);

interface ScrollValuesType {
  scrollValueX: number;
  scrollValueY: number;
}

export function useScrollPosition() {
  const [scrollValues, setScrollValues] = useState<ScrollValuesType>({
    scrollValueX: 0,
    scrollValueY: 0,
  });

  useEffect(() => {
    if (typeof window !== 'undefined') {
      function scrollEventListener() {
        setScrollValues({
          scrollValueX: window.scrollX,
          scrollValueY: window.scrollY,
        });
      }

      window.addEventListener('scroll', scrollEventListener);

      return () => window.removeEventListener('scroll', scrollEventListener);
    }

    return null;
  }, []);

  return scrollValues;
}

export function useShouldMinimizeNavbar(): boolean {
  const { scrollValueY } = useScrollPosition();
  const [shouldMinimizeNavbar, setShouldMinimizeNavbar] = useState(false);

  useEffect(() => {
    if (scrollValueY >= DESKTOP_NAVBAR_HEIGHT_INT) {
      setShouldMinimizeNavbar(true);
    } else {
      setShouldMinimizeNavbar(false);
    }
  }, [scrollValueY]);

  return shouldMinimizeNavbar;
}
