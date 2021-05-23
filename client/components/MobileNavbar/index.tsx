import { useRouter } from 'next/router';
import styled from 'styled-components';
import {
  GraduateIcon,
  HomeIcon,
  PresentationsIcon,
  MailIcon,
  PostsIcon,
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
          </a>
        </Link>
        <Link href="/articles" aria-label="Link to articles page">
          <a>
            <PostsIcon isActive={isActiveLink(pathname, '/articles')} />
          </a>
        </Link>
        <Link href="/presentations" aria-label="Link to presentations page">
          <a>
            <PresentationsIcon
              isActive={isActiveLink(pathname, '/presentations')}
            />
          </a>
        </Link>
        <Link href="/nathan-thomas-resume.pdf">
          <a>
            <GraduateIcon />
          </a>
        </Link>
        {shouldShowContactPage ? (
          <Link href="/contact" aria-label="Link to contact page">
            <a>
              <MailIcon isActive={isActiveLink(pathname, '/contact')} />
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
  height: 70px;
  justify-content: center;
  padding: 0 8%;
  position: fixed;
  width: 100%;
  z-index: 1;

  @media only screen and (min-width: 600px) {
    display: none;
  }

  nav {
    align-items: center;
    display: flex;
    justify-content: space-between;
    width: 100%;

    a {
      height: 30px;
      width: 30px;

      &:hover {
        cursor: pointer;
      }
    }
  }
`;
