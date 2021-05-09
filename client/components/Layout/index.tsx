import React, { ReactNode, useContext } from 'react';
import Head from 'next/head';
import styled, { ThemeContext } from 'styled-components';
import { BabyYodaEasterEgg } from '../EasterEggs';
import Footer from '../Footer';
import usePageName from '../../hooks/usePageName';

interface Props {
  children?: ReactNode | Array<ReactNode>;
  pageName: string;
  withEmojis?: boolean;
  withFooter?: boolean;
}

function Layout({ children, pageName, withEmojis, withFooter }: Props) {
  const [currentPageName] = usePageName(pageName, withEmojis);
  const theme = useContext(ThemeContext);

  return (
    <>
      <Head>
        <title>{currentPageName}</title>
        <meta name="description" content={pageName}></meta>
        <meta name="twitter:widgets:theme" content={theme.currentTheme}></meta>
        <meta name="twitter:dnt" content="on"></meta>
        <link rel="icon" href="/favicon.ico" />
      </Head>
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
    `${theme.appDimensions.mobileNavbarHeight} 0 ${theme.appDimensions.mobileFooterHeight}`};
  position: relative;
  width: 100%;

  @media only screen and (min-width: ${({ theme }) =>
      theme.breakpoints.mobile}) {
    padding: ${({ theme }) =>
      `${theme.appDimensions.desktopNavbarHeight} 0 ${theme.appDimensions.desktopFooterHeight}`};
    margin-bottom: 0;
  }
`;

export default Layout;
