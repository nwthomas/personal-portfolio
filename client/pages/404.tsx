import Layout from '../components/Layout';
import Error from '../components/Error';
import { getRandomErrorPhrase } from '../staticAssets';

export async function getStaticProps() {
  const errorPhrase = getRandomErrorPhrase();

  return {
    props: {
      errorPhrase,
    },
  };
}

interface Props {
  errorPhrase: string;
}

function FourOhFour({ errorPhrase }: Props) {
  return (
    <Layout pageName="Oops" withEmojis>
      <Error errorCode="404" errorPhrase={errorPhrase} />
    </Layout>
  );
}

export default FourOhFour;
