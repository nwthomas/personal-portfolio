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
          width="560"
          height="315"
          src={url}
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
  padding: ${({ theme }) => theme.spaces.medium};
  width: 100%;

  @media only screen and (min-width: ${({ theme }) =>
      theme.breakpoints.desktop}) {
    align-self: flex-start;
    flex-direction: row;
  }

  > div:last-child {
    margin-left: 0;
    margin-top: ${({ theme }) => theme.spaces.medium};

    @media only screen and (min-width: ${({ theme }) =>
        theme.breakpoints.desktop}) {
      margin-left: ${({ theme }) => theme.spaces.medium};
      margin-top: 0;
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
