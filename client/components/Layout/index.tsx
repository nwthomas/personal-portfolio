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
  min-height: 100vh;
  padding: 60px 0 200px;
  position: relative;
  width: 100%;

  @media only screen and (min-width: 600px) {
    padding-top: 120px;
  }
`;
