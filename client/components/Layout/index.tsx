import React, { ReactNode } from 'react';
import Head from 'next/head';
import styled from 'styled-components';
import { BabyYodaEasterEgg } from '../EasterEggs';
import Footer from '../Footer';
import usePageName from '../../hooks/usePageName';
import useGetPreferredTheme from '../../hooks/useGetPreferredTheme';

const RootStyles = styled.div`
  background-color: ${({ theme }) => theme.colors.bodyBackground};
  display: flex;
  justify-content: center;
  margin-bottom: ${({ theme }) => theme.appDimensions.mobileNavbarHeight};
  min-height: ${({ theme }) => theme.appDimensions.appMinHeight};
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

interface Props {
  children?: ReactNode | Array<ReactNode>;
  pageName: string;
  withEmojis?: boolean;
  withFooter?: boolean;
}

function Layout({ children, pageName, withEmojis, withFooter }: Props) {
  const [currentPageName] = usePageName(pageName);
  const [currentTheme] = useGetPreferredTheme();
  const finalPageName = withEmojis ? currentPageName : pageName;

  return (
    <>
      <Head>
        <title>{finalPageName}</title>
        <meta name="description" content={pageName} />
        <meta name="twitter:widgets:theme" content={currentTheme} />
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

export default Layout;
