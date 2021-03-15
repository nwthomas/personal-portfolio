import { useEffect } from 'react';
import type { ThemeEnum } from '../../styles/libs/theme';

// This extends the Window object with the methods used in this hook
// from the Twitter Embeds extensions
declare global {
  // eslint-disable-next-line no-unused-vars
  interface Window {
    twttr: {
      init: boolean;
      widgets: {
        load: () => void;
      };
    };
  }
}

interface Props {
  currentTheme: ThemeEnum;
  tweetId: string;
}

function Tweet({ currentTheme, tweetId }: Props) {
  useEffect(() => {
    if (
      typeof window !== 'undefined' &&
      window?.twttr?.widgets?.load &&
      tweetId
    ) {
      window.twttr.widgets.load();
    }
  }, [currentTheme]);

  return (
    <blockquote className="twitter-tweet" data-dnt data-theme={currentTheme}>
      <a href={`https://twitter.com/nwthomas_/status/${tweetId}`}></a>
    </blockquote>
  );
}

export default Tweet;
