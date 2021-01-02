import BodyCopy from "./components/BodyCopy";
import Quote from "./components/Quote";
import Title from "./components/Title";
import type { ArticleModulesCollectionTypes } from "../../api/articles";

const ARTICLE_COPY = "ArticleBodyCopy";
const ARTICLE_HEADING = "ArticleHeading";
const ARTICLE_QUOTE = "ArticleQuote";

export default function createNewArticle(
  articleModule: ArticleModulesCollectionTypes
) {
  switch (articleModule.__typename) {
    case ARTICLE_COPY:
      const bodyCopy = articleModule.copy;

      return <BodyCopy bodyCopy={bodyCopy} key={bodyCopy} />;
    case ARTICLE_HEADING:
      const isMainTitle = articleModule?.isMainTitle
        ? articleModule.isMainTitle
        : undefined;
      const titleCopy = articleModule.copy;

      return (
        <Title
          titleCopy={titleCopy}
          isMainTitle={isMainTitle}
          key={titleCopy}
        />
      );
    case ARTICLE_QUOTE:
      const quoteBodyCopy = articleModule.copy;
      const quoteAttribution = articleModule.attribution;

      return (
        <Quote
          key={quoteAttribution}
          quoteAttribution={quoteAttribution}
          quoteCopy={quoteBodyCopy}
        />
      );
    default:
      return null;
  }
}
