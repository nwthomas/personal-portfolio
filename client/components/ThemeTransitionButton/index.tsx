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
  cursor: pointer;
  display: flex;
  height: ${({ theme }) => theme.appDimensions.mobileNavbarHeight};
  justify-content: flex-end;
  text-decoration: none;
  transition: ${({
    theme: {
      transitions: { short },
    },
  }) => `padding-bottom ${short}, opacity ${short}`};
  width: 50px;

  &:hover {
    opacity: ${({ theme }) => theme.opacity.opacity80};
    padding-bottom: ${({ theme }) => theme.spaces.micro};
  }

  @media only screen and (min-width: ${({ theme }) =>
      theme.breakpoints.mobile}) {
    height: ${({ theme }) => theme.appDimensions.desktopNavbarHeight};
    justify-content: center;
    margin-right: ${({ theme }) => theme.spaces.small};
    width: 58px;
  }

  > button {
    align-items: flex-end;
    background-color: ${({ theme }) => theme.colors.bodyBackgroundAccentTwo};
    border-bottom: 1px solid
      ${({ theme }) => theme.colors.bodyBackgroundAccentOne};
    border-right: 1px solid
      ${({ theme }) => theme.colors.bodyBackgroundAccentOne};
    border-left: 1px solid
      ${({ theme }) => theme.colors.bodyBackgroundAccentOne};
    border-top: 0;
    border-bottom-left-radius: ${({ theme }) => theme.borderRadii.small};
    border-bottom-right-radius: ${({ theme }) => theme.borderRadii.small};
    box-shadow: 0px 12px 44px -22px rgba(0, 0, 0, 0.34);
    -moz-box-shadow: 0px 12px 44px -22px rgba(0, 0, 0, 0.34);
    -webkit-box-shadow: 0px 12px 44px -22px rgba(0, 0, 0, 0.34);
    cursor: pointer;
    display: flex;
    height: ${({ theme }) =>
      `calc(${theme.appDimensions.mobileNavbarHeight} * 0.85)`};
    justify-content: center;
    padding-bottom: ${({ theme }) => `calc(${theme.spaces.small})`};
    width: 100%;

    @media only screen and (min-width: ${({ theme }) =>
        theme.breakpoints.mobile}) {
      height: ${({ theme }) =>
        `calc(${theme.appDimensions.desktopNavbarHeight} * 0.75)`};
      padding-bottom: ${({ theme }) => `calc(${theme.spaces.nano} * 14)`};
    }
  }
`;
