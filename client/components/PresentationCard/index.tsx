import styled from 'styled-components';

interface Props {
  description: string;
  presenters: string;
  title: string;
  url: string;
}

function PresentationCard({ description, presenters, title, url }: Props) {
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
        <p>{presenters}</p>
        <p>{description}</p>
      </div>
    </RootStyles>
  );
}

const RootStyles = styled.div`
  align-self: flex-start;
  display: flex;
  background-color: ${({ theme }) => theme.colors.bodyBackgroundAccentTwo};
  border: ${({ theme }) => `1px solid ${theme.colors.bodyBackgroundAccentOne}`};
  border-radius: ${({ theme }) => theme.borderRadii.small};
  padding: ${({ theme }) => theme.spaces.medium};
  width: 100%;
`;

export default PresentationCard;
