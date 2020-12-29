import styled from "styled-components";

interface Props {
  title?: string;
}

export default function SearchIcon({ title }: Props) {
  return (
    <RootStyles xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
      <title>{title || "Search icon"}</title>
      <path
        d="M221.09 64a157.09 157.09 0 10157.09 157.09A157.1 157.1 0 00221.09 64z"
        fill="none"
        strokeMiterlimit="10"
        strokeWidth="32"
      />
      <path
        d="M338.29 338.29L448 448"
        fill="none"
        strokeLinecap="round"
        strokeMiterlimit="10"
        strokeWidth="32"
      />
    </RootStyles>
  );
}

const RootStyles = styled.svg`
  stroke: ${({ theme }) => theme.colors.text};
`;
