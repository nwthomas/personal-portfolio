import styled from 'styled-components';
import Separator from '../Separator';

interface Props {
  quoteAttribution: string;
  quoteCopy: string;
}

export default function ArticleQuote({ quoteAttribution, quoteCopy }: Props) {
  const finalQuoteAttribution = `- ${quoteAttribution}`;
  const finalQuoteCopy = `"${quoteCopy}"`;

  return (
    <RootStyles>
      <div>
        <Separator />
        <blockquote>
          <p>{finalQuoteCopy}</p>
          <p>{finalQuoteAttribution}</p>
        </blockquote>
        <Separator />
      </div>
    </RootStyles>
  );
}

const RootStyles = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  padding: 0 ${({ theme }) => theme.appDimensions.appHorizontalGutters};
  width: 100%;

  > div {
    max-width: ${({ theme }) => theme.appDimensions.articleMaxWidth};
    width: 100%;

    > blockquote {
      margin: ${({ theme }) =>
        `${theme.spaces.medium} ${theme.appDimensions.quoteHorizontalGutters}`};

      > p {
        font-size: 2rem;
        font-style: italic;
      }

      > p:first-child {
        margin-bottom: ${({ theme }) => theme.spaces.medium};
      }
    }
  }
`;
