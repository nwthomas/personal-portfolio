import styled from 'styled-components';
import Layout from '../components/Layout';
import PresentationCard from '../components/PresentationCard';
import { presentations } from '../staticAssets';

const PAGE_NAME = 'Presentations';

export default function Presentations() {
  return (
    <Layout pageName={PAGE_NAME} withEmojis withFooter>
      <RootStyles>
        <div>
          <h2>Presentations</h2>
          <div>
            {presentations.map((presentation, i) => {
              return (
                <PresentationCard
                  date={presentation.date}
                  description={presentation.description}
                  key={i}
                  location={presentation.location}
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
    max-width: ${({ theme }) => theme.appDimensions.appMaxWidth};
    padding: ${({ theme }) => theme.spaces.medium} 0 0;
    width: 100%;

    > div {
      margin: ${({ theme }) => theme.spaces.medium} 0;
    }
  }
`;
