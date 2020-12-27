import React from "react";
import Image from "next/image";
import Link from "next/link";
import styled from "styled-components";

interface Props {
  onThemeChangeClick: () => void;
}

export default function Navbar({ onThemeChangeClick }: Props) {
  return (
    <RootStyles>
      <div>
        <Link href="/">
          <TitleIcon>n</TitleIcon>
        </Link>
        <div>
          <ThemeIconImage onClick={onThemeChangeClick}>
            <Image
              alt="Light mode button"
              draggable={false}
              height={30}
              quality={100}
              src="/sun.svg"
              width={30}
            />
          </ThemeIconImage>
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
  height: 60px;
  justify-content: center;
  padding: 0 3%;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 1;

  @media only screen and (min-width: 600px) {
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

const ThemeIconImage = styled.div`
  cursor: pointer;
  display: flex;
  height: 60px;
  justify-content: flex-end;
  transition: padding-bottom 0.3s;
  width: 100px;

  &:hover {
    padding-bottom: 5px;
  }

  @media only screen and (min-width: 600px) {
    justify-content: center;
  }
`;
