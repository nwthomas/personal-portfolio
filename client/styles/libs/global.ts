import { css } from 'styled-components';
import { colors } from './theme';

const GlobalStyle = css`
  * {
    box-sizing: border-box;
    transition: ${({
      theme: {
        transitions: { short },
      },
    }) =>
      `background ${short} ease-in-out, background-color ${short} ease-in-out, color ${short} ease-in-out, fill ${short} ease-in-out, stroke ${short} ease-in-out, border-color ${short} ease-in-out`};
  }

  html {
    font-size: 62.5%;
  }

  html,
  body {
    background-color: ${({ theme }) => theme.colors.bodyBackground};
  }

  html,
  body {
    font-family: 'Work Sans', -apple-system, BlinkMacSystemFont, Segoe UI,
      Roboto, Helvetica, Arial, sans-serif, 'Apple Color Emoji',
      'Segoe UI Emoji', 'Segoe UI Symbol';
  }

  body {
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  /* To change the colors in the colors object, go to styles/libs/theme.ts */
  body.dark {
    --body-bg: ${colors.ebony};
    --body-bg-accent-one: ${colors.onyx};
    --body-bg-accent-two: ${colors.black};
    --body-bg-accent-three: ${colors.white};
    --text: ${colors.titanWhite};
    --text-on-color: ${colors.mineShaft};
    --text-accent-one: ${colors.malibu};
    --text-accent-two: ${colors.melrose};
    --text-accent-three: ${colors.hawkesBlue};
    --theme-icon-bg: ${colors.malibu};
    --transparent: ${colors.transparent};
  }
  body.light {
    --body-bg: ${colors.alabaster};
    --body-bg-accent-one: ${colors.mercury};
    --body-bg-accent-two: ${colors.white};
    --body-bg-accent-three: ${colors.alabaster};
    --text: ${colors.mineShaft};
    --text-on-color: ${colors.titanWhite};
    --text-accent-one: ${colors.mediumPurple};
    --text-accent-two: ${colors.dullLavender};
    --text-accent-three: ${colors.bilobaFlower};
    --theme-icon-bg: ${colors.crusta};
    --transparent: ${colors.transparent};
  }

  h1,
  h2,
  h3,
  h4,
  h5 {
    color: ${({ theme }) => theme.colors.text};
    font-display: swap;
    line-height: 1.8;
  }

  h1 {
    font-family: 'Nanum Pen Script', cursive;
    font-size: 7rem;
  }

  h2 {
    font-size: 3rem;
  }

  h3 {
    color: ${({ theme }) => theme.colors.text};
    font-size: 1.6rem;
    letter-spacing: 4px;
    margin-bottom: ${({ theme }) => theme.spaces.small};
    opacity: ${({ theme }) => theme.opacity.opacity90};
    text-transform: uppercase;
  }

  h4 {
    font-size: 2rem;
    font-weight: bold;
  }

  p,
  label,
  span,
  ul,
  ol,
  input,
  textarea {
    font-display: swap;
    font-size: 1.6rem;
    line-height: 2;
    overflow: break-word;
    font-family: 'Work Sans', -apple-system, BlinkMacSystemFont, Segoe UI,
      Roboto, Helvetica, Arial, sans-serif, 'Apple Color Emoji',
      'Segoe UI Emoji', 'Segoe UI Symbol';

    &::placeholder {
      color: ${({ theme }) => theme.colors.text};
      opacity: ${({ theme }) => theme.opacity.opacity80};
      font-size: 1.6rem;
      line-height: 2;
      font-family: 'Work Sans', -apple-system, BlinkMacSystemFont, Segoe UI,
        Roboto, Helvetica, Arial, sans-serif, 'Apple Color Emoji',
        'Segoe UI Emoji', 'Segoe UI Symbol';
    }
  }

  p,
  label {
    color: ${({ theme }) => theme.colors.text};
  }

  span {
    color: ${({ theme }) => theme.colors.text};
    color: inherit;
  }

  li {
    color: ${({ theme }) => theme.colors.text};
    list-style: circle inside;
  }

  a {
    color: ${({ theme }) => theme.colors.text};
    font-display: swap;
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
