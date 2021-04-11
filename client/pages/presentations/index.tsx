import styled from 'styled-components';
import Layout from '../../components/Layout';
import PageTitle from '../../components/PageTitle';
import PresentationCard from '../../components/PresentationCard';
import { presentations } from '../../staticAssets';

const PAGE_NAME = 'Presentations';

export default function Presentations() {
  return (
    <Layout pageName={PAGE_NAME} withEmojis withFooter>
      <RootStyles>
        <PageTitle title="Talks" type="2" />
        <div>
          {presentations.map((presentation) => {
            return (
              <PresentationCard
                date={presentation.date}
                description={presentation.description}
                location={presentation.location}
                meetupTitle={presentation.meetupTitle}
                presenters={presentation.presenters}
                title={presentation.title}
                url={presentation.url}
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
