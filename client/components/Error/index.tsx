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
  justify-content: flex-end;
  margin-top: 35vh;
  max-width: ${({ theme }) => theme.appDimensions.appMaxWidth};
  padding: ${({ theme }) => ` 0 ${theme.appDimensions.appHorizontalGutters}`};
  width: 100%;

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
