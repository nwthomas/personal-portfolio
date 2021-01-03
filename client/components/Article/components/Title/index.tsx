import styled from "styled-components";

interface Props {
  isMainTitle?: boolean;
  titleCopy: string;
}

export default function ArticleTitle({ isMainTitle, titleCopy }: Props) {
  return (
    <RootStyles isMainTitle={isMainTitle}>
      <div>
        <h2>{titleCopy}</h2>
      </div>
    </RootStyles>
  );
}

const RootStyles = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: ${({ theme }) => theme.spaces.medium};
  padding: 0 ${({ theme }) => theme.appDimensions.appHorizontalGutters};
  width: 100%;

  > div {
    display: flex;
    justify-content: ${({ isMainTitle }) =>
      isMainTitle ? "center" : "flex-start"};
    max-width: ${({ theme }) => theme.appDimensions.articleMaxWidth};
    width: 100%;

    > h2 {
      font-size: 2rem;
      font-weight: bold;
    }
  }
`;
