import { useContext } from 'react';
import Link from 'next/link';
import styled, { css, ThemeContext } from 'styled-components';
import { ChevronForwardIcon } from '../Icons';
import CategoryTag from '../CategoryTag';

const createArticleRoute = (articleId: string) => `/articles/${articleId}`;

interface Props {
  articleId: string;
  description: string;
  title: string;
  categories: Array<string>;
  withBackground?: boolean;
  withCategories?: boolean;
}

export default function ArticlePreviewCard({
  description,
  articleId,
  title,
  categories,
  withCategories,
}: Props) {
  const { currentTheme } = useContext(ThemeContext);
  const isDarkMode = currentTheme === 'dark';

  const sortedCategories = categories?.sort((a, b) => (a > b ? 1 : -1));

  return (
    <Link href={createArticleRoute(articleId)}>
      <RootStyles isDarkMode={isDarkMode}>
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

interface StylesProps {
  isDarkMode: boolean;
}

const RootStyles = styled.div<StylesProps>`
  align-self: flex-start;
  border-radius: ${({ theme }) => theme.borderRadii.micro};
  cursor: pointer;
  display: flex;
  flex-direction: column;
  height: 100%;
  margin-bottom: ${({ theme }) => theme.spaces.small};
  padding: ${({ theme }) => theme.spaces.medium};
  box-shadow: 0 5px 10px rgba(154, 160, 185, 0.05),
    0 15px 40px rgba(166, 173, 201, 0.2);
  -webkit-box-shadow: 0 5px 10px rgba(154, 160, 185, 0.05),
    0 15px 40px rgba(166, 173, 201, 0.2);
  -moz-box-shadow: 0 5px 10px rgba(154, 160, 185, 0.05),
    0 15px 40px rgba(166, 173, 201, 0.2);
  transition: opacity ${({ theme }) => theme.transitions.short};
  width: 100%;

  ${({ isDarkMode, theme }) =>
    isDarkMode &&
    css`
      background: ${theme.colors.bodyBackgroundAccentTwo};
      border: 1px solid ${theme.colors.bodyBackgroundAccentOne};
      -webkit-box-shadow: 0px 0px 16px 1px rgba(0, 0, 0, 0);
      -moz-box-shadow: 0px 0px 16px 1px rgba(0, 0, 0, 0);
      box-shadow: 0px 0px 16px 1px rgba(0, 0, 0, 0);
    `}

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
    transition: opacity ${({ theme }) => theme.transitions.short};
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

  &:hover {
    opacity: ${({ theme }) => theme.opacity.opacity80};
  }
`;
