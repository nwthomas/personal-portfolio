import Link from "next/link";
import styled from "styled-components";
import { HomeIcon, SearchIcon, MailIcon, PostsIcon } from "../Icons";

export default function AppBar() {
  return (
    <RootStyles>
      <nav>
        <Link href="/">
          <div>
            <HomeIcon />
          </div>
        </Link>
        <Link href="/posts">
          <div>
            <PostsIcon />
          </div>
        </Link>
        <Link href="/search">
          <div>
            <SearchIcon />
          </div>
        </Link>
        <Link href="/contact">
          <div>
            <MailIcon />
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
  padding: 0 3%;
  position: fixed;
  width: 100%;
  z-index: 1;

  @media only screen and (min-width: 600px) {
    display: none;
  }

  nav {
    align-items: center;
    display: flex;
    justify-content: space-around;
    max-width: 600px;
    width: 100%;

    div {
      height: 30px;
      width: 30px;
    }
  }
`;
