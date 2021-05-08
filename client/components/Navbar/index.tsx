import styled from 'styled-components';
import Link from '../Link';
import ThemeTransitionButton from '../ThemeTransitionButton';
import type { ThemeEnum } from '../../styles/libs/theme';

interface Props {
  onThemeChangeClick: () => void;
  themeName: ThemeEnum | null;
}

function Navbar({ onThemeChangeClick, themeName }: Props) {
  return (
    <RootStyles>
      <div>
        <Link href="/">
          <TitleIcon>n</TitleIcon>
        </Link>
        <div>
          {themeName ? (
            <ThemeTransitionButton
              onClick={onThemeChangeClick}
              themeName={themeName}
            />
          ) : null}
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
        </div>
      </div>
    </RootStyles>
  );
}

const RootStyles = styled.header`
  align-items: center;
  background-color: ${({ theme }) => theme.colors.bodyBackground};
  display: flex;
  height: ${({ theme }) => theme.appDimensions.mobileNavbarHeight};
  justify-content: center;
  padding: 0 ${({ theme }) => theme.appDimensions.appHorizontalGutters};
  position: absolute;
  top: 0;
  width: 100%;
  z-index: 1;

  @media only screen and (min-width: ${({ theme }) =>
      theme.breakpoints.mobile}) {
    height: ${({ theme }) => theme.appDimensions.desktopNavbarHeight};
    position: fixed;
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

          > div {
            align-items: center;
            display: flex;
            height: ${({ theme }) => theme.appDimensions.desktopNavbarHeight};
            justify-content: center;
            text-decoration: none;
            transition: opacity ${({ theme }) => theme.transitions.short};
            width: ${({ theme }) => theme.appDimensions.navbarLinkWidth};

            &:hover {
              opacity: ${({ theme }) => theme.opacity.opacity70};
            }
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

const TitleIcon = styled.h1<{ children: string }>`
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
  }
`;

export default Navbar;
