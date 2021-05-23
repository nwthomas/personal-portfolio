import React, { ReactNode, useContext } from 'react';
import Head from 'next/head';
import styled, { ThemeContext } from 'styled-components';
import { BabyYodaEasterEgg } from '../EasterEggs';
import Footer from '../Footer';
import SEO from '../SEO';
import usePageName from '../../hooks/usePageName';

interface Props {
  children: ReactNode | Array<ReactNode>;
  isArticle?: boolean;
  pageName: string;
  seoDescription?: string;
  seoImageURL?: string;
  seoSlug?: string;
  withEmojis?: boolean;
  withFooter?: boolean;
}

function Layout({
  children,
  isArticle,
  pageName,
  seoDescription,
  seoImageURL,
  seoSlug,
  withEmojis,
  withFooter,
}: Props) {
  const [currentPageName] = usePageName(pageName, withEmojis);
  const theme = useContext(ThemeContext);

  return (
    <>
      <Head>
        <title>{currentPageName}</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <SEO
        description={seoDescription}
        imageURL={seoImageURL}
        isArticle={isArticle}
        slug={seoSlug}
        title={pageName}
        currentTheme={theme.currentTheme}
      />
      <RootStyles withFooter={withFooter}>
        {children}
        {withFooter ? <Footer /> : null}
        <BabyYodaEasterEgg />
      </RootStyles>
    </>
  );
}

interface StyleProps {
  withFooter: boolean;
}

const RootStyles = styled.div<StyleProps>`
  background: ${({ theme }) => theme.colors.bodyBackground};
  display: flex;
  justify-content: center;
  margin-bottom: ${({ theme }) => theme.appDimensions.mobileNavbarHeight};
  min-height: ${({ theme, withFooter }) =>
    withFooter ? theme.appDimensions.appMinHeight : 0};
  padding: ${({ theme }) =>
    `${theme.appDimensions.mobileNavbarHeight} 0 calc(${theme.appDimensions.mobileFooterHeight} + ${theme.spaces.large})`};
  position: relative;
  width: 100%;

  @media only screen and (min-width: ${({ theme }) =>
      theme.breakpoints.mobile}) {
    padding: ${({ theme }) =>
      `${theme.appDimensions.desktopNavbarHeight} 0 calc(${theme.appDimensions.desktopFooterHeight} + ${theme.spaces.xxLarge})`};
    margin-bottom: 0;
  }
`;

export default Layout;
