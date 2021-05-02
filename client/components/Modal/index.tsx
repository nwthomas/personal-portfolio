import styled from 'styled-components';
import { useStateValue } from 'react-conflux';
import { StateContext, UPDATE_MODAL } from '../../store';

function Modal() {
  const [state, dispatch] = useStateValue(StateContext);
  const {
    modal: { isLoading, isShown, message, withButton },
  } = state;

  const handleButtonClick = (event) => {
    event.preventDefault();
    dispatch({
      type: UPDATE_MODAL,
      payload: {
        isShown: false,
        message: '',
        withButton: false,
      },
    });
  };

  return (
    <>
      {isShown ? (
        <RootStyles>
          {isLoading ? 'Crazy' : null}
          <p>{message}</p>
          {withButton ? (
            <button onClick={handleButtonClick}>Okay</button>
          ) : null}
        </RootStyles>
      ) : null}
    </>
  );
}

const RootStyles = styled.div`
  align-items: center;
  background: ${({ theme }) => theme.colors.bodyBackground};
  bottom: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0 ${({ theme }) => theme.appDimensions.appHorizontalGutters};
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 100;

  > p {
    font-size: 3rem;
    margin-bottom: ${({ theme }) => theme.spaces.xxLarge};
    text-align: center;
    width: 100%;
  }

  > button {
    align-items: center;
    display: flex;
    background: ${({ theme }) => theme.colors.textAccentTwo};
    color: ${({ theme }) => theme.colors.textOnColor};
    border: ${({ theme }) =>
      `1px solid ${theme.colors.bodyBackgroundAccentOne}`};
    border-radius: ${({ theme }) => theme.borderRadii.medium};
    cursor: pointer;
    height: ${({ theme }) => theme.spaces.xLarge};
    justify-content: center;
    transition: background ${({ theme }) => theme.transitions.short};
    width: 90%;

    &:hover {
      background: ${({ theme }) => theme.colors.textAccentThree};
    }

    &:focus {
      border: 1px solid ${({ theme }) => theme.colors.text};
      outline: none;
    }
  }
`;

export default Modal;
