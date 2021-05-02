import React from 'react';
import styled from 'styled-components';

interface Props {
  isShown: boolean;
  message: string;
}

function Toast({ isShown, message }: Props) {
  return (
    <React.Fragment>
      {isShown ? (
        <RootStyles>
          <p>{message}</p>
        </RootStyles>
      ) : null}
    </React.Fragment>
  );
}

const RootStyles = styled.div`
  background: ${({ theme }) => theme.colorsHex.pictonBlue};
  bottom: 0;
  left: 50%;
  margin-bottom: ${({ theme }) => theme.spaces.medium};
  padding: ${({ theme }) => `${theme.spaces.nano} ${theme.spaces.small}`};
  position: fixed;
  transform: translateX(-50%);

  > p {
    background: ${({ theme }) => theme.colorsHex.pictonBlue};
    color: ${({ theme }) => theme.colorsHex.titanWhite};
  }
`;

export default Toast;
