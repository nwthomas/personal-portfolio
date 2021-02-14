import styled from 'styled-components';

interface Props {
  title?: string;
}

export default function PostsIcon({ title }: Props) {
  return (
    <RootStyles xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
      <title>{title || 'Posts icon'}</title>
      <path
        d="M368 415.86V72a24.07 24.07 0 00-24-24H72a24.07 24.07 0 00-24 24v352a40.12 40.12 0 0040 40h328"
        fill="none"
        strokeLinejoin="round"
        strokeWidth="32"
      />
      <path
        d="M416 464h0a48 48 0 01-48-48V128h72a24 24 0 0124 24v264a48 48 0 01-48 48z"
        fill="none"
        strokeLinejoin="round"
        strokeWidth="32"
      />
      <path
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="32"
        d="M240 128h64M240 192h64M112 256h192M112 320h192M112 384h192"
      />
      <path d="M176 208h-64a16 16 0 01-16-16v-64a16 16 0 0116-16h64a16 16 0 0116 16v64a16 16 0 01-16 16z" />
    </RootStyles>
  );
}

const RootStyles = styled.svg`
  stroke: ${({ theme }) => theme.colors.text};
  fill: ${({ theme }) => theme.colors.text};
`;
