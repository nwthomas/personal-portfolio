import { useRouter } from 'next/router';
import NextLink from 'next/link';
import styled from 'styled-components';

interface Props {
  children: string;
  href: string;
}

function Link(props: Props) {
  const { children, href } = props;
  const { pathname } = useRouter();

  return (
    <RootStyles isActive={isActiveLink(pathname, href)}>
      <NextLink href={href}>{children}</NextLink>
    </RootStyles>
  );
}

function isActiveLink(routerPathname: string, hrefPathname: string) {
  // This removes any empty strings after splitting on '/' so we can compare base baths
  const routerPathnameArray = routerPathname.split('/').filter(Boolean);
  const hrefPathnameArray = hrefPathname.split('/').filter(Boolean);

  let isActive = false;
  if (!routerPathnameArray && !hrefPathnameArray) {
    isActive = true;
  } else if (
    routerPathnameArray.length &&
    hrefPathnameArray.length &&
    routerPathnameArray[0] === hrefPathnameArray[0]
  ) {
    isActive = true;
  }

  return isActive;
}

interface StyleProps {
  isActive: boolean;
}

const RootStyles = styled.div<StyleProps>`
  a {
    color: ${({ isActive, theme }) =>
      isActive ? theme.colors.textAccentTwo : theme.colors.text};
    text-align: center;
    width: 100%;

    &:hover {
      padding-bottom: ${({ isActive }) => !isActive && '5px'};
    }
  }
`;

export default Link;
