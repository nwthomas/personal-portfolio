import Link from "next/link";
import styled from "styled-components";
import { ChevronForwardIcon } from "../Icons";

interface Props {
  articleId: string;
  description: string;
  title: string;
}

export default function ArticlePreviewCard({ description, title }: Props) {
  return (
    <Link href="/posts">
      <RootStyles>
        <h4>{title}</h4>
        <p>{description}</p>
        <div>
          <div>
            <ChevronForwardIcon />
          </div>
          <p>Read</p>
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

    > div {
      width: ${({ theme }) => theme.spaces.medium};
      margin-left: ${({ theme }) => `-${theme.spaces.small}`};
    }

    > p {
      font-style: italic;
    }
  }

  &:hover {
    > h4 {
      color: ${({ theme }) => theme.colors.textAccentHover};
    }

    > div {
      opacity: ${({ theme }) => theme.opacity.opacity80};
    }
  }
`;
