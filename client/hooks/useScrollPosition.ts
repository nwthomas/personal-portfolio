import { useEffect, useState } from 'react';

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
