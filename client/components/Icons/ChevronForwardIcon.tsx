import styled from 'styled-components';

const RootStyles = styled.svg`
  stroke: ${({ theme }) => theme.colors.textAccentTwo};
`;

interface Props {
  title?: string;
}

function ChevronForwardIcon({ title }: Props) {
  return (
    <RootStyles xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
      <title>{title || 'Chevron forward'}</title>
      <path
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="48"
        d="M184 112l144 144-144 144"
      />
    </RootStyles>
  );
}

export default ChevronForwardIcon;
