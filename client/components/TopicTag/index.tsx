import Link from "next/link";
import styled from "styled-components";

interface Props {
  name: string;
  route?: string;
}

export default function TopicTag({ name, route }: Props) {
  const isInline = !route;

  return (
    <>
      {route ? (
        <Link href={route}>
          <Button>{name}</Button>
        </Link>
      ) : (
        <Button isInline={isInline}>{name}</Button>
      )}
    </>
  );
}

const Button = styled.button`
  background-color: ${({ theme }) => theme.colors.bodyBackgroundAccentOne};
  border: none;
  border-radius: ${({ theme }) => theme.borderRadii.small};
  display: inline-block;
  cursor: pointer;
  padding: 6px 10px;
  text-decoration: none;
  transition: opacity ${({ theme }) => theme.transitions.short};

  &:hover {
    opacity: ${({ isInline, theme }) =>
      isInline ? theme.opacity.opacity100 : theme.opacity.opacity80};
  }

  &:focus {
    outline-color: ${({ theme }) => theme.colors.text};
    outline: ${({ isInline }) => (isInline ? "none" : undefined)};
  }
`;
