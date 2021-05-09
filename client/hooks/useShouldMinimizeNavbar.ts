import { useEffect, useRef, useState } from 'react';
import { appDimensions } from '../styles/libs/theme';
import { useScrollPosition } from './useScrollPosition';

const DESKTOP_NAVBAR_HEIGHT_INT = Number(
  appDimensions.desktopNavbarHeight.split('px').join(''),
);

export function useShouldMinimizeNavbar(): boolean {
  const [shouldMinimizeNavbar, setShouldMinimizeNavbar] = useState(false);
  const { scrollValueY: newScrollValueY } = useScrollPosition();
  const previousScrollValueY = useRef(0);
  const cumulativeCurrentScrollValue = useRef(0);

  useEffect(() => {
    const scrollValueYDelta = newScrollValueY - previousScrollValueY.current;
    const newTotalCumulativeScrollY =
      cumulativeCurrentScrollValue.current + scrollValueYDelta;

    if (newTotalCumulativeScrollY >= DESKTOP_NAVBAR_HEIGHT_INT) {
      cumulativeCurrentScrollValue.current = DESKTOP_NAVBAR_HEIGHT_INT;
    } else if (newTotalCumulativeScrollY <= 0) {
      cumulativeCurrentScrollValue.current = 0;
    } else {
      cumulativeCurrentScrollValue.current += scrollValueYDelta;
    }

    if (cumulativeCurrentScrollValue.current >= DESKTOP_NAVBAR_HEIGHT_INT) {
      setShouldMinimizeNavbar(true);
    } else {
      setShouldMinimizeNavbar(false);
    }

    previousScrollValueY.current = newScrollValueY;
  }, [newScrollValueY]);

  return shouldMinimizeNavbar;
}
