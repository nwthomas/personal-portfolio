import Image from "next/image";
import Seperator from "../Seperator";
import styled from "styled-components";

interface Props {
  altText?: string;
  imageUrl: string;
  isHeroImage?: boolean;
}

export default function ArticleImage({
  altText,
  imageUrl,
  isHeroImage,
}: Props) {
  return (
    <RootStyles isHeroImage={isHeroImage}>
      <Seperator />
      <div>
        <Image
          alt={altText || "Image"}
          draggable={false}
          height={650}
          quality={100}
          priority
          src={imageUrl}
          width={1000}
        />
      </div>
      <Seperator />
    </RootStyles>
  );
}

const RootStyles = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  width: 100%;

  > div {
    height: auto;
    margin: ${({ theme }) => `${theme.spaces.medium} 0`};
    position: relative;
  }
`;
