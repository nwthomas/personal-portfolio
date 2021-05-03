import styled from 'styled-components';
import { createNewArticleModule } from './createNewArticleModule';
import type { ArticleModulesCollectionType } from '../../pages/api/articles';

interface Props {
  articleModuleCollection: ArticleModulesCollectionType;
}

export default function Article({ articleModuleCollection }: Props) {
  return (
    <RootStyles>
      {articleModuleCollection.map((articleModule, id) => {
        return createNewArticleModule(articleModule, id);
      })}
    </RootStyles>
  );
}

const RootStyles = styled.article`
  margin-top: ${({ theme }) => theme.spaces.medium};
  width: 100%;
`;
