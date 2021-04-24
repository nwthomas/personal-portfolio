import styled from 'styled-components';
import Layout from '../components/Layout';
import PageTitle from '../components/PageTitle';

const PAGE_NAME = 'Contact';

export default function Contact() {
  return (
    <Layout pageName={PAGE_NAME} withEmojis withFooter>
      <RootStyles>
        <div>
          <PageTitle title="Contact" type="2" />
        </div>
      </RootStyles>
    </Layout>
  );
}

interface StyleProps {
  // finish
}

const RootStyles = styled.main<StyleProps>`
  align-items: center;
  display: flex;
  flex-direction: column;
  padding: ${({ theme }) => theme.spaces.medium} 3%;
  width: 100%;

  > div {
    max-width: ${({ theme }) => theme.breakpoints.ultraWide};
    width: 100%;
  }
`;
