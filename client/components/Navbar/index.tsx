import styled, { css } from 'styled-components';
import Link from '../Link';
import ThemeTransitionButton from '../ThemeTransitionButton';
import { useShouldMinimizeNavbar } from '../../hooks/useShouldMinimizeNavbar';
import type { ThemeEnum } from '../../styles/libs/theme';

interface Props {
  onThemeChangeClick: () => void;
  themeName: ThemeEnum | null;
}

function Navbar({ onThemeChangeClick, themeName }: Props) {
  const shouldMinimizeNavbar = useShouldMinimizeNavbar();
  const shouldShowContactPage = !!process.env.NEXT_PUBLIC_WITH_CONTACT_PAGE;

  return (
    <RootStyles shouldMinimizeNavbar={shouldMinimizeNavbar}>
      <div>
        <Link href="/">
          <a>
            <TitleIcon shouldMinimizeNavbar={shouldMinimizeNavbar}>n</TitleIcon>
          </a>
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
            {shouldShowContactPage ? (
              <Link href="/contact" withStyling>
                Contact
              </Link>
            ) : null}
          </nav>
          <div>
            <ThemeTransitionButton
              onClick={onThemeChangeClick}
              themeName={themeName}
            />
          </div>
        </div>
      </div>
    </RootStyles>
  );
}

interface StyleProps {
  shouldMinimizeNavbar: boolean;
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
  transition: background ${({ theme }) => theme.transitions.short} ease-in-out,
    height ${({ theme }) => theme.transitions.medium} ease-in-out;
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

          > div {
            align-items: center;
            display: flex;
            height: ${({ theme }) => theme.appDimensions.desktopNavbarHeight};
            justify-content: center;
            text-decoration: none;
            transition: transform ${({ theme }) => theme.transitions.medium}
                ease-in-out,
              display ${({ theme }) => theme.transitions.medium} ease-in-out,
              opacity ${({ theme }) => theme.transitions.medium} ease-in-out;
            width: ${({ theme }) => theme.appDimensions.navbarLinkWidth};
            visibility: shown;

            ${({ shouldMinimizeNavbar }) =>
              shouldMinimizeNavbar &&
              css`
                display: none;
                opacity: 0;
              `}

            &:hover {
              opacity: ${({ theme }) => theme.opacity.opacity90};
              transform: translateY(-1px);
            }
          }

          > div:nth-child(2) {
            width: ${({ theme }) =>
              `calc(${theme.appDimensions.navbarLinkWidth} + 42px)`};
          }
        }
      }

      > div {
        margin-left: ${({ theme }) => theme.spaces.small};
        width: 33px;
      }
    }
  }
`;
interface TitleStyleProps extends StyleProps {
  children: string;
}

const TitleIcon = styled.h1<TitleStyleProps>`
  align-items: center;
  color: ${({ theme }) => theme.colors.textAccentOne};
  cursor: pointer;
  display: flex;
  font-size: 8rem;
  height: ${({ theme }) => theme.appDimensions.mobileNavbarHeight};
  line-height: 1;
  transition: color ${({ theme }) => theme.transitions.medium} ease-in-out;

  &:hover {
    color: ${({ theme }) => theme.colors.textAccentTwo};
  }

  @media only screen and (min-width: ${({ theme }) =>
      theme.breakpoints.mobile}) {
    font-size: 12rem;
    transition: color ${({ theme }) => theme.transitions.medium} ease-in-out,
      font-size ${({ theme }) => theme.transitions.medium} ease-in-out;

    ${({ shouldMinimizeNavbar }) =>
      shouldMinimizeNavbar &&
      css`
        font-size: 8rem;
      `}
  }
`;

export default Navbar;
