import React, { ReactNode } from "react";
import { BabyYodaEasterEgg } from "../EasterEggs";
import GlobalStyle from "../../styles";
import Head from "next/head";
import Footer from "../Footer";
import Navbar from "../Navbar";
import usePageName from "../../hooks/usePageName";
import { ThemeProvider } from "styled-components";
import { makeMainTheme } from "../../styles";
import styled from "styled-components";

interface Props {
  children: ReactNode | Array<ReactNode>;
  pageName: string;
}

export default function Layout({ children, pageName }: Props) {
  const [currentPageName] = usePageName(pageName);

  return (
    <ThemeProvider theme={makeMainTheme("dark")}>
      <GlobalStyle />
      <Head>
        <title>{currentPageName}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <RootStyles>
        {children}
        <Footer />
        <BabyYodaEasterEgg />
      </RootStyles>
    </ThemeProvider>
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
