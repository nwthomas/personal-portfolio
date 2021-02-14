import styled from 'styled-components';
import Layout from '../../components/Layout';
import PageTitle from '../../components/PageTitle';

const PAGE_NAME = 'Talks';

export default function Talks() {
  return (
    <Layout pageName={PAGE_NAME} withEmojis withFooter>
      <RootStyles>
        <PageTitle title="Talks" type="2" />
        <div>
          <iframe
            width="560"
            height="315"
            src="https://www.youtube-nocookie.com/embed/GNrQTbIFsG4?start=2909"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </RootStyles>
    </Layout>
  );
}

const RootStyles = styled.main`
  align-items: center;
  display: flex;
  flex-direction: column;
  width: 100%;

  > div {
    max-width: ${({ theme }) => theme.breakpoints.ultraWide};
    width: 100%;
  }
`;
