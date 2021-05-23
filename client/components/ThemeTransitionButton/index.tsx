import styled from 'styled-components';
import type { ThemeEnum } from '../../styles/libs/theme';

interface Props {
  onClick: () => void;
  themeName: ThemeEnum;
}

export default function ThemeTransitionButton({ onClick, themeName }: Props) {
  // These weren't rendering correctly on iOS unless they were put in a generic
  // <img /> tag
  const MoonIcon = <img alt="Sun icon" src="/moon.png" />;
  const SunIcon = <img alt="Moon icon" src="/sun.png" />;

  const currentIcon = themeName === 'dark' ? MoonIcon : SunIcon;

  function handleOnClick() {
    if (themeName && onClick) {
      onClick();
    }
  }

  return (
    <RootStyles>
      <button onClick={handleOnClick} role="button" tabIndex={0}>
        {themeName ? currentIcon : null}
      </button>
    </RootStyles>
  );
}

const RootStyles = styled.div`
  align-items: center;
  background: ${({ theme }) => theme.colors.transparent};
  cursor: pointer;
  display: flex;
  height: ${({ theme }) => theme.appDimensions.mobileNavbarHeight};
  justify-content: flex-end;
  text-decoration: none;
  transition: opacity ${({ theme }) => theme.transitions.medium} ease-in-out,
    transform ${({ theme }) => theme.transitions.medium} ease-in-out;
  width: 100%;

  &:hover {
    opacity: ${({ theme }) => theme.opacity.opacity90};
    transform: translateY(-1px);
  }

  > button {
    background: none;
    border: none;
    color: inherit;
    cursor: pointer;
    font: inherit;
    height: ${({ theme }) => theme.appDimensions.mobileNavbarHeight};
    padding: 0;
    width: 100%;
  }
`;
