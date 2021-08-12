import Image from 'next/image';
import styled from 'styled-components';

interface Props {
  isMainTitle?: boolean;
  readingTime?: string;
  titleCopy: string;
}

export default function ArticleTitle({
  isMainTitle,
  readingTime,
  titleCopy,
}: Props) {
  const attribution = 'by Nathan Thomas';
  return (
    <RootStyles isMainTitle={isMainTitle}>
      <div>
        <h2>{titleCopy}</h2>
        {isMainTitle ? (
          <div>
            <div>
              <Image
                alt="Nathan Thomas' avatar"
                draggable={false}
                height={50}
                quality={100}
                priority
                src="/nathan-avatar.jpeg"
                width={50}
              />
            </div>
            <div>
              <p>{attribution}</p>
              {readingTime ? <p>{`${readingTime} read`}</p> : null}
            </div>
          </div>
        ) : null}
      </div>
    </RootStyles>
  );
}

interface StyleProps {
  isMainTitle?: boolean;
}

const RootStyles = styled.div<StyleProps>`
  display: flex;
  justify-content: center;
  margin-bottom: ${({ theme }) => theme.spaces.medium};
  padding: 0 ${({ theme }) => theme.appDimensions.appHorizontalGutters};
  width: 100%;

  > div {
    display: flex;
    flex-direction: column;
    justify-content: 'flex-start';
    max-width: ${({ theme }) => theme.appDimensions.articleMaxWidth};
    width: 100%;

    @media only screen and (min-width: ${({ theme }) =>
        theme.breakpoints.mobile}) {
      justify-content: flex-start;
    }

    > h2 {
      font-size: ${({ isMainTitle }) => (isMainTitle ? '3rem' : '2rem')};
      font-weight: bold;

      @media only screen and (min-width: ${({ theme }) =>
          theme.breakpoints.mobile}) {
        font-size: ${({ isMainTitle }) => (isMainTitle ? '3.5rem' : '2rem')};
      }
    }

    > div {
      align-items: center;
      display: flex;

      > div {
        margin-right: ${({ theme }) => theme.spaces.small};

        img {
          border-radius: ${({ theme }) => theme.borderRadii.infinity};
        }

        > p {
          font-style: italic;
          opacity: ${({ theme }) => theme.opacity.opacity80};
        }
      }
    }
  }
`;
