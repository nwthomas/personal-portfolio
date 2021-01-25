import ArticlePreviewCard from "../ArticlePreviewCard";
import { ArticlePreviewType } from "../../api/articles";
import TopicTag from "../TopicTag";
import styled from "styled-components";

interface Props {
  articles: Array<ArticlePreviewType>;
  categoryName: string;
}

export default function CategoryArticleSection({
  articles,
  categoryName,
}: Props) {
  return (
    <RootStyles>
      <div>
        <TopicTag name={categoryName} />
      </div>
      <div>
        {}
        {articles.map(
          ({ categoriesCollection, description, sys: { id }, title }) => {
            const articleCategories = categoriesCollection?.items
              ? categoriesCollection.items.map((category) => category.title)
              : undefined;

            return (
              <ArticlePreviewCard
                articleId={id}
                description={description}
                key={title}
                title={title}
                categories={articleCategories || []}
                withBackground
              />
            );
          }
        )}
      </div>
    </RootStyles>
  );
}

const RootStyles = styled.div`
  margin: ${({ theme }) => theme.spaces.medium} 0;
  width: 100%;

  > div:first-child {
    margin-bottom: ${({ theme }) => theme.spaces.small};
  }

  > div {
    display: flex;
    flex-wrap: wrap;
    align-content: flex-start;
    width: 100%;
  }
`;
