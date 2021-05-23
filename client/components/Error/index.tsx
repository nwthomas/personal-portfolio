import Link from 'next/link';
import styled from 'styled-components';
import { getRandomErrorPhrase } from '../../staticAssets';

interface Props {
  errorCode: string;
  errorPhrase?: string;
}

export default function Error({ errorCode, errorPhrase }: Props) {
  const finalErrorPhrase = errorPhrase || getRandomErrorPhrase();
  return (
    <RootStyles>
      <h4>{`${errorCode} - ${finalErrorPhrase}`}</h4>
      <div>
        <Link href="/" passHref>
          <a>Go back home</a>
        </Link>
      </div>
    </RootStyles>
  );
}

const RootStyles = styled.main`
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  margin-top: 35vh;
  max-width: ${({ theme }) => theme.appDimensions.appMaxWidth};
  padding: ${({ theme }) => ` 0 ${theme.appDimensions.appHorizontalGutters}`};
  width: 100%;

  > h4 {
    margin-bottom: ${({ theme }) => theme.spaces.medium};
  }

  > div {
    cursor: pointer;
    transition: opacity ${({ theme }) => theme.transitions.medium} ease-in-out;

    > a {
      display: inline-block;
      color: ${({ theme }) => theme.colors.textAccentTwo};
      transition: color ${({ theme }) => theme.transitions.medium} ease-in-out;

      &:hover {
        color: ${({ theme }) => theme.colors.textAccentThree};
      }
    }
  }
`;
