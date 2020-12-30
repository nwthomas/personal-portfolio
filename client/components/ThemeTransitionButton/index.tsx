import { SyntheticEvent } from "react";
import Image from "next/image";
import styled from "styled-components";

const MoonIcon = (
  <Image
    alt="Click to change theme to light mode"
    draggable={false}
    height={30}
    quality={100}
    priority
    src={"/moon.svg"}
    width={30}
  />
);

const SunIcon = (
  <Image
    alt="Click to change theme to dark mode"
    draggable={false}
    height={30}
    quality={100}
    priority
    src={"/sun.svg"}
    width={30}
  />
);

interface Props {
  onClick: () => void;
  themeName: "dark" | "light";
}

export default function ThemeTransitionButton({ onClick, themeName }: Props) {
  const currentIcon = themeName === "dark" ? MoonIcon : SunIcon;

  return <RootStyles onClick={onClick}>{currentIcon}</RootStyles>;
}

const RootStyles = styled.div`
  align-items: center;
  cursor: pointer;
  display: flex;
  height: 60px;
  justify-content: flex-end;
  text-decoration: none;
  transition: padding-bottom 0.3s, opacity 0.3s;

  &:hover {
    opacity: 0.8;
    padding-bottom: 5px;
  }

  @media only screen and (min-width: 600px) {
    justify-content: center;
    width: 100px;
  }
`;
