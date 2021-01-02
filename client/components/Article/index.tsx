import styled from "styled-components";
import createNewArticleModule from "./createNewArticleModule";
import type { ArticleModulesCollection } from "../../api/articles";

interface Props {
  articleModuleCollection: ArticleModulesCollection;
}

export default function Article({ articleModuleCollection }: Props) {
  return (
    <RootStyles>
      {articleModuleCollection.map((articleModule) =>
        createNewArticleModule(articleModule)
      )}
    </RootStyles>
  );
}

const RootStyles = styled.article`
  margin-top: ${({ theme }) => theme.spaces.medium};
  width: 100%;
`;
