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
      {!isHeroImage ? <Seperator /> : null}
      <figure>
        <Image
          alt={altText || "Image"}
          draggable={false}
          height={650}
          quality={100}
          priority
          src={imageUrl}
          width={1000}
        />
      </figure>
      {!isHeroImage ? <Seperator /> : null}
    </RootStyles>
  );
}

const RootStyles = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  margin: ${({ theme }) => theme.spaces.xxLarge} 0;
  width: 100%;

  > figure {
    height: auto;
    margin: ${({ isHeroImage, theme }) =>
      `${isHeroImage ? 0 : theme.spaces.medium} 0`};
    max-width: ${({ isHeroImage, theme }) =>
      isHeroImage
        ? theme.appDimensions.articleHeroImageMaxWidth
        : theme.appDimensions.articleMaxWidth};
    position: relative;
  }
`;
