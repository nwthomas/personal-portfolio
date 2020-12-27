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
import styles from "./Footer.module.scss";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <RootStyles>
      <div>
        <div>
          <p>"Be most excellent to each other."</p>
          <p>{`© ${currentYear} Nathan Thomas`}</p>
        </div>
        <nav>
          <div>
            <a href="https://github.com/nwthomas">
              <GitHubIcon theme="dark" />
            </a>
          </div>
          <div>
            <a href="https://www.instagram.com/nwthomas/">
              <InstagramIcon theme="dark" />
            </a>
          </div>
          <div>
            <a href="https://www.linkedin.com/in/nwthomas-dev/">
              <LinkedInIcon theme="dark" />
            </a>
          </div>
          <div>
            <a href="https://twitter.com/nwthomas_">
              <TwitterIcon theme="dark" />
            </a>
          </div>
          <Link href="/contact">
            <div>
              <MailIcon theme="dark" />
            </div>
          </Link>
        </nav>
      </div>
    </RootStyles>
  );
}

const RootStyles = styled.footer`
  align-items: center;
  border-top: 1px solid ${({ theme }) => theme.colors.bodyBackgroundAccentOne};
  bottom: 0;
  display: flex;
  height: 200px;
  justify-content: center;
  padding: 0 3%;
  position: absolute;
  width: 100%;

  > div {
    align-items: center;
    display: flex;
    justify-content: space-between;
    max-width: 1400px;
    width: 100%;

    div:first-child {
      font-style: italic;
    }

    nav {
      align-items: center;
      display: flex;
      height: 100px;
      justify-content: flex-end;
      width: 50%;

      > div {
        cursor: pointer;
        margin: 0 3.5%;
        transition: opacity 0.3s;
        width: 30px;

        &:hover {
          opacity: 0.8;
        }
      }
    }
  }
`;
