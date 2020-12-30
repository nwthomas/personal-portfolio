import styled from "styled-components";

interface Props {
  title?: string;
}

export default function MailIcon({ title }: Props) {
  return (
    <RootStyles xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
      <title>{title || "Mail icon"}</title>
      <rect
        x="48"
        y="96"
        width="416"
        height="320"
        rx="40"
        ry="40"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="32"
      />
      <path
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="32"
        d="M112 160l144 112 144-112"
      />
    </RootStyles>
  );
}

const RootStyles = styled.svg`
  stroke: ${({ theme }) => theme.colors.text};
`;
