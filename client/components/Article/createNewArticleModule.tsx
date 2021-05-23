import BodyCopy from './components/BodyCopy';
import CodeSnippet from './components/CodeSnippet';
import Image from './components/Image';
import Quote from './components/Quote';
import Separator from './components/Separator';
import Title from './components/Title';
import Video from './components/Video';
import type { ArticleModulesCollectionTypes } from '../../pages/api/articles';

export const ARTICLE_COPY = 'ArticleBodyCopy';
export const ARTICLE_CODE_SNIPPETS = 'ArticleCodeSnippets';
export const ARTICLE_HEADING = 'ArticleHeading';
export const ARTICLE_IMAGE = 'ArticleImage';
export const ARTICLE_QUOTE = 'ArticleQuote';
export const ARTICLE_SEPARATOR = 'ArticleSeperator';
export const ARTICLE_VIDEO = 'ArticleVideo';

export const createNewArticleModule = (
  articleModule: ArticleModulesCollectionTypes,
  articleModuleId: number,
  articleReadingTime?: string,
) => {
  switch (articleModule.__typename) {
    case ARTICLE_COPY:
      return (
        <BodyCopy bodyCopy={articleModule.copy} key={articleModule.copy} />
      );
    case ARTICLE_CODE_SNIPPETS:
      return (
        <CodeSnippet
          codeSnippetCopy={articleModule.contents}
          key={articleModuleId}
        />
      );
    case ARTICLE_HEADING:
      return (
        <Title
          titleCopy={articleModule.copy}
          isMainTitle={articleModule.isMainTitle}
          key={articleModuleId}
          readingTime={articleReadingTime}
        />
      );
    case ARTICLE_IMAGE:
      return (
        <Image
          height={articleModule.height}
          imageUrl={articleModule.image.url}
          isHeroImage={articleModule.heroImage}
          isInline={articleModule.inline}
          key={articleModuleId}
          width={articleModule.width}
        />
      );
    case ARTICLE_QUOTE:
      return (
        <Quote
          key={articleModuleId}
          quoteAttribution={articleModule.attribution}
          quoteCopy={articleModule.copy}
        />
      );
    case ARTICLE_SEPARATOR:
      return <Separator key={articleModuleId} />;
    case ARTICLE_VIDEO:
      return (
        <Video
          height={articleModule.height}
          key={articleModuleId}
          url={articleModule.src}
          title={articleModule.title}
          width={articleModule.width}
        />
      );
    default:
      return null;
  }
};
