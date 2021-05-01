import { useFormik } from 'formik';
import * as Yup from 'yup';
import styled from 'styled-components';
import Layout from '../components/Layout';
import PageTitle from '../components/PageTitle';

const PAGE_NAME = 'Contact';
const EMAIL_PLACEHOLDER = 'Enter email...';
const NAME_PLACEHOLDER = 'Enter name...';
const SUBJECT_PLACEHOLDER = 'Enter subject...';
const MESSAGE_PLACEHOLDER = "What's on your mind...";

interface FormErrorType {
  name?: string;
  email?: string;
  subject?: string;
  message?: string;
  phone?: string;
}

const handleFormSubmit = (values) => {
  // TODO Post to my email server
  console.log(values);
};

// This is a custom validation function that Formik uses to drop the ban hammer on
// anyone that's trying to get frisky with this code.
const validate = (values) => {
  const errors: FormErrorType = {};

  if (!values.name.length) {
    errors.name = 'Required';
  }
  if (!values.email.length) {
    errors.email = 'Required';
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = 'Invalid email address';
  }
  if (!values.subject.length) {
    errors.subject = 'Required';
  }
  if (!values.message.length) {
    errors.message = 'Required';
  }

  return errors;
};

export default function Contact() {
  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      subject: '',
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
            <h3>Let's Talk</h3>
            <form onSubmit={formik.handleSubmit}>
              <div>
                <label htmlFor="name">Name:</label>
                {formik.touched.name && formik.errors.name ? (
                  <p>{formik.errors.name}</p>
                ) : null}
              </div>
              <input
                name="name"
                type="text"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                placeholder={NAME_PLACEHOLDER}
                value={formik.values.name}
              />
              <div>
                <label htmlFor="email">Email:</label>
                {formik.touched.email && formik.errors.email ? (
                  <p>{formik.errors.email}</p>
                ) : null}
              </div>
              <input
                name="email"
                type="email"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                placeholder={EMAIL_PLACEHOLDER}
                value={formik.values.email}
              />
              <div>
                <label htmlFor="subject">Subject:</label>
                {formik.touched.subject && formik.errors.subject ? (
                  <p>{formik.errors.subject}</p>
                ) : null}
              </div>
              <input
                name="subject"
                type="subject"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                placeholder={SUBJECT_PLACEHOLDER}
                value={formik.values.subject}
              />
              <div>
                <label htmlFor="message">Message:</label>
                {formik.touched.message && formik.errors.message ? (
                  <p>{formik.errors.message}</p>
                ) : null}
              </div>
              <textarea
                name="message"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                placeholder={MESSAGE_PLACEHOLDER}
                value={formik.values.message}
              />
              <input
                autoComplete="nope"
                name="phone"
                onBlur={formik.handleBlur}
                onChange={formik.handleChange}
                tabIndex={-1}
                type="text"
                value={formik.values.phone}
              />
              <div>
                <button type="submit">Send</button>
                <button type="submit">Clear</button>
              </div>
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
      margin: ${({ theme }) => theme.spaces.medium} 0;
      padding: ${({ theme }) => theme.spaces.medium};
      width: 100%;

      > form {
        display: flex;
        flex-direction: column;
        width: 45%;

        > div {
          display: flex;
          justify-content: space-between;
          width: 100%;

          > p {
            color: red;
          }

          > button {
            border-radius: ${({ theme }) => theme.borderRadii.medium};
            cursor: pointer;
            height: ${({ theme }) => theme.spaces.xLarge};
            width: 48%;
          }
        }

        > input {
          border: ${({ theme }) =>
            `1px solid ${theme.colors.bodyBackgroundAccentOne}`};
          border-radius: ${({ theme }) => theme.borderRadii.medium};
          height: ${({ theme }) => theme.spaces.xLarge};
          margin-bottom: ${({ theme }) => theme.spaces.small};
          padding: ${({ theme }) => theme.spaces.small};
        }

        > textarea {
          border: ${({ theme }) =>
            `1px solid ${theme.colors.bodyBackgroundAccentOne}`};
          border-top-left-radius: ${({ theme }) => theme.borderRadii.medium};
          border-top-right-radius: ${({ theme }) => theme.borderRadii.medium};
          border-bottom-left-radius: ${({ theme }) => theme.borderRadii.medium};
          height: ${({ theme }) => `calc(${theme.spaces.xxLarge} * 3)`};
          margin-bottom: ${({ theme }) => theme.spaces.medium};
          min-width: 100%;
          max-width: 100%;
          padding: ${({ theme }) => theme.spaces.small};
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
