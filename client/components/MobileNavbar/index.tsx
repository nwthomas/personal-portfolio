import { useRouter } from 'next/router';
import styled from 'styled-components';
import { HomeIcon, PresentationsIcon, MailIcon, PostsIcon } from '../Icons';
import Link, { isActiveLink } from '../Link';

export default function MobileNavbar() {
  const { pathname } = useRouter();

  return (
    <RootStyles>
      <nav>
        <Link href="/" aria-label="Link to home page">
          <div>
            <HomeIcon isActive={isActiveLink(pathname, '/')} />
          </div>
        </Link>
        <Link href="/articles" aria-label="Link to articles page">
          <div>
            <PostsIcon isActive={isActiveLink(pathname, '/articles')} />
          </div>
        </Link>
        <Link href="/presentations" aria-label="Link to presentations page">
          <div>
            <PresentationsIcon
              isActive={isActiveLink(pathname, '/presentations')}
            />
          </div>
        </Link>
        <Link href="/contact" aria-label="Link to contact page">
          <div>
            <MailIcon isActive={isActiveLink(pathname, '/contact')} />
          </div>
        </Link>
      </nav>
    </RootStyles>
  );
}

const RootStyles = styled.div`
  background-color: ${({ theme }) => theme.colors.bodyBackground};
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
    max-width: 450px;
    width: 100%;

    div {
      height: 30px;
      width: 30px;

      &:hover {
        cursor: pointer;
      }
    }
  }
`;
