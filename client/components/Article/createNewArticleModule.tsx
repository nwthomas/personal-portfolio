import BodyCopy from './components/BodyCopy';
import CodeSnippet from './components/CodeSnippet';
import Image from './components/Image';
import Quote from './components/Quote';
import Seperator from './components/Seperator';
import Title from './components/Title';
import type { ArticleModulesCollectionTypes } from '../../pages/api/articles';

const ARTICLE_COPY = 'ArticleBodyCopy';
const ARTICLE_CODE_SNIPPETS = 'ArticleCodeSnippets';
const ARTICLE_HEADING = 'ArticleHeading';
const ARTICLE_IMAGE = 'ArticleImage';
const ARTICLE_QUOTE = 'ArticleQuote';
const ARTICLE_SEPERATOR = 'ArticleSeperator';

export default function createNewArticle(
  articleModule: ArticleModulesCollectionTypes,
  articleModuleId: number,
) {
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
    case ARTICLE_SEPERATOR:
      return <Seperator key={articleModuleId} />;
    default:
      return null;
  }
}
