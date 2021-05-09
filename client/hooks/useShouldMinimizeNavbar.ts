import { useEffect, useState } from 'react';
import { appDimensions } from '../styles/libs/theme';
import { useScrollPosition } from './useScrollPosition';

const DESKTOP_NAVBAR_HEIGHT_INT = Number(
  appDimensions.desktopNavbarHeight.split('px').join(''),
);

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
