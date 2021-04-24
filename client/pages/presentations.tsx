import styled from 'styled-components';
import Layout from '../components/Layout';
import PageTitle from '../components/PageTitle';
import PresentationCard from '../components/PresentationCard';
import { presentations } from '../staticAssets';

const PAGE_NAME = 'Presentations';

export default function Presentations() {
  return (
    <Layout pageName={PAGE_NAME} withEmojis withFooter>
      <RootStyles>
        <div>
          <PageTitle title="Presentations" type="2" />
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
        </div>
      </RootStyles>
    </Layout>
  );
}

const RootStyles = styled.main`
  align-items: center;
  display: flex;
  flex-direction: column;
  padding: ${({ theme }) => theme.spaces.medium} 3%;
  width: 100%;

  > div {
    max-width: ${({ theme }) => theme.breakpoints.ultraWide};
    width: 100%;

    > div {
      margin: ${({ theme }) => theme.spaces.medium} 0;
    }
  }
`;
