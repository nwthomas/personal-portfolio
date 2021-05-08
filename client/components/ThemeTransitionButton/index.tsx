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

  return (
    <RootStyles>
      <button onClick={onClick} type="button">
        {currentIcon}
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
      transitions: { short },
    },
  }) => `padding-bottom ${short}, opacity ${short}`};
  width: 55px;

  &:hover {
    opacity: ${({ theme }) => theme.opacity.opacity70};
  }

  @media only screen and (min-width: ${({ theme }) =>
      theme.breakpoints.mobile}) {
    height: ${({ theme }) => theme.appDimensions.desktopNavbarHeight};
    margin-right: ${({ theme }) => theme.spaces.small};
  }

  > button {
    align-items: center;
    background: ${({ theme }) => theme.colors.bodyBackground};
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
