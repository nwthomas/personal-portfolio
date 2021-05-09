import styled from 'styled-components';

interface Props {
  isActive?: boolean;
  title?: string;
}

function GraduateIcon({ isActive, title }: Props) {
  return (
    <RootStyles
      isActive={isActive}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 512 512"
    >
      <title>{title || 'Graduation hat icon'}</title>
      <path
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="32"
        d="M32 192L256 64l224 128-224 128L32 192z"
      />
      <path
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="32"
        d="M112 240v128l144 80 144-80V240M480 368V192M256 320v128"
      />
    </RootStyles>
  );
}

interface StyleProps {
  isActive?: boolean;
}

const RootStyles = styled.svg<StyleProps>`
  stroke: ${({ isActive, theme }) =>
    isActive ? theme.colors.textAccentTwo : theme.colors.text};
`;

export default GraduateIcon;
