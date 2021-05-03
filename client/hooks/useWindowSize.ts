import { useState, useEffect } from 'react';

export default function useWindowSize() {
  const [windowSize, setWindowSize] = useState({
    height: undefined,
    width: undefined,
  });

  useEffect(() => {
    if (typeof window !== 'undefined') {
      function handleWindowResize() {
        setWindowSize({
          height: window.innerHeight,
          width: window.innerWidth,
        });
      }

      handleWindowResize();

      window.addEventListener('resize', handleWindowResize);

      return () => window.removeEventListener('resize', handleWindowResize);
    }

    // This is to satisfy ESLint
    return null;
  }, []);

  return windowSize;
}
