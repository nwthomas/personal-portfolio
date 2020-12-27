import { css } from "styled-components";

const GlobalStyle = css`
  * {
    box-sizing: border-box;
    transition: background-color 0.3s, color 0.3s;
  }

  html {
    font-size: 62.5%;
    scroll-behavior: smooth;
  }

  html,
  body {
    background-color: ${({ theme }) => theme.colors.bodyBackground};
    font-family: "Work Sans", -apple-system, BlinkMacSystemFont, Segoe UI,
      Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji",
      "Segoe UI Emoji", "Segoe UI Symbol";
  }

  h1,
  h2,
  h3,
  h4,
  h5 {
    color: ${({ theme }) => theme.colors.text};
    line-height: 1.8;
  }

  h1 {
    font-family: "Nanum Pen Script", cursive;
    font-size: 7rem;
  }

  h2 {
    font-size: 3.5rem;
  }

  h3 {
    color: ${({ theme }) => theme.colors.textAccent};
    font-size: 1.6rem;
    margin-bottom: 30px;
    text-transform: uppercase;
  }

  h4 {
    font-size: 2rem;
  }

  p,
  span {
    font-size: 1.6rem;
    line-height: 1.8;
  }

  p {
    color: ${({ theme }) => theme.colors.text};
  }

  span {
    color: inherit;
  }

  a {
    color: ${({ theme }) => theme.colors.text};
    font-size: 1.6rem;
    text-decoration: none;
  }

  button {
    color: ${({ theme }) => theme.colors.text};
    font-size: 1.6rem;
  }

  img {
    height: auto;
    width: 100%;
  }
`;

export default GlobalStyle;
