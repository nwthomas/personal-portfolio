import { useEffect, useState } from "react";

const oneSecondMillis = 1000;

export default function useOneSecondTimer() {
  const [isOneSecond, setIsOneSecond] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsOneSecond(true);
    }, oneSecondMillis);

    return () => clearTimeout(timer);
  }, []);

  return isOneSecond;
}
