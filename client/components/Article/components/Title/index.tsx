import styled from 'styled-components';

interface Props {
  isMainTitle?: boolean;
  titleCopy: string;
}

export default function ArticleTitle({ isMainTitle, titleCopy }: Props) {
  return (
    <RootStyles isMainTitle={isMainTitle}>
      <div>
        <h2>{titleCopy}</h2>
        {isMainTitle ? <p>by Nathan Thomas</p> : null}
      </div>
    </RootStyles>
  );
}

interface StyleProps {
  isMainTitle?: boolean;
}

const RootStyles = styled.div<StyleProps>`
  display: flex;
  justify-content: center;
  margin-bottom: ${({ theme }) => theme.spaces.medium};
  padding: 0 ${({ theme }) => theme.appDimensions.appHorizontalGutters};
  width: 100%;

  > div {
    display: flex;
    flex-direction: column;
    justify-content: 'flex-start';
    max-width: ${({ theme }) => theme.appDimensions.articleMaxWidth};
    width: 100%;

    @media only screen and (min-width: ${({ theme }) =>
        theme.breakpoints.mobile}) {
      justify-content: flex-start;
    }

    > h2 {
      font-size: ${({ isMainTitle }) => (isMainTitle ? '3rem' : '2rem')};
      font-weight: bold;

      @media only screen and (min-width: ${({ theme }) =>
          theme.breakpoints.mobile}) {
        font-size: ${({ isMainTitle }) => (isMainTitle ? '3.5rem' : '2rem')};
      }
    }

    > p {
      font-style: italic;
      margin-top: ${({ theme }) => theme.spaces.small};
      opacity: ${({ theme }) => theme.opacity.opacity80};
    }
  }
`;
