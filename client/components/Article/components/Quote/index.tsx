import styled from "styled-components";
import Seperators from "../Seperators";

interface Props {
  quoteAttribution: string;
  quoteCopy: string;
}

export default function Quote({ quoteAttribution, quoteCopy }: Props) {
  return (
    <RootStyles>
      <div>
        <Seperators />
        <blockquote>
          <p>{`"${quoteCopy}"`}</p>
          <p>{`- ${quoteAttribution}`}</p>
        </blockquote>
        <Seperators />
      </div>
    </RootStyles>
  );
}

const RootStyles = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  margin: ${({ theme }) => theme.spaces.xxLarge} 0;
  padding: 0 ${({ theme }) => theme.appDimensions.appHorizontalGutters};
  width: 100%;

  > div {
    max-width: ${({ theme }) => theme.appDimensions.articleMaxWidth};
    width: 100%;

    > blockquote {
      margin: ${({ theme }) => theme.spaces.xLarge}
        ${({ theme }) => theme.appDimensions.quoteHorizontalGutters};

      > p {
        font-size: 2rem;
        font-style: italic;
      }
    }
  }
`;
