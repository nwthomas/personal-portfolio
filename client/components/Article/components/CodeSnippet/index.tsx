import ReactMarkdown from 'react-markdown';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { materialDark } from 'react-syntax-highlighter/dist/cjs/styles/prism';
import styled from 'styled-components';

interface Props {
  codeSnippetCopy: string;
}

export default function CodeSnippet({ codeSnippetCopy }: Props) {
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
      <div>
        <ReactMarkdown renderers={renderers} children={codeSnippetCopy} />
      </div>
    </RootStyles>
  );
}

const RootStyles = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  margin: 0 0 ${({ theme }) => theme.spaces.medium};
  padding: 0 ${({ theme }) => theme.appDimensions.appHorizontalGutters};
  width: 100%;

  > div {
    max-width: ${({ theme }) => theme.appDimensions.articleMaxWidth};
    width: 100%;

    > pre {
      border-radius: ${({ theme }) => theme.borderRadii.micro};
      -webkit-box-shadow: 0px 6px 12px -1px rgba(0, 0, 0, 0.08);
      -moz-box-shadow: 0px 6px 12px -1px rgba(0, 0, 0, 0.08);
      box-shadow: 0px 6px 12px -1px rgba(0, 0, 0, 0.08);
    }
  }
`;
