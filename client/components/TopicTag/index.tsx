import Link from 'next/link';
import { useRouter } from 'next/router';
import { SyntheticEvent } from 'react';
import styled from 'styled-components';

export const createCategoryRouteName = (title: string) => {
  return title.split(' ').join('-').toLowerCase();
};

interface Props {
  name: string;
}

export default function TopicTag({ name }: Props) {
  const router = useRouter();

  const isInsideCategoryPage = !!router.query.categoryName;

  const categoryRouteName = createCategoryRouteName(name);
  const routePath = isInsideCategoryPage
    ? categoryRouteName
    : `articles/category/${categoryRouteName}`;

  const handleClick = (event: SyntheticEvent) => {
    event.stopPropagation();
  };

  return (
    <Link href={routePath}>
      <Button onClick={handleClick}>{name}</Button>
    </Link>
  );
}

const Button = styled.button`
  background-color: ${({ theme }) => theme.colors.bodyBackgroundAccentOne};
  border: none;
  border-radius: ${({ theme }) => theme.borderRadii.small};
  display: inline-block;
  cursor: pointer;
  padding: 6px 10px;
  text-decoration: none;
  transition: opacity ${({ theme }) => theme.transitions.short};

  &:hover {
    opacity: ${({ theme }) => theme.opacity.opacity80};
  }

  &:focus {
    outline-color: ${({ theme }) => theme.colors.text};
  }
`;
