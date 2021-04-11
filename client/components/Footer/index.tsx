import Link from 'next/link';
import styled from 'styled-components';
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

  return (
    <RootStyles>
      <div>
        <div>
          <p suppressHydrationWarning>{randomFooterPhrase}</p>
          <p>{`© ${currentYear} Nathan Thomas`}</p>
        </div>
        <nav>
          <div>
            <a href="https://github.com/nwthomas" aria-label="Link to GitHub">
              {GitHubIconComponent}
            </a>
          </div>
          <div>
            <a
              href="https://www.instagram.com/nwthomas/"
              aria-label="Link to Instagram"
            >
              {InstagramIconComponent}
            </a>
          </div>
          <div>
            <a
              href="https://www.linkedin.com/in/nwthomas-dev/"
              aria-label="Link to LinkedIn"
            >
              {LinkedInIconComponent}
            </a>
          </div>
          <div>
            <a
              href="https://twitter.com/nwthomas_"
              aria-label="Link to Twitter"
            >
              {TwitterIconComponent}
            </a>
          </div>
          <Link href="/contact" aria-label="Link to contact page">
            <div>{MailIconComponent}</div>
          </Link>
        </nav>
      </div>
    </RootStyles>
  );
}

const RootStyles = styled.footer`
  align-items: center;
  background-color: ${({ theme }) => theme.colors.backgroundColor};
  border-top: ${({ theme }) => theme.spaces.nano} solid
    ${({ theme }) => theme.colors.bodyBackgroundAccentOne};
  border-bottom: ${({ theme }) => theme.spaces.nano} solid
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
    flex-direction: column-reverse;
    justify-content: space-between;
    max-width: ${({ theme }) => theme.appDimensions.appMaxWidth};
    width: 100%;

    @media only screen and (min-width: ${({ theme }) =>
        theme.breakpoints.mobile}) {
      align-items: center;
      flex-direction: row;
      padding: 0;
    }

    div:first-child {
      font-style: italic;
    }

    nav {
      align-items: center;
      display: flex;
      height: ${({ theme }) => theme.spaces.xxLarge};
      justify-content: flex-start;
      margin-bottom: ${({ theme }) => theme.spaces.small};
      width: 100%;

      @media only screen and (min-width: ${({ theme }) =>
          theme.breakpoints.mobile}) {
        height: ${({ theme }) => theme.spaces.jumbo};
        justify-content: flex-end;
        margin-bottom: 0;
        width: 50%;
      }

      > div {
        cursor: pointer;
        margin: 0 6% 0 0;
        transition: opacity ${({ theme }) => theme.transitions.short};
        width: ${({ theme }) => theme.spaces.medium};

        @media only screen and (min-width: ${({ theme }) =>
            theme.breakpoints.mobile}) {
          margin: 0 3%;
        }

        &:hover {
          opacity: ${({ theme }) => theme.opacity.opacity80};
        }
      }

      > div:last-child {
        display: none;

        @media only screen and (min-width: ${({ theme }) =>
            theme.breakpoints.mobile}) {
          display: block;
          width: 35px;
        }
      }
    }
  }
`;
