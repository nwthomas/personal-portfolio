import BodyCopy from "./components/BodyCopy";
import CodeSnippet from "./components/CodeSnippet";
import Image from "./components/Image";
import Quote from "./components/Quote";
import Title from "./components/Title";
import type { ArticleModulesCollectionTypes } from "../../api/articles";

const ARTICLE_COPY = "ArticleBodyCopy";
const ARTICLE_CODE_SNIPPETS = "ArticleCodeSnippets";
const ARTICLE_HEADING = "ArticleHeading";
const ARTICLE_IMAGE = "ArticleImage";
const ARTICLE_QUOTE = "ArticleQuote";

export default function createNewArticle(
  articleModule: ArticleModulesCollectionTypes
) {
  switch (articleModule.__typename) {
    case ARTICLE_COPY:
      const bodyCopy = articleModule.copy;

      return <BodyCopy bodyCopy={bodyCopy} key={bodyCopy} />;
    case ARTICLE_CODE_SNIPPETS:
      const codeSnippet = articleModule.contents;

      return <CodeSnippet codeSnippetCopy={codeSnippet} key={codeSnippet} />;
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
    case ARTICLE_IMAGE:
      const imageUrl = articleModule.image.url;
      const isHeroImage = articleModule.heroImage;

      return <Image imageUrl={imageUrl} isHeroImage={isHeroImage} />;
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
