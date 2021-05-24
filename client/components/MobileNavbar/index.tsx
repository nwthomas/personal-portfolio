import { useRouter } from 'next/router';
import styled from 'styled-components';
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
          <a>
            <HomeIcon isActive={isActiveLink(pathname, '/')} />
            <p>Home</p>
          </a>
        </Link>
        <Link href="/articles" aria-label="Link to articles page">
          <a>
            <ArticlesIcon isActive={isActiveLink(pathname, '/articles')} />
            <p>Articles</p>
          </a>
        </Link>
        <Link href="/presentations" aria-label="Link to presentations page">
          <a>
            <PresentationsIcon
              isActive={isActiveLink(pathname, '/presentations')}
            />
            <p>Presentations</p>
          </a>
        </Link>
        <Link href="/nathan-thomas-resume.pdf">
          <a>
            <ResumeIcon />
            <p>Resume</p>
          </a>
        </Link>
        {shouldShowContactPage ? (
          <Link href="/contact" aria-label="Link to contact page">
            <a>
              <MailIcon isActive={isActiveLink(pathname, '/contact')} />
              <p>Contact</p>
            </a>
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

    > a {
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
      }
    }
  }
`;
