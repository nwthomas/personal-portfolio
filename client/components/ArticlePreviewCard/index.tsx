import Link from "next/link";
import styled from "styled-components";
import { ChevronForwardIcon } from "../Icons";
import TopicTag from "../TopicTag";

interface Props {
  articleId: string;
  description: string;
  title: string;
  topicTags?: Array<string>;
}

export default function ArticlePreviewCard({
  description,
  articleId,
  title,
  topicTags,
}: Props) {
  const articleRoute = `/posts/${articleId}`;

  return (
    <Link href={articleRoute}>
      <RootStyles>
        <h4>{title}</h4>
        <p>{description}</p>
        <div>
          <div>
            <ChevronForwardIcon />
          </div>
          <p>Read</p>
          {topicTags?.length >= 1
            ? topicTags.map((topicTag, i) => (
                <div key={`${topicTag}${i}`}>
                  <TopicTag name={topicTag} />
                </div>
              ))
            : null}
        </div>
      </RootStyles>
    </Link>
  );
}

const RootStyles = styled.article`
  cursor: pointer;
  padding: 0 0 ${({ theme }) => theme.spaces.large};
  width: 100%;

  h4 {
    font-weight: bold;
  }

  > p {
    margin: ${({ theme }) => theme.spaces.micro} 0;
  }

  > div {
    align-items: center;
    display: flex;
    transition: opacity ${({ theme }) => theme.transitions.short};
    width: 100%;

    > div {
      margin-left: ${({ theme }) => theme.spaces.small};
    }

    > div:first-child {
      width: ${({ theme }) => theme.spaces.medium};
      margin-left: ${({ theme }) => `-${theme.spaces.small}`};
    }

    > p {
      font-style: italic;
    }
  }

  &:hover {
    > h4 {
      color: ${({ theme }) => theme.colors.textAccentTwo};
    }

    > p {
      opacity: ${({ theme }) => theme.opacity.opacity80};
    }

    > div {
      opacity: ${({ theme }) => theme.opacity.opacity80};
    }
  }
`;
