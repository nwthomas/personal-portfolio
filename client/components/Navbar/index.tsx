import React from "react";
import Link from "next/link";
import ThemeTransitionButton from "../ThemeTransitionButton";
import styled from "styled-components";

interface Props {
  onThemeChangeClick: () => void;
  themeName: "dark" | "light";
}

export default function Navbar({ onThemeChangeClick, themeName }: Props) {
  return (
    <RootStyles>
      <div>
        <Link href="/">
          <TitleIcon>n</TitleIcon>
        </Link>
        <div>
          <ThemeTransitionButton
            onClick={onThemeChangeClick}
            themeName={themeName}
          />
          <nav>
            <Link href="/posts">Posts</Link>
            <Link href="/talks">Talks</Link>
            <Link href="/projects">Projects</Link>
            <Link href="/contact">Contact</Link>
          </nav>
        </div>
      </div>
    </RootStyles>
  );
}

const RootStyles = styled.div`
  align-items: center;
  background-color: ${({ theme }) => theme.colors.bodyBackground};
  display: flex;
  height: 70px;
  justify-content: center;
  padding: 0 3%;
  position: absolute;
  top: 0;
  width: 100%;
  z-index: 1;

  @media only screen and (min-width: 600px) {
    position: fixed;
    height: 120px;
  }

  > div {
    align-items: center;
    display: flex;
    justify-content: space-between;
    max-width: 1400px;
    width: 100%;

    > div {
      align-items: center;
      display: flex;
      flex-direction: row;
      justify-content: flex-end;

      > nav {
        display: none;

        @media only screen and (min-width: 600px) {
          display: flex;
          align-self: center;
          justify-content: flex-end;

          > a {
            align-items: center;
            display: flex;
            height: 60px;
            justify-content: center;
            text-decoration: none;
            transition: color 0.3s, padding-bottom 0.3s;
            width: 100px;

            &:hover {
              color: ${({ theme }) => theme.colors.textAccentHover};
              padding-bottom: 5px;
            }
          }
        }
      }
    }
  }
`;

const TitleIcon = styled.h1`
  align-items: center;
  color: ${({ theme }) => theme.colors.textAccent};
  cursor: pointer;
  display: flex;
  font-size: 5.5rem;
  line-height: 1;
  max-height: 100px;
  transition: color 0.3s;

  &:hover {
    color: ${({ theme }) => theme.colors.textAccentHover};
  }

  @media only screen and (min-width: 600px) {
    font-size: 10rem;
  }
`;
