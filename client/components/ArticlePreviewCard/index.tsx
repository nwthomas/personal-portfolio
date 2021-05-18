import Link from 'next/link';
import styled from 'styled-components';
import { ChevronForwardIcon } from '../Icons';
import CategoryTag from '../CategoryTag';

const createArticleRoute = (articleSlug: string) => `/articles/${articleSlug}`;

interface Props {
  articleSlug: string;
  description: string;
  title: string;
  categories: Array<string>;
  withBackground?: boolean;
  withCategories?: boolean;
}

export default function ArticlePreviewCard({
  description,
  articleSlug,
  title,
  categories,
  withCategories,
}: Props) {
  const sortedCategories = categories?.sort((a, b) => (a > b ? 1 : -1));

  return (
    <Link href={createArticleRoute(articleSlug)}>
      <RootStyles>
        <h4>{title}</h4>
        <p>{description}</p>
        <div>
          <div>
            <ChevronForwardIcon />
          </div>
          <p>Read</p>
        </div>
        {withCategories ? (
          <div>
            {sortedCategories?.length >= 1
              ? sortedCategories.map((topicTag, i) => (
                  <CategoryTag name={topicTag} key={i} />
                ))
              : null}
          </div>
        ) : null}
      </RootStyles>
    </Link>
  );
}

const RootStyles = styled.div`
  align-self: flex-start;
  background: ${({ theme }) => theme.colors.bodyBackgroundAccentTwo};
  border: 1px solid ${({ theme }) => theme.colors.bodyBackgroundAccentOne};
  border-radius: ${({ theme }) => theme.borderRadii.micro};
  -webkit-box-shadow: 0px 6px 12px -1px rgba(0, 0, 0, 0.08);
  -moz-box-shadow: 0px 6px 12px -1px rgba(0, 0, 0, 0.08);
  box-shadow: 0px 6px 12px -1px rgba(0, 0, 0, 0.08);
  cursor: pointer;
  display: flex;
  flex-direction: column;
  height: 100%;
  margin-bottom: ${({ theme }) => theme.spaces.small};
  padding: ${({ theme }) => theme.spaces.medium};
  transition: opacity ${({ theme }) => theme.transitions.medium} ease-in,
    transform ${({ theme }) => theme.transitions.medium} ease-in-out,
    box-shadow ${({ theme }) => theme.transitions.medium} ease-in-out;
  width: 100%;

  &:hover {
    -webkit-box-shadow: 0px 6px 12px -1px rgba(0, 0, 0, 0.15);
    -moz-box-shadow: 0px 6px 12px -1px rgba(0, 0, 0, 0.15);
    box-shadow: 0px 6px 12px -1px rgba(0, 0, 0, 0.15);
    opacity: ${({ theme }) => theme.opacity.opacity80};
    transform: translateY(-1px);
  }

  @media only screen and (min-width: ${({ theme }) =>
      theme.breakpoints.desktop}) {
    margin: ${({ theme }) =>
      `0 ${theme.spaces.medium} ${theme.spaces.medium} 0`};
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
    width: 100%;

    > div:first-child {
      width: ${({ theme }) => theme.spaces.medium};
      margin-left: ${({ theme }) => `-${theme.spaces.small}`};
    }

    > div {
      margin-left: ${({ theme }) => theme.spaces.small};
    }

    > p {
      font-style: italic;
    }
  }

  > div:last-child {
    margin-top: ${({ theme }) => theme.spaces.small};
    width: 100%;

    > button {
      margin-right: ${({ theme }) => theme.spaces.small};
    }
  }
`;
