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

function CategoryTag({ name }: Props) {
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
  background: ${({ theme }) => theme.colors.bodyBackgroundAccentOne};
  border: none;
  border-radius: ${({ theme }) => theme.borderRadii.infinity};
  display: inline-block;
  cursor: pointer;
  padding: ${({ theme }) => `${theme.spaces.micro} ${theme.spaces.small}`};
  text-decoration: none;
  transition: opacity ${({ theme }) => theme.transitions.medium} ease-in-out;
  white-space: nowrap;

  &:hover {
    opacity: ${({ theme }) => theme.opacity.opacity80};
  }
`;

export default CategoryTag;
