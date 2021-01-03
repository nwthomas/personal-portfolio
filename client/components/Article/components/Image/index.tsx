import Image from "next/image";
import Seperator from "../Seperator";
import styled from "styled-components";

interface Props {
  altText?: string;
  height: number;
  imageUrl: string;
  isHeroImage: boolean;
  isInline: boolean;
  width: number;
}

export default function ArticleImage({
  altText,
  height,
  imageUrl,
  isHeroImage,
  isInline,
  width,
}: Props) {
  const shouldRenderSeperators = !isInline && !isHeroImage;

  return (
    <RootStyles
      isHeroImage={isHeroImage}
      shouldRenderSeperators={shouldRenderSeperators}
    >
      {shouldRenderSeperators ? <Seperator /> : null}
      <figure>
        <Image
          alt={altText || "Image"}
          draggable={false}
          height={height}
          quality={100}
          priority={isHeroImage}
          src={imageUrl}
          width={width}
        />
      </figure>
      {shouldRenderSeperators ? <Seperator /> : null}
    </RootStyles>
  );
}

const RootStyles = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  margin: ${({ shouldRenderSeperators, theme }) =>
      shouldRenderSeperators ? theme.spaces.xxLarge : 0}
    0;
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
