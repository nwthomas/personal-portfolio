import Link from "next/link";
import styled from "styled-components";
import { ChevronForwardIcon } from "../Icons";
import TopicTag from "../TopicTag";

const createArticleRoute = (articleId: string) => `/articles/${articleId}`;

interface Props {
  articleId: string;
  description: string;
  title: string;
  categories: Array<string>;
  withBackground?: boolean;
}

export default function ArticlePreviewCard({
  description,
  articleId,
  title,
  categories,
  withBackground,
}: Props) {
  const sortedCategories = categories?.sort((a, b) => (a > b ? 1 : -1));

  return (
    <Link href={createArticleRoute(articleId)}>
      <RootStyles withBackground={withBackground}>
        <>
          <h4>{title}</h4>
          <p>{description}</p>
          <div>
            <div>
              <ChevronForwardIcon />
            </div>
            <p>Read</p>
            {sortedCategories?.length >= 1
              ? sortedCategories.map((topicTag, i) => (
                  <div key={i}>
                    <TopicTag name={topicTag} />
                  </div>
                ))
              : null}
          </div>
        </>
      </RootStyles>
    </Link>
  );
}

const RootStyles = styled.article`
  align-self: flex-start;
  background-color: ${({ theme, withBackground }) =>
    withBackground
      ? theme.colors.bodyBackgroundAccentTwo
      : theme.colors.bodyBackground};
  border: ${({ theme, withBackground }) =>
    withBackground
      ? `1px solid ${theme.colors.bodyBackgroundAccentOne}`
      : "none"};
  border-radius: ${({ theme }) => theme.borderRadii.small};
  cursor: pointer;
  display: flex;
  flex-direction: column;
  margin-bottom: ${({ theme }) => theme.spaces.small};
  min-height: 0;
  padding: ${({ theme, withBackground }) =>
    withBackground ? theme.spaces.medium : `0 0 ${theme.spaces.large}`};
  width: 100%;

  @media only screen and (min-width: ${({ theme }) =>
      theme.breakpoints.desktop}) {
    margin: ${({ theme, withBackground }) =>
      withBackground ? `0 ${theme.spaces.small} ${theme.spaces.small} 0` : 0};
    min-height: ${({ withBackground }) => (withBackground ? "350px" : 0)};
    width: ${({ withBackground }) => (withBackground ? "400px" : "100%")};
  }

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
  }
`;
