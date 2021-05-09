import { useEffect, useState } from 'react';
import styled, { css, keyframes } from 'styled-components';
import Link from '../Link';
import ThemeTransitionButton from '../ThemeTransitionButton';
import { useShouldMinimizeNavbar } from '../../hooks/useShouldMinimizeNavbar';
import type { ThemeEnum } from '../../styles/libs/theme';

interface Props {
  onThemeChangeClick: () => void;
  themeName: ThemeEnum | null;
}

function Navbar({ onThemeChangeClick, themeName }: Props) {
  const [withAnimations, setWithAnimations] = useState(false);
  const shouldMinimizeNavbar = useShouldMinimizeNavbar();

  useEffect(() => {
    if (shouldMinimizeNavbar) {
      setWithAnimations(true);
    }
  }, [shouldMinimizeNavbar]);

  return (
    <RootStyles
      shouldMinimizeNavbar={shouldMinimizeNavbar}
      withAnimations={withAnimations}
    >
      <div>
        <Link href="/">
          <TitleIcon shouldMinimizeNavbar={shouldMinimizeNavbar}>n</TitleIcon>
        </Link>
        <div>
          <nav>
            <Link href="/articles" withStyling>
              Articles
            </Link>
            <Link href="/presentations" withStyling>
              Presentations
            </Link>
            <Link href="/nathan-thomas-resume.pdf" withStyling>
              Resume
            </Link>
            <Link href="/contact" withStyling>
              Contact
            </Link>
          </nav>
          <ThemeTransitionButton
            onClick={onThemeChangeClick}
            themeName={themeName}
          />
        </div>
      </div>
    </RootStyles>
  );
}

interface StyleProps {
  shouldMinimizeNavbar: boolean;
  withAnimations: boolean;
}

const RootStyles = styled.header<StyleProps>`
  align-items: center;
  background: ${({ theme }) => theme.colors.bodyBackground};
  display: flex;
  height: ${({ theme }) => theme.appDimensions.mobileNavbarHeight};
  justify-content: center;
  padding: 0 ${({ theme }) => theme.appDimensions.appHorizontalGutters};
  position: absolute;
  top: 0;
  transition: background ${({ theme }) => theme.transitions.short},
    height ${({ theme }) => theme.transitions.medium};
  width: 100%;
  z-index: 1;

  @media only screen and (min-width: ${({ theme }) =>
      theme.breakpoints.mobile}) {
    height: ${({ theme }) => theme.appDimensions.desktopNavbarHeight};
    position: fixed;

    ${({ shouldMinimizeNavbar, theme }) =>
      shouldMinimizeNavbar &&
      css`
        height: ${theme.appDimensions.desktopNavbarMinimizedHeight};
      `}
  }

  > div {
    align-items: center;
    display: flex;
    justify-content: space-between;
    max-width: ${({ theme }) => theme.appDimensions.appMaxWidth};
    width: 100%;

    > div {
      align-items: center;
      display: flex;
      flex-direction: row;
      justify-content: flex-end;

      > nav {
        display: none;

        @media only screen and (min-width: ${({ theme }) =>
            theme.breakpoints.mobile}) {
          display: flex;
          align-self: center;
          justify-content: flex-end;

          ${({ shouldMinimizeNavbar, theme, withAnimations }) => {
            if (withAnimations && shouldMinimizeNavbar) {
              return css`
                animation-name: ${hideLinks};
                animation-duration: ${theme.transitions.medium};
                animation-timing-function: ease-in-out;
              `;
            }
            if (shouldMinimizeNavbar && !shouldMinimizeNavbar) {
              return css`
                animation-name: ${showLinks};
                animation-duration: ${theme.transitions.medium};
                animation-timing-function: linear;
              `;
            }
            return null;
          }}

          > div {
            align-items: center;
            display: flex;
            height: ${({ theme }) => theme.appDimensions.desktopNavbarHeight};
            justify-content: center;
            text-decoration: none;
            transition: opacity ${({ theme }) => theme.transitions.medium};
            width: ${({ theme }) => theme.appDimensions.navbarLinkWidth};

            &:hover {
              opacity: ${({ theme }) => theme.opacity.opacity70};
            }

            ${({ shouldMinimizeNavbar, theme }) =>
              shouldMinimizeNavbar &&
              css`
                opacity: ${theme.opacity.opacity00};
              `}
          }

          > div:nth-child(2) {
            width: ${({ theme }) =>
              `calc(${theme.appDimensions.navbarLinkWidth} + 42px)`};
          }
        }
      }
    }
  }
`;

const hideLinks = keyframes`
  0% {opacity: 1}
  100% {display: 0, display: none}
`;

const showLinks = keyframes`
  0% {opacity: 0, display: flex}
  100% {opacity: 1}
`;

interface TitleStyleProps {
  children: string;
  shouldMinimizeNavbar: boolean;
}

const TitleIcon = styled.h1<TitleStyleProps>`
  align-items: center;
  color: ${({ theme }) => theme.colors.textAccentOne};
  cursor: pointer;
  display: flex;
  font-size: 8rem;
  line-height: 1;
  height: ${({ theme }) => theme.appDimensions.mobileNavbarHeight};
  transition: color ${({ theme }) => theme.transitions.short};

  &:hover {
    color: ${({ theme }) => theme.colors.textAccentTwo};
  }

  @media only screen and (min-width: ${({ theme }) =>
      theme.breakpoints.mobile}) {
    height: ${({ theme }) => theme.appDimensions.desktopNavbarHeight};
    font-size: 12rem;
    transition: color ${({ theme }) => theme.transitions.short},
      font-size ${({ theme }) => theme.transitions.medium};

    ${({ shouldMinimizeNavbar }) =>
      shouldMinimizeNavbar &&
      css`
        font-size: 8rem;
      `}
  }
`;

export default Navbar;
