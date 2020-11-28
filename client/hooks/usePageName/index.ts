import { useEffect, useState } from "react";

const usePageName = (
  pageName: string,
  phrases?: Array<string>,
  intervalTime?: number
) => {
  if (phrases.length === 0 || !intervalTime) {
    return pageName;
  }

  const [phraseIndex, setPhraseIndex] = useState(0);
  const [finalPageName, setFinalPagename] = useState(pageName);

  useEffect(() => {
    const interval = setInterval(() => {
      setFinalPagename(`${pageName} | ${phrases[phraseIndex]}`);
      setPhraseIndex(phraseIndex + 1 >= phrases.length ? 0 : phraseIndex + 1);
    }, intervalTime);

    return () => clearInterval(interval);
  }, [phraseIndex, setPhraseIndex, finalPageName, setFinalPagename, pageName]);

  return finalPageName;
};

export default usePageName;
