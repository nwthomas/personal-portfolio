import React, { ReactNode } from "react";
import { BabyYodaEasterEgg } from "../EasterEggs";
import Head from "next/head";
import Footer from "../Footer";
import usePageName from "../../hooks/usePageName";
import styled from "styled-components";

interface Props {
  children?: ReactNode | Array<ReactNode>;
  pageName: string;
  withEmojis?: boolean;
  withFooter?: boolean;
}

export default function Layout({
  children,
  pageName,
  withEmojis,
  withFooter,
}: Props) {
  const [currentPageName] = usePageName(pageName);
  const finalPageName = withEmojis ? currentPageName : pageName;

  return (
    <>
      <Head>
        <title>{finalPageName}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <RootStyles>
        {children}
        {withFooter ? <Footer /> : null}
        <BabyYodaEasterEgg />
      </RootStyles>
    </>
  );
}

const RootStyles = styled.div`
  background-color: ${({ theme }) => theme.colors.bodyBackground};
  display: flex;
  justify-content: center;
  min-height: ${({ theme }) => theme.appDimensions.appMinHeight};
  padding: ${({ theme }) =>
    `${theme.appDimensions.mobileNavbarHeight} 0 ${theme.appDimensions.mobileFooterHeight}`};
  position: relative;
  width: 100%;

  @media only screen and (min-width: ${({ theme }) =>
      theme.breakpoints.mobile}) {
    padding: ${({ theme }) =>
      `${theme.appDimensions.desktopNavbarHeight} 0 ${theme.appDimensions.desktopFooterHeight}`};
  }
`;
