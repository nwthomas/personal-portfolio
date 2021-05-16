import Image from 'next/image';
import styled from 'styled-components';
import Seperator from '../Seperator';

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
    <RootStyles isHeroImage={isHeroImage}>
      {shouldRenderSeperators ? <Seperator /> : null}
      <figure>
        <Image
          alt={altText || 'Image'}
          draggable={false}
          height={height}
          quality={75}
          priority={isHeroImage}
          src={imageUrl}
          width={width}
        />
      </figure>
      {shouldRenderSeperators ? <Seperator /> : null}
    </RootStyles>
  );
}

interface StyleProps {
  isHeroImage: boolean;
}

const RootStyles = styled.div<StyleProps>`
  align-items: center;
  display: flex;
  flex-direction: column;
  margin: 0;
  width: 100%;

  > figure {
    height: auto;
    margin: ${({ theme }) => `0 0 ${theme.spaces.medium}`};
    max-width: ${({ isHeroImage, theme }) =>
      isHeroImage
        ? theme.appDimensions.articleHeroImageMaxWidth
        : theme.appDimensions.articleMaxWidth};
    position: relative;
  }
`;
