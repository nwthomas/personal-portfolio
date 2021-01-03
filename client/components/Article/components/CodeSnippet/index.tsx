import ReactMarkdown from "react-markdown";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { materialDark } from "react-syntax-highlighter/dist/cjs/styles/prism";
import styled from "styled-components";

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
  border-radius: ${({ theme }) => theme.borderRadii.small};
  display: flex;
  flex-direction: column;
  margin: ${({ theme }) => theme.spaces.medium} 0;
  padding: 0 ${({ theme }) => theme.appDimensions.appHorizontalGutters};
  width: 100%;

  > div {
    max-width: ${({ theme }) => theme.appDimensions.articleMaxWidth};
    width: 100%;
  }
`;
