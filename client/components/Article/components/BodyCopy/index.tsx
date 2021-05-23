import ReactMarkdown from 'react-markdown';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { materialDark } from 'react-syntax-highlighter/dist/cjs/styles/prism';
import styled from 'styled-components';

interface Props {
  bodyCopy: string;
}

export default function ArticleBodyCopy({ bodyCopy }: Props) {
  const bodyCopySections = bodyCopy.split('\n\n');

  const renderers = {
    code: ({ language, value }) => {
      return (
        <SyntaxHighlighter
          children={value}
          language={language}
          style={materialDark}
        />
      );
    },
  };

  return (
    <RootStyles>
      {bodyCopySections.map((section) => {
        return (
          <ReactMarkdown
            renderers={renderers}
            children={section}
            key={section}
          />
        );
      })}
    </RootStyles>
  );
}

const RootStyles = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  padding: 0 ${({ theme }) => theme.appDimensions.appHorizontalGutters};
  width: 100%;

  > p,
  ol,
  ul {
    max-width: ${({ theme }) => theme.appDimensions.articleMaxWidth};
    padding-bottom: ${({ theme }) => theme.spaces.medium};
    overflow: break-word;
    overflow-wrap: break-word;
    width: 100%;

    > a {
      color: ${({ theme }) => theme.colors.textAccentTwo};

      &:hover {
        color: ${({ theme }) => theme.colors.textAccentThree};
      }
    }

    li {
      list-style-position: outside;
      margin-bottom: ${({ theme }) => theme.spaces.medium};
      margin-left: ${({ theme }) => theme.spaces.medium};
    }

    li:last-child {
      margin-bottom: 0;
    }

    em {
      font-style: italic;
    }

    strong {
      font-weight: bold;
    }

    code {
      background: ${({ theme }) => theme.colors.bodyBackgroundAccentOne};
      border-radius: ${({ theme }) => theme.borderRadii.micro};
      font-family: 'Courier New', serif;
      padding: ${({ theme }) => `${theme.spaces.nano} ${theme.spaces.micro}`};
    }
  }
`;
