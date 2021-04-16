import styled from 'styled-components';
import Layout from '../../components/Layout';
import PageTitle from '../../components/PageTitle';
import PresentationCard from '../../components/PresentationCard';
import { presentations } from '../../staticAssets';

const PAGE_NAME = 'Presentations';

// These two async functions pre-generate this page at build time as it's using a static resources
//  file and will never change in production.
export async function getStaticProps() {
  return {
    props: {},
  };
}
export async function getStaticPaths() {
  return {
    paths: ['/presentations'],
    fallback: false,
  };
}

export default function Presentations() {
  return (
    <Layout pageName={PAGE_NAME} withEmojis withFooter>
      <RootStyles>
        <PageTitle title="Talks" type="2" />
        <div>
          {presentations.map((presentation, i) => {
            return (
              <PresentationCard
                date={presentation.date}
                description={presentation.description}
                key={i}
                location={presentation.location}
                meetupTitle={presentation.meetupTitle}
                presenters={presentation.presenters}
                title={presentation.title}
                url={presentation.url}
                videoHeight={presentation.videoHeight}
                videoRatio={presentation.videoRatio}
                videoWidth={presentation.videoWidth}
              />
            );
          })}
        </div>
      </RootStyles>
    </Layout>
  );
}

const RootStyles = styled.main`
  align-items: center;
  display: flex;
  flex-direction: column;
  margin-top: ${({ theme }) => theme.spaces.small};
  margin-bottom: ${({ theme }) => theme.spaces.large};
  padding: 0 3%;
  width: 100%;

  > div {
    max-width: ${({ theme }) => theme.breakpoints.ultraWide};
    width: 100%;
  }
`;
