import React from 'react';
import { useRouter } from 'next/router';
import NextLink from 'next/link';
import styled from 'styled-components';

interface Props {
  children: string | React.ReactNode;
  href: string;
  withStyling?: boolean;
}

function Link({ children, href, withStyling }: Props) {
  const { pathname } = useRouter();

  if (withStyling) {
    return (
      <RootStyles isActive={isActiveLink(pathname, href)}>
        <NextLink href={href}>{children}</NextLink>
      </RootStyles>
    );
  }

  return <NextLink href={href}>{children}</NextLink>;
}

export function isActiveLink(routerPathname: string, hrefPathname: string) {
  if (
    routerPathname.length === 1 &&
    hrefPathname.length === 1 &&
    routerPathname === hrefPathname
  ) {
    return true;
  }

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
    align-items: center;
    display: flex;
    color: ${({ isActive, theme }) =>
      isActive ? theme.colors.textAccentTwo : theme.colors.text};
    height: 50%;
    justify-content: center;
    width: 100%;
  }
`;

export default Link;
