import Link from "next/link";
import Layout from "../components/Layout";
import styled from "styled-components";

const pageName = "404";

const phrases = [
  "I looked everywhere",
  "Sorry, I can't find that",
  "It was just here...",
  "That doesn't exist",
  "Check that URL",
];

export async function getStaticProps() {
  const errorPhrase = phrases[Math.floor(Math.random() * phrases.length)];

  return {
    props: {
      errorPhrase,
    },
  };
}

interface Props {
  errorPhrase: string;
}

export default function FourOhFour({ errorPhrase }: Props) {
  return (
    <Layout pageName={pageName} withEmojis withFooter>
      <RootStyles>
        <h4>{`404 - ${errorPhrase}`}</h4>
        <div>
          <Link href="/">
            <p>Go back home</p>
          </Link>
        </div>
      </RootStyles>
    </Layout>
  );
}

const RootStyles = styled.main`
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  max-width: ${({ theme }) => theme.appDimensions.appMaxWidth};
  padding: ${({ theme }) =>
    `${theme.appDimensions.mobileNavbarHeight} ${theme.appDimensions.appHorizontalGutters} 0`};
  width: 100%;

  @media only screen and (min-width: ${({ theme }) =>
      theme.breakpoints.mobile}) {
    padding: ${({ theme }) =>
      `${theme.appDimensions.desktopNavbarHeight} ${theme.appDimensions.appHorizontalGutters} 0`};
  }

  > h4 {
    margin-bottom: ${({ theme }) => theme.spaces.small};
  }

  > div {
    cursor: pointer;

    > p {
      color: ${({ theme }) => theme.colors.textAccentTwo};
    }

    &:hover {
      > span {
        opacity: ${({ theme }) => theme.opacity.opacity80};
      }

      > p {
        color: ${({ theme }) => theme.colors.textAccentThree};
      }
    }
  }
`;
