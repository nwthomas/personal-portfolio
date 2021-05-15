import Image from 'next/image';
import styled from 'styled-components';
import type { ThemeEnum } from '../../styles/libs/theme';

interface Props {
  onClick: () => void;
  themeName: ThemeEnum;
}

export default function ThemeTransitionButton({ onClick, themeName }: Props) {
  // TODO: Move these to Icons folder
  const MoonIcon = (
    <Image
      alt="Click to change theme to light mode"
      draggable={false}
      height={30}
      quality={50}
      priority
      src={'/moon.svg'}
      width={30}
    />
  );

  const SunIcon = (
    <Image
      alt="Click to change theme to dark mode"
      draggable={false}
      height={30}
      quality={50}
      priority
      src={'/sun.svg'}
      width={30}
    />
  );

  const currentIcon = themeName === 'dark' ? MoonIcon : SunIcon;

  function handleOnClick() {
    if (themeName && onClick) {
      onClick();
    }
  }

  return (
    <RootStyles>
      <button onClick={handleOnClick} type="button">
        {themeName ? currentIcon : null}
      </button>
    </RootStyles>
  );
}

const RootStyles = styled.div`
  align-items: center;
  display: flex;
  height: ${({ theme }) => theme.appDimensions.mobileNavbarHeight};
  justify-content: flex-end;
  text-decoration: none;
  transition: ${({
    theme: {
      transitions: { medium },
    },
  }) => `padding-bottom ${medium}, opacity ${medium}`};
  width: 55px;

  &:hover {
    opacity: ${({ theme }) => theme.opacity.opacity80};
  }

  @media only screen and (min-width: ${({ theme }) =>
      theme.breakpoints.mobile}) {
    height: ${({ theme }) => theme.appDimensions.desktopNavbarHeight};
    margin-left: ${({ theme }) => theme.spaces.micro};
  }

  > button {
    align-items: center;
    background: ${({ theme }) => theme.colors.transparent};
    border: none;
    cursor: pointer;
    display: flex;
    height: 100%;
    justify-content: center;
    width: 100%;

    @media only screen and (min-width: ${({ theme }) =>
        theme.breakpoints.mobile}) {
      height: 50%;
    }
  }
`;
