import Link from "next/link";
import styled from "styled-components";
import { HomeIcon, SearchIcon, MailIcon, PostsIcon } from "../Icons";

export default function MobileNavbar() {
  return (
    <RootStyles>
      <nav>
        <Link href="/">
          <div>
            <HomeIcon title="Link to home page" />
          </div>
        </Link>
        <Link href="/posts">
          <div>
            <PostsIcon title="Link to posts page" />
          </div>
        </Link>
        <Link href="/search">
          <div>
            <SearchIcon title="Link to search page" />
          </div>
        </Link>
        <Link href="/contact">
          <div>
            <MailIcon title="Link to contact page" />
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
    }
  }
`;
