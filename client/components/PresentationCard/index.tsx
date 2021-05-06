import styled from 'styled-components';
import type { Presentation } from '../../staticAssets';

// Renamed to Props for clarity in error messages
type Props = Presentation;

function PresentationCard({
  date,
  description,
  location,
  meetupTitle,
  presenters,
  title,
  url,
}: Props) {
  return (
    <RootStyles>
      <div>
        <iframe
          src={url}
          title={title}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
      <div>
        <h4>{title}</h4>
        <div>
          <p>{presenters}</p>
          <p>{`${meetupTitle} on ${date} at ${location}`}</p>
        </div>
        <p>{description}</p>
      </div>
    </RootStyles>
  );
}

const RootStyles = styled.div`
  flex-direction: column;
  display: flex;
  background-color: ${({ theme }) => theme.colors.bodyBackgroundAccentTwo};
  border: ${({ theme }) => `1px solid ${theme.colors.bodyBackgroundAccentOne}`};
  border-radius: ${({ theme }) => theme.borderRadii.small};
  overflow: hidden;
  width: 100%;

  @media only screen and (min-width: ${({ theme }) =>
      theme.breakpoints.desktop}) {
    align-self: flex-start;
    flex-direction: row;
  }

  > div:first-child {
    display: inline-block;
    position: relative;
    width: 100%;

    @media only screen and (min-width: ${({ theme }) =>
        theme.breakpoints.desktop}) {
      min-width: 500px;
    }

    &::after {
      padding-top: 56.25%;
      display: block;
      content: '';
    }

    > iframe {
      display: block;
      height: 100%;
      left: 0;
      position: absolute;
      top: 0;
      width: 100%;
    }
  }

  > div:last-child {
    margin-left: 0;
    padding: ${({ theme }) => theme.spaces.medium};

    @media only screen and (min-width: ${({ theme }) =>
        theme.breakpoints.desktop}) {
      margin-top: 0;
      max-width: 700px;
    }

    > div {
      margin: ${({ theme }) => theme.spaces.small} 0;

      > p {
        font-style: italic;
        opacity: ${({ theme }) => theme.opacity.opacity60};
      }
    }

    > p:last-child {
      font-style: normal;
    }
  }
`;

export default PresentationCard;
