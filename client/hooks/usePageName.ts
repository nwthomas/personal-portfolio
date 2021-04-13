import { useEffect, useState } from 'react';

const INTERVAL_AMOUNT = 1000;
const STATIC_EMOJI_LIST = [...'🌀🍪🤬🦑🌞👻✨🌧🤯🧩'];

export default function usePageName(
  initialPageName: string,
  withDynamicEmojis?: boolean,
) {
  const [pageName, setPageName] = useState(
    [...`${initialPageName}`].concat(
      withDynamicEmojis ? STATIC_EMOJI_LIST : [],
    ),
  );

  useEffect(() => {
    let interval;
    if (withDynamicEmojis) {
      interval = setInterval(() => {
        const lastEmoji = pageName[0];
        setPageName([...pageName.slice(1), lastEmoji]);
      }, INTERVAL_AMOUNT);
    }

    return () => clearInterval(interval);
  }, [pageName, setPageName]);

  return [pageName.join(''), setPageName];
}
