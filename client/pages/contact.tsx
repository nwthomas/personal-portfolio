import { useFormik } from 'formik';
import styled from 'styled-components';
import Layout from '../components/Layout';
import PageTitle from '../components/PageTitle';

const PAGE_NAME = 'Contact';

interface FormType {
  firstName?: string;
  lastName?: string;
  email?: string;
  message?: string;
  phone?: string;
}

const handleFormSubmit = (values) => {
  console.log(values);
};

// This is a custom validation function that Formik uses to drop the ban hammer on
// anyone that's trying to get frisky with this code.
const validate = (values) => {
  const errors: FormType = {};

  if (!values.firstName.length) {
    errors.firstName = 'Required';
  }
  if (!values.lastName.length) {
    errors.lastName = 'Required';
  }
  if (!values.email.length) {
    errors.email = 'Required';
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = 'Invalid email address';
  }
  if (!values.message.length) {
    errors.message = 'Required';
  }

  return errors;
};

export default function Contact() {
  const formik = useFormik({
    initialValues: {
      firstName: '',
      lastName: '',
      email: '',
      message: '',
      // This field is the honeypot field. If it is sent to the email server,
      // the server will not pass on the email.
      phone: '',
    },
    validate,
    onSubmit: handleFormSubmit,
  });

  return (
    <Layout pageName={PAGE_NAME} withEmojis withFooter>
      <RootStyles>
        <div>
          <PageTitle title="Contact" type="2" />
          <div>
            <form onSubmit={formik.handleSubmit}>
              <div>
                <label htmlFor="firstName">First Name:</label>
                {formik.touched.firstName && formik.errors.firstName ? (
                  <p>{formik.errors.firstName}</p>
                ) : null}
              </div>
              <input
                id="firstName"
                name="firstName"
                type="text"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.firstName}
              />
              <div>
                <label htmlFor="lastName">Last Name:</label>
                {formik.touched.lastName && formik.errors.lastName ? (
                  <p>{formik.errors.lastName}</p>
                ) : null}
              </div>
              <input
                id="lastName"
                name="lastName"
                type="text"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.lastName}
              />
              <div>
                <label htmlFor="email">Email:</label>
                {formik.touched.email && formik.errors.email ? (
                  <p>{formik.errors.email}</p>
                ) : null}
              </div>
              <input
                id="email"
                name="email"
                type="email"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.email}
              />
              <div>
                <label htmlFor="message">Message:</label>
                {formik.touched.message && formik.errors.message ? (
                  <p>{formik.errors.message}</p>
                ) : null}
              </div>
              <input
                id="message"
                name="message"
                type="text"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.message}
              />
              <input
                autoComplete="nope"
                id="phone"
                name="phone"
                onBlur={formik.handleBlur}
                onChange={formik.handleChange}
                tabIndex={-1}
                type="text"
                value={formik.values.phone}
              />
              <button type="submit">Send</button>
            </form>
          </div>
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
      height: 40vh;
      margin: ${({ theme }) => theme.spaces.medium} 0;
      width: 100%;

      > form {
        display: flex;
        flex-direction: column;
        width: 50%;

        > div {
          display: flex;
          justify-content: space-between;
          width: 100%;

          > p {
            color: red;
          }
        }

        > input:nth-child(9) {
          display: none;
          visibility: hidden;
          border: 1px solid red;
        }
      }
    }
  }
`;
