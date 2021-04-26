import { Formik } from 'formik';
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
          <div></div>
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
    max-width: ${({ theme }) => theme.appDimensions.appMaxWidth};
    width: 100%;

    > div {
      background-color: ${({ theme }) => theme.colors.bodyBackgroundAccentTwo};
      border: ${({ theme }) =>
        `1px solid ${theme.colors.bodyBackgroundAccentOne}`};
      border-radius: ${({ theme }) => theme.borderRadii.small};
      height: 50vh;
      width: 100%;
    }
  }
`;
