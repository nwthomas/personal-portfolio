import Link from "next/link";
import styled from "styled-components";

interface Props {
  name: string;
  route: string;
}

export default function TopicTag({ name, route }: Props) {
  return (
    <Link href={route}>
      <Button>{name}</Button>
    </Link>
  );
}

const Button = styled.button`
  background-color: ${({ theme }) => theme.colors.bodyBackgroundAccentOne};
  border: none;
  border-radius: ${({ theme }) => theme.borderRadii.small};
  display: inline-block;
  cursor: pointer;
  margin-bottom: ${({ theme }) => theme.spaces.small};
  margin-right: 2%;
  padding: 6px 10px;
  text-decoration: none;
  transition: opacity ${({ theme }) => theme.transitions.short};
  -webkit-appearance: none;
  -moz-appearance: none;

  &:hover {
    opacity: ${({ theme }) => theme.opacity.opacity80};
  }

  &:focus {
    outline-color: ${({ theme }) => theme.colors.text};
  }
`;
