import styled from 'styled-components';

interface Props {
  isActive?: boolean;
  title?: string;
}

export default function PresentationsIcon({ isActive, title }: Props) {
  return (
    <RootStyles
      isActive={isActive}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 512 512"
    >
      <title>{title || 'Presentations icon'}</title>
      <rect
        x="48"
        y="80"
        width="416"
        height="272"
        rx="32"
        ry="32"
        fill="none"
        strokeLinejoin="round"
        strokeWidth="32"
      />
      <path
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="32"
        d="M256 416v-64M256 80V48M400 464l-32-112M112 464l32-112"
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
  fill: ${({ isActive, theme }) =>
    isActive ? theme.colors.textAccentTwo : theme.colors.text};
`;
