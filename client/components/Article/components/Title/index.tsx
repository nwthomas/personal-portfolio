import styled from "styled-components";

interface Props {
  isMainTitle?: boolean;
  titleCopy: string;
}

export default function ArticleTitle({ isMainTitle, titleCopy }: Props) {
  return (
    <RootStyles isMainTitle={isMainTitle}>
      <div>
        <h4>{titleCopy}</h4>
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

    > h4 {
      font-weight: bold;
    }
  }
`;
