import React from "react";
import {
  GitHubIcon,
  InstagramIcon,
  LinkedInIcon,
  MailIcon,
  TwitterIcon,
} from "../Icons";
import Link from "next/link";
import styled from "styled-components";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <RootStyles>
      <div>
        <div>
          <p>"Be excellent to each other."</p>
          <p>{`© ${currentYear} Nathan Thomas`}</p>
        </div>
        <nav>
          <div>
            <a href="https://github.com/nwthomas">
              <GitHubIcon title="Link to GitHub" />
            </a>
          </div>
          <div>
            <a href="https://www.instagram.com/nwthomas/">
              <InstagramIcon title="Link to Instagram" />
            </a>
          </div>
          <div>
            <a href="https://www.linkedin.com/in/nwthomas-dev/">
              <LinkedInIcon title="Link to LinkedIn" />
            </a>
          </div>
          <div>
            <a href="https://twitter.com/nwthomas_">
              <TwitterIcon title="Link to Twitter" />
            </a>
          </div>
          <Link href="/contact">
            <div>
              <MailIcon title="Link to contact page" />
            </div>
          </Link>
        </nav>
      </div>
    </RootStyles>
  );
}

const RootStyles = styled.footer`
  align-items: center;
  background-color: ${({ theme }) => theme.colors.backgroundColor};
  border-top: ${({ theme }) => theme.spaces.nano} solid
    ${({ theme }) => theme.colors.bodyBackgroundAccentOne};
  border-bottom: ${({ theme }) => theme.spaces.nano} solid
    ${({ theme }) => theme.colors.bodyBackgroundAccentOne};
  bottom: 0;
  display: flex;
  height: ${({ theme }) => theme.appDimensions.desktopFooterHeight};
  justify-content: center;
  margin-bottom: ${({ theme }) => theme.appDimensions.mobileNavbarHeight};
  padding: 0 ${({ theme }) => theme.appDimensions.appHorizontalGutters};
  position: absolute;
  width: 100%;

  @media only screen and (min-width: ${({ theme }) =>
      theme.breakpoints.mobile}) {
    border-bottom: none;
    margin-bottom: 0;
  }

  > div {
    align-items: flex-start;
    display: flex;
    flex-direction: column-reverse;
    justify-content: space-between;
    max-width: ${({ theme }) => theme.appDimensions.appMaxWidth};
    width: 100%;

    @media only screen and (min-width: ${({ theme }) =>
        theme.breakpoints.mobile}) {
      align-items: center;
      flex-direction: row;
      padding: 0;
    }

    div:first-child {
      font-style: italic;
    }

    nav {
      align-items: center;
      display: flex;
      height: ${({ theme }) => theme.spaces.xxLarge};
      justify-content: flex-start;
      margin-bottom: ${({ theme }) => theme.spaces.small};
      width: 100%;

      @media only screen and (min-width: ${({ theme }) =>
          theme.breakpoints.mobile}) {
        height: ${({ theme }) => theme.spaces.jumbo};
        justify-content: flex-end;
        margin-bottom: 0;
        width: 50%;
      }

      > div {
        cursor: pointer;
        margin: 0 6% 0 0;
        transition: opacity ${({ theme }) => theme.transitions.short};
        width: 30px;

        @media only screen and (min-width: ${({ theme }) =>
            theme.breakpoints.mobile}) {
          margin: 0 3%;
        }

        &:hover {
          opacity: 0.8;
        }
      }

      > div:last-child {
        display: none;

        @media only screen and (min-width: ${({ theme }) =>
            theme.breakpoints.mobile}) {
          display: block;
          width: 35px;
        }
      }
    }
  }
`;
