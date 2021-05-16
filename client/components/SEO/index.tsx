import Head from 'next/head';
import seoConfig from '../../staticAssets/seoConfig';

const {
  originalTitle,
  currentURL,
  originalImageURL,
  originalDescription,
  social,
  siteName,
} = seoConfig;

interface Props {
  description?: string;
  title?: string;
  imageURL?: string;
  slug: string;
  isArticle?: boolean;
}

function SEO({ description, imageURL, isArticle, title, slug }: Props) {
  return (
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta charSet="utf-8" />
      <meta name="description" content={description || originalDescription} />
      <meta name="image" content={imageURL || originalImageURL} key="ogtitle" />
      {isArticle ? (
        <meta property="og:type" content="article" key="ogtype" />
      ) : (
        <meta property="og:type" content="website" key="ogtype" />
      )}
      <meta
        property="og:title"
        content={title || originalTitle}
        key="ogtitle"
      />
      <meta
        property="og:description"
        content={description || originalDescription}
        key="ogdesc"
      />
      <meta
        property="twitter:card"
        content="summary_large_image"
        key="twcard"
      />
      <meta name="twitter:creator" content={social.twitter} key="twhandle" />
      <meta
        name="twitter:title"
        content={title || originalTitle}
        key="twtitle"
      />
      <meta
        name="twitter:description"
        content={description || originalDescription}
        key="twdescription"
      />
      <meta
        name="twitter:image"
        content={imageURL || originalImageURL}
        key="twimage"
      />
      <meta property="og:url" content={`${currentURL}${slug}`} key="ogurl" />
      <meta
        property="og:image"
        content={imageURL || originalImageURL}
        key="ogimage"
      />
      <meta property="og:site_name" content={siteName} key="ogsitename" />
    </Head>
  );
}

export default SEO;
