import { SyntheticEvent } from "react";
import Image from "next/image";
import styled from "styled-components";

interface Props {
  onClick: () => void;
  themeName: "dark" | "light";
}

export default function ThemeTransitionButton({ onClick, themeName }: Props) {
  const handleOnClick = (event: SyntheticEvent) => {
    event.preventDefault();

    const buttonClickAudio = new Audio("/switch-click.mp3");
    buttonClickAudio.volume = 0.3;
    buttonClickAudio.play();

    onClick();
  };

  return (
    <RootStyles onClick={handleOnClick}>
      <Image
        alt="Theme button"
        draggable={false}
        height={30}
        quality={100}
        src={themeName === "dark" ? "/moon.svg" : "/sun.svg"}
        width={30}
      />
    </RootStyles>
  );
}

const RootStyles = styled.div`
  align-items: center;
  cursor: pointer;
  display: flex;
  height: 60px;
  justify-content: flex-end;
  text-decoration: none;
  transition: padding-bottom 0.3s, opacity 0.3s;
  width: 100px;

  &:hover {
    opacity: 0.8;
    padding-bottom: 5px;
  }

  @media only screen and (min-width: 600px) {
    justify-content: center;
  }
`;
