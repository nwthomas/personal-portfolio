import Link from 'next/link';
import styled from 'styled-components';

interface Props {
  errorCode: string;
  errorPhrase: string;
}

export default function Error({ errorCode, errorPhrase }: Props) {
  return (
    <RootStyles>
      <h4>{`${errorCode} - ${errorPhrase}`}</h4>
      <div>
        <Link href="/">
          <p>Go back home</p>
        </Link>
      </div>
    </RootStyles>
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
