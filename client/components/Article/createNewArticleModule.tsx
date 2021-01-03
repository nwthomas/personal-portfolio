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
      return (
        <BodyCopy bodyCopy={articleModule.copy} key={articleModule.copy} />
      );
    case ARTICLE_CODE_SNIPPETS:
      return (
        <CodeSnippet
          codeSnippetCopy={articleModule.contents}
          key={articleModule.contents}
        />
      );
    case ARTICLE_HEADING:
      const isMainTitle = articleModule?.isMainTitle
        ? articleModule.isMainTitle
        : undefined;

      return (
        <Title
          titleCopy={articleModule.copy}
          isMainTitle={isMainTitle}
          key={articleModule.copy}
        />
      );
    case ARTICLE_IMAGE:
      return (
        <Image
          height={articleModule.height}
          imageUrl={articleModule.image.url}
          isHeroImage={articleModule.heroImage}
          isInline={articleModule.inline}
          key={articleModule.image.url}
          width={articleModule.width}
        />
      );
    case ARTICLE_QUOTE:
      return (
        <Quote
          key={articleModule.attribution}
          quoteAttribution={articleModule.attribution}
          quoteCopy={articleModule.copy}
        />
      );
    default:
      return null;
  }
}
