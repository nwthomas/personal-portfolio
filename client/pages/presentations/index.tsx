import styled from 'styled-components';
import Layout from '../../components/Layout';
import PageTitle from '../../components/PageTitle';
import PresentationCard from '../../components/PresentationCard';

const PAGE_NAME = 'Presentations';

export default function Presentations() {
  return (
    <Layout pageName={PAGE_NAME} withEmojis withFooter>
      <RootStyles>
        <PageTitle title="Talks" type="2" />
        <div>
          <PresentationCard
            description="React Native at Shopify"
            presenters="Nathan Thomas & Justine De Caires"
            title="React Native at Shopify"
            url="https://www.youtube-nocookie.com/embed/GNrQTbIFsG4?start=2909"
          />
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
