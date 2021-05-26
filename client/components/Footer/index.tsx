import Link from 'next/link';
import styled, { css } from 'styled-components';
import {
  GitHubIcon,
  InstagramIcon,
  LinkedInIcon,
  MailIcon,
  TwitterIcon,
} from '../Icons';
import { footerPhrases } from '../../staticAssets';

const randomFooterPhrase =
  footerPhrases[Math.floor(Math.random() * footerPhrases.length)];

const GitHubIconComponent = <GitHubIcon />;
const InstagramIconComponent = <InstagramIcon />;
const LinkedInIconComponent = <LinkedInIcon />;
const MailIconComponent = <MailIcon />;
const TwitterIconComponent = <TwitterIcon />;

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const shouldShowContactPage = !!process.env.NEXT_PUBLIC_WITH_CONTACT_PAGE;

  return (
    <RootStyles shouldShowContactPage={shouldShowContactPage}>
      <div>
        <div>
          <p suppressHydrationWarning>{randomFooterPhrase}</p>
          <p>
            {`© ${currentYear} Nathan Thomas `}
            <Link href="https://www.youtube.com/watch?v=dQw4w9WgXcQ">🤌🏻</Link>
          </p>
        </div>
        <nav>
          <div>
            <a
              href="https://github.com/nwthomas"
              aria-label="Link to GitHub"
              rel="noopener noreferrer"
              target="_target"
            >
              {GitHubIconComponent}
            </a>
          </div>
          <div>
            <a
              href="https://www.instagram.com/nwthomas/"
              aria-label="Link to Instagram"
              rel="noopener noreferrer"
              target="_target"
            >
              {InstagramIconComponent}
            </a>
          </div>
          <div>
            <a
              href="https://www.linkedin.com/in/nwthomas-dev/"
              aria-label="Link to LinkedIn"
              rel="noopener noreferrer"
              target="_target"
            >
              {LinkedInIconComponent}
            </a>
          </div>
          <div>
            <a
              href="https://twitter.com/nwthomas_"
              aria-label="Link to Twitter"
              rel="noopener noreferrer"
              target="_target"
            >
              {TwitterIconComponent}
            </a>
          </div>
          {shouldShowContactPage ? (
            <div>
              <a href="/contact" aria-label="Link to contact page">
                {MailIconComponent}
              </a>
            </div>
          ) : null}
        </nav>
      </div>
    </RootStyles>
  );
}

interface StyleProps {
  shouldShowContactPage: boolean;
}

const RootStyles = styled.footer<StyleProps>`
  align-items: center;
  background: ${({ theme }) => theme.colors.backgroundColor};
  border-top: 1px solid ${({ theme }) => theme.colors.bodyBackgroundAccentOne};
  border-bottom: 1px solid
    ${({ theme }) => theme.colors.bodyBackgroundAccentOne};
  bottom: 0;
  display: flex;
  height: ${({ theme }) => theme.appDimensions.mobileFooterHeight};
  justify-content: center;
  padding: 0 ${({ theme }) => theme.appDimensions.appHorizontalGutters};
  position: absolute;
  width: 100%;

  @media only screen and (min-width: ${({ theme }) =>
      theme.breakpoints.mobile}) {
    border-bottom: none;
    height: ${({ theme }) => theme.appDimensions.desktopFooterHeight};
  }

  > div {
    align-items: flex-start;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    max-width: ${({ theme }) => theme.appDimensions.appMaxWidth};
    width: 100%;

    @media only screen and (min-width: ${({ theme }) =>
        theme.breakpoints.mobile}) {
      align-items: flex-end;
      flex-direction: row;
      padding: 0;
    }

    > div:first-child > p:first-child {
      font-style: italic;
    }

    nav {
      align-items: center;
      display: flex;
      height: ${({ theme }) => theme.spaces.large};
      justify-content: flex-start;
      margin-top: ${({ theme }) => theme.spaces.small};
      width: 100%;

      @media only screen and (min-width: ${({ theme }) =>
          theme.breakpoints.mobile}) {
        height: ${({ theme }) => theme.spaces.xLarge};
        justify-content: flex-end;
        margin-top: 0;
        width: 50%;
      }

      > div {
        cursor: pointer;
        margin: 0 6% 0 0;
        transition: opacity ${({ theme }) => theme.transitions.medium}
            ease-in-out,
          transform ${({ theme }) => theme.transitions.medium} ease-in-out;
        width: ${({ theme }) => theme.spaces.medium};

        @media only screen and (min-width: ${({ theme }) =>
            theme.breakpoints.mobile}) {
          margin: 0 3%;
        }

        &:hover {
          opacity: ${({ theme }) => theme.opacity.opacity90};
          transform: translateY(-1px);
        }
      }

      ${({ shouldShowContactPage, theme }) =>
        shouldShowContactPage &&
        css`
          > div:last-child {
            display: none;

            @media only screen and (min-width: ${theme.breakpoints.mobile}) {
              display: block;
              width: 35px;
            }
          }
        `}
    }
  }
`;
