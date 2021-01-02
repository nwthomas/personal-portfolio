import styled from "styled-components";
import ReactMarkdown from "react-markdown";

interface Props {
  bodyCopy: string;
}

export default function BodyCopy({ bodyCopy }: Props) {
  const bodyCopySections = bodyCopy.split("\n\n");

  return (
    <RootStyles>
      {bodyCopySections.map((section) => {
        return (
          <div key={section}>
            <ReactMarkdown>{section}</ReactMarkdown>
          </div>
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

  > div {
    max-width: ${({ theme }) => theme.appDimensions.articleMaxWidth};
    margin-bottom: ${({ theme }) => theme.spaces.large};
    width: 100%;

    > p {
      overflow: break-word;

      > a {
        color: ${({ theme }) => theme.colors.textAccent};

        &:hover {
          color: ${({ theme }) => theme.colors.textAccentHover};
        }
      }
    }
  }

  > div:last-child {
    margin-bottom: 0;
  }
`;
