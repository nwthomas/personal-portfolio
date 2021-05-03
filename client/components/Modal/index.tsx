import styled, { createGlobalStyle, keyframes } from 'styled-components';
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
        <>
          <LockBodyScroll />
          <RootStyles>
            {isLoading ? (
              <div>
                <BoxOne />
                <BoxTwo />
                <BoxThree />
                <BoxFour />
              </div>
            ) : null}
            <p>{message}</p>
            {withButton ? (
              <button onClick={handleButtonClick}>Okay</button>
            ) : null}
          </RootStyles>
        </>
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

  > div {
    height: 140px;
    width: 140px;
    margin: 0 0 ${({ theme }) => theme.spaces.medium};
    position: relative;

    > div {
      height: 40px;
      width: 40px;
      position: absolute;
      border-radius: 10px;
    }
  }

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
    max-width: ${({ theme }) => theme.appDimensions.modalMaxWidth};
    transition: background ${({ theme }) => theme.transitions.short};
    width: 100%;

    &:hover {
      background: ${({ theme }) => theme.colors.textAccentThree};
    }

    &:focus {
      border: 1px solid ${({ theme }) => theme.colors.text};
      outline: none;
    }
  }
`;

const moveTLBL = keyframes`
  0% {top: 0; left: 0;}
  50% {top: 50px; left: 50px; transform: rotate(90deg); opacity: 0.9;}
  100% {top: 100px; left: 0; transform: rotate(180deg);}
`;

const moveBRTR = keyframes`
  0% {top: 100px; left: 100px;}
  50% {top: 50px; left: 50px; transform: rotate(-90deg); opacity: 0.9;}
  100% {top: 0; left: 100px; transform: rotate(-180deg);}
`;

const moveBLTL = keyframes`
  0% {top: 100px; left: 0;}
  50% {top: 50px; left: 50px; transform: rotate(90deg); opacity: 0.9}
  100% {top: 0; left: 0; transform: rotate(180deg);}
`;

const moveTRBR = keyframes`
  0% {top: 0; left: 100px;}
  50% {top: 50px; left: 50px; transform: rotate(-90deg); opacity: 0.9}
  100% {top: 100px; left: 100px; transform: rotate(-180deg);}
`;

const BoxOne = styled.div`
  background: ${({ theme }) => theme.colors.textAccentOne};
  z-index: 5;
  animation-name: ${moveTLBL};
  animation-duration: 1.2s;
  animation-iteration-count: infinite;
  animation-timing-function: ease-in-out;
  animation-direction: alternate;
  animation-fill-mode: backwards;
  animation-delay: 0.1s;
`;

const BoxTwo = styled.div`
  background: ${({ theme }) => theme.colors.textAccentOne};
  animation-name: ${moveBRTR};
  animation-duration: 1.2s;
  animation-iteration-count: infinite;
  animation-timing-function: ease-in-out;
  animation-direction: alternate;
  animation-fill-mode: backwards;
  animation-delay: 0.1s;
`;

const BoxThree = styled.div`
  background: ${({ theme }) => theme.colors.textAccentThree};
  animation-name: ${moveBLTL};
  animation-duration: 1.2s;
  animation-iteration-count: infinite;
  animation-timing-function: ease-in-out;
  animation-direction: alternate;
  animation-fill-mode: backwards;
  animation-delay: 0.1s;
`;

const BoxFour = styled.div`
  background: ${({ theme }) => theme.colors.textAccentThree};
  animation-name: ${moveTRBR};
  animation-duration: 1.2s;
  animation-iteration-count: infinite;
  animation-timing-function: ease-in-out;
  animation-direction: alternate;
  animation-fill-mode: backwards;
  animation-delay: 0.1s;
`;

const LockBodyScroll = createGlobalStyle`
  body {
    overflow-y: hidden;
    position: fixed;
  }
`;

export default Modal;
