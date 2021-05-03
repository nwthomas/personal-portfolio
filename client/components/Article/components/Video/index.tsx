import styled from 'styled-components';

interface Props {
  height: number;
  title?: string;
  url: string;
  width: number;
}

function Video({ height, title, url, width }: Props) {
  return (
    <RootStyles>
      <div>
        <iframe
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          frameBorder="0"
          height={height}
          src={url}
          title={title}
          width={width}
        />
      </div>
    </RootStyles>
  );
}

const RootStyles = styled.div`
  display: flex;
  height: auto;
  justify-content: center;
  margin: ${({ theme }) => theme.spaces.medium} 0;
  width: 100%;

  > div {
    display: flex;
    justify-content: center;
    max-width: ${({ theme }) => theme.appDimensions.articleMaxWidth};
    width: 100%;
  }
`;

export default Video;
