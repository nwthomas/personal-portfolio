import styled from "styled-components";

export default function ArticleSeperator() {
  return (
    <RootStyles>
      <div />
      <div />
      <div />
    </RootStyles>
  );
}

const RootStyles = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;

  > div {
    background-color: ${({ theme }) => theme.colors.textAccent};
    border-radius: ${({ theme }) => theme.borderRadii.infinity};
    height: ${({ theme }) => theme.spaces.micro};
    width: ${({ theme }) => theme.spaces.micro};
  }

  > div:nth-child(2) {
    margin: 0 ${({ theme }) => theme.spaces.small};
  }
`;