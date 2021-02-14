import { useEffect, useState } from 'react';

const ONE_SECOND_MILLIS = 1000;

export default function useOneSecondTimer() {
  const [isOneSecond, setIsOneSecond] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsOneSecond(true);
    }, ONE_SECOND_MILLIS);

    return () => clearTimeout(timer);
  }, []);

  return isOneSecond;
}
