import Head from 'next/head';

interface Props {
  description: string;
  title: string;
  image: string;
  slug: string;
  article: string;
}

function SEO({ description, title, image, slug, article }: Props) {
  return (
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta charSet="utf-8" />
    </Head>
  );
}

export default SEO;
