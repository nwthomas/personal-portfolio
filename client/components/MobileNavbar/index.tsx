import { useRouter } from 'next/router';
import styled, { css } from 'styled-components';
import {
  ArticlesIcon,
  ResumeIcon,
  HomeIcon,
  PresentationsIcon,
  MailIcon,
} from '../Icons';
import Link, { isActiveLink } from '../Link';

export default function MobileNavbar() {
  const { pathname } = useRouter();
  const shouldShowContactPage = !!process.env.NEXT_PUBLIC_WITH_CONTACT_PAGE;

  return (
    <RootStyles>
      <nav>
        <Link href="/" aria-label="Link to home page">
          <MobileNavbarLinkStyles isActive={isActiveLink(pathname, '/')}>
            <HomeIcon isActive={isActiveLink(pathname, '/')} />
            <p>Home</p>
          </MobileNavbarLinkStyles>
        </Link>
        <Link href="/articles" aria-label="Link to articles page">
          <MobileNavbarLinkStyles
            isActive={isActiveLink(pathname, '/articles')}
          >
            <ArticlesIcon isActive={isActiveLink(pathname, '/articles')} />
            <p>Articles</p>
          </MobileNavbarLinkStyles>
        </Link>
        <Link href="/presentations" aria-label="Link to presentations page">
          <MobileNavbarLinkStyles
            isActive={isActiveLink(pathname, '/presentations')}
          >
            <PresentationsIcon
              isActive={isActiveLink(pathname, '/presentations')}
            />
            <p>Presentations</p>
          </MobileNavbarLinkStyles>
        </Link>
        <Link href="/nathan-thomas-resume.pdf">
          <MobileNavbarLinkStyles>
            <ResumeIcon />
            <p>Resume</p>
          </MobileNavbarLinkStyles>
        </Link>
        {shouldShowContactPage ? (
          <Link href="/contact" aria-label="Link to contact page">
            <MobileNavbarLinkStyles
              isActive={isActiveLink(pathname, '/contact')}
            >
              <MailIcon isActive={isActiveLink(pathname, '/contact')} />
              <p>Contact</p>
            </MobileNavbarLinkStyles>
          </Link>
        ) : null}
      </nav>
    </RootStyles>
  );
}

const RootStyles = styled.div`
  background: ${({ theme }) => theme.colors.bodyBackground};
  bottom: 0;
  display: flex;
  height: ${({ theme }) => theme.appDimensions.mobileNavbarHeight};
  justify-content: center;
  padding: 0 ${({ theme }) => theme.appDimensions.appHorizontalGutters};
  position: fixed;
  width: 100%;
  z-index: 1;

  @media only screen and (min-width: ${({ theme }) =>
      theme.breakpoints.mobile}) {
    display: none;
  }

  nav {
    align-items: center;
    display: flex;
    justify-content: space-between;
    padding-top: ${({ theme }) => theme.spaces.micro};
    width: 100%;
  }
`;

interface MobileNavbarLinkStylesProps {
  isActive?: boolean;
}

const MobileNavbarLinkStyles = styled.a<MobileNavbarLinkStylesProps>`
  align-items: center;
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: center;

  &:hover {
    cursor: pointer;
  }

  > svg {
    height: 30px;
    width: 30px;
  }

  > p {
    font-size: 1rem;
    user-select: none;

    ${({ isActive, theme }) =>
      isActive &&
      css`
        color: ${theme.colors.textAccentTwo};
      `}
  }
`;
