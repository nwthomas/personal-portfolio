import { useEffect, useState } from 'react';
import type { ThemeEnum } from '../styles/libs/theme';

// This extends the Window object with the methods used in this hook
// from the Twitter Embeds extensions
declare global {
  interface Window {
    twttr: {
      widgets: {
        load: () => void;
        createTweetEmbed: (
          tweetId: string | number,
          el: HTMLElement,
          themeObj: { dnt: boolean; theme: string }
        ) => void;
      };
    };
  }
}

export default function useCreateNewTweet(
  currentTheme: ThemeEnum,
  element?: HTMLElement,
  tweetId?: string | number,
) {
  const [shouldUpdate, setShouldUpdate] = useState(true);

  useEffect(() => {
    const attributesObject = { dnt: true, theme: currentTheme };

    if (
      shouldUpdate
      && typeof window !== 'undefined'
      && window?.twttr?.widgets?.createTweetEmbed
      && element
      && element?.children?.length === 0
      && tweetId
    ) {
      const recentTweetId = `${tweetId}`;

      window.twttr.widgets.createTweetEmbed(
        recentTweetId,
        element,
        attributesObject,
      );

      setShouldUpdate(false);
    }
  }, [currentTheme, element, tweetId]);

  // Trigger destruction of currently rendered Tweet and creation of new Tweet
  // which is necessary to call manually in parent as the element used here is
  // a ref
  function shouldUpdateTweet() {
    // TODO: Update later
  }

  return { shouldUpdateTweet };
}
