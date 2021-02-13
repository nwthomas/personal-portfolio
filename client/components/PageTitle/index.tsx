import styled from "styled-components";

type PageTitleTypeEnum = "1" | "2" | "3" | "4" | "5";

interface Props {
  title: string;
  type: PageTitleTypeEnum;
}

export default function PageTitle({ title, type }: Props) {
  const getHeaderType = (titleString, headerType) => {
    switch (headerType) {
      case "1":
        return <h1>{titleString}</h1>;
      case "2":
        return <h2>{titleString}</h2>;
      case "3":
        return <h3>{titleString}</h3>;
      case "4":
        return <h4>{titleString}</h4>;
      case "5":
        return <h5>{titleString}</h5>;
      default:
        return <h1>{titleString}</h1>;
    }
  };

  return <RootStyles>{getHeaderType(title, type)}</RootStyles>;
}

const RootStyles = styled.div`
  width: 100%;
`;
