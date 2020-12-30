import React, { ReactNode } from "react";
import { BabyYodaEasterEgg } from "../EasterEggs";
import Head from "next/head";
import Footer from "../Footer";
import usePageName from "../../hooks/usePageName";
import styled from "styled-components";

interface Props {
  children?: ReactNode | Array<ReactNode>;
  pageName: string;
}

export default function Layout({ children, pageName }: Props) {
  const [currentPageName] = usePageName(pageName);

  return (
    <>
      <Head>
        <title>{currentPageName}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <RootStyles>
        {children}
        <Footer />
        <BabyYodaEasterEgg />
      </RootStyles>
    </>
  );
}

const RootStyles = styled.div`
  background-color: ${({ theme }) => theme.colors.bodyBackground};
  min-height: ${({ theme }) => theme.appDimensions.appMinHeight};
  padding: ${({ theme: { appDimensions } }) =>
    `${appDimensions.mobileNavbarHeight} 0 ${appDimensions.mobileFooterHeight}`};
  position: relative;
  width: 100%;

  @media only screen and (min-width: ${({ theme }) =>
      theme.breakpoints.mobile}) {
    padding-top: ${({ theme }) =>
      `${theme.appDimensions.desktopNavbarHeight} 0 ${theme.appDimensions.desktopFooterHeight}`};
  }
`;
