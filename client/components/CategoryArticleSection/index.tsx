import styled from 'styled-components';
import ArticlePreviewCard from '../ArticlePreviewCard';
import { ArticlePreviewType } from '../../pages/api/articles';
import CategoryTag from '../CategoryTag';

interface Props {
  articles: Array<ArticlePreviewType>;
  categoryName?: string;
  withTopicTag?: boolean;
}

export default function CategoryArticleSection({
  articles,
  categoryName,
  withTopicTag,
}: Props) {
  return (
    <RootStyles>
      <div>
        {categoryName && withTopicTag ? (
          <CategoryTag name={categoryName} />
        ) : null}
      </div>
      <div>
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
          },
        )}
      </div>
    </RootStyles>
  );
}

const RootStyles = styled.div`
  margin: ${({ theme }) => theme.spaces.medium} 0;
  width: 100%;

  > div:first-child {
    margin-bottom: ${({ theme }) => `calc(${theme.spaces.small} * 2)`};
  }

  > div:last-child {
    display: grid;
    grid-template-columns: repeat(auto-fit, minMax(300px, 1fr));
    grid-auto-rows: minmax(min-content, max-content);
    column-gap: ${({ theme }) => theme.spaces.medium};
    row-gap: ${({ theme }) => theme.spaces.medium};
    width: 100%;

    @media only screen and (min-width: ${({ theme }) =>
        theme.breakpoints.desktop}) {
      grid-template-columns: repeat(auto-fit, minMax(300px, 380px));
    }
  }
`;
