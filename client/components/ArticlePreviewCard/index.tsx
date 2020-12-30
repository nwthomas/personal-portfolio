import Link from "next/link";
import styled from "styled-components";

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
      </RootStyles>
    </Link>
  );
}

const RootStyles = styled.article`
  cursor: pointer;
  margin: 20px 0;
  width: 70%;

  h4 {
    font-weight: bold;
  }
`;
