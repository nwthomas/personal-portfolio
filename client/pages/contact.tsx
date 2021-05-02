import { useContext } from 'react';
import { useFormik } from 'formik';
import { useMutation } from 'react-query';
import * as Yup from 'yup';
import styled, { ThemeContext } from 'styled-components';
import Layout from '../components/Layout';
import PageTitle from '../components/PageTitle';
import Tweet from '../components/Tweet';
import { sendEmailToServer } from './api/email';
import type { EmailType } from './api/email';

const PAGE_NAME = 'Contact';
const EMAIL_PLACEHOLDER = 'Enter email...';
const NAME_PLACEHOLDER = 'Enter name...';
const SUBJECT_PLACEHOLDER = 'Enter subject...';
const MESSAGE_PLACEHOLDER = "What's happening?";

function Contact() {
  const { currentTheme } = useContext(ThemeContext);

  const handleFormSubmit = (emailValues: EmailType) => {
    mutate(emailValues);
  };

  const handleResetForm = (event) => {
    event.preventDefault();
    formik.resetForm();
  };

  const { mutate, isLoading } = useMutation(sendEmailToServer, {
    onSuccess: (data) => {
      formik.resetForm();
    },
    onError: (error) => {
      console.log(error);
    },
    onSettled: () => {
      // finish
    },
  });

  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      subject: '',
      message: '',
      // This field is the honeypot field. If it is sent to the email server,
      // the server will not pass on the email.
      fax: '',
    },
    validationSchema: Yup.object({
      name: Yup.string()
        .max(50, 'Must be 50 characters or less')
        .required('Required'),
      email: Yup.string().email('Invalid email address').required('Required'),
      subject: Yup.string()
        .max(100, 'Must be 100 characters or less')
        .required('Required'),
      message: Yup.string()
        .max(500, 'Must be 500 characters or less')
        .required('Required'),
    }),
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
                name="fax"
                onBlur={formik.handleBlur}
                onChange={formik.handleChange}
                tabIndex={-1}
                type="text"
                value={formik.values.fax}
              />
              <div>
                <button type="submit">{isLoading ? 'Sending' : 'Send'}</button>
                <button type="button" onClick={handleResetForm}>
                  Reset
                </button>
              </div>
            </form>
            <div>
              <p>From when I wrote this page ⬇️</p>
              <Tweet
                currentTheme={currentTheme}
                tweetId="1388010553424060418"
              />
            </div>
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
      display: flex;
      justify-content: space-between;
      width: 100%;

      > form {
        background-color: ${({ theme }) =>
          theme.colors.bodyBackgroundAccentTwo};
        border: ${({ theme }) =>
          `1px solid ${theme.colors.bodyBackgroundAccentOne}`};
        border-radius: ${({ theme }) => theme.borderRadii.small};
        display: flex;
        justify-content: space-between;
        margin: ${({ theme }) => theme.spaces.medium} 0;
        padding: ${({ theme }) => theme.spaces.medium};
        flex-direction: column;
        width: 100%;

        @media only screen and (min-width: ${({ theme }) =>
            theme.breakpoints.desktop}) {
          width: 50%;
        }

        > div {
          display: flex;
          justify-content: space-between;
          width: 100%;

          > p {
            color: red;
          }

          > button {
            align-items: center;
            display: flex;
            background: ${({ theme }) => theme.colors.textAccentTwo};
            color: ${({ theme }) => theme.colors.textOnColor};
            border: ${({ theme }) =>
              `1px solid ${theme.colors.bodyBackgroundAccentOne}`};
            border-radius: ${({ theme }) => theme.borderRadii.medium};
            cursor: pointer;
            height: ${({ theme }) => theme.spaces.xLarge};
            justify-content: center;
            transition: background ${({ theme }) => theme.transitions.short};
            width: 48%;

            &:hover {
              background: ${({ theme }) => theme.colors.textAccentThree};
            }

            &:focus {
              border: 1px solid ${({ theme }) => theme.colors.text};
              outline: none;
            }
          }
        }

        > input {
          background: ${({ theme }) => theme.colors.bodyBackground};
          border: ${({ theme }) =>
            `1px solid ${theme.colors.bodyBackgroundAccentOne}`};
          border-radius: ${({ theme }) => theme.borderRadii.medium};
          color: ${({ theme }) => theme.colors.text};
          height: ${({ theme }) => theme.spaces.xLarge};
          margin-bottom: ${({ theme }) => theme.spaces.small};
          padding: ${({ theme }) => `0 ${theme.spaces.small}`};

          &:focus {
            border: 1px solid ${({ theme }) => theme.colors.text};
            outline: none;
          }
        }

        > textarea {
          background: ${({ theme }) => theme.colors.bodyBackground};
          border: ${({ theme }) =>
            `1px solid ${theme.colors.bodyBackgroundAccentOne}`};
          border-top-left-radius: ${({ theme }) => theme.borderRadii.medium};
          border-top-right-radius: ${({ theme }) => theme.borderRadii.medium};
          border-bottom-left-radius: ${({ theme }) => theme.borderRadii.medium};
          color: ${({ theme }) => theme.colors.text};
          height: ${({ theme }) => `calc(${theme.spaces.xxLarge} * 3)`};
          margin-bottom: ${({ theme }) => theme.spaces.medium};
          min-width: 100%;
          max-width: 100%;
          padding: ${({ theme }) => `0${theme.spaces.small}`};

          &:focus {
            border: 1px solid ${({ theme }) => theme.colors.text};
            outline: none;
          }

          &::placeholder {
            color: ${({ theme }) => theme.colors.text};
          }
        }

        > input:nth-child(9) {
          display: none;
          visibility: hidden;
          border: 1px solid red;
        }
      }

      > div {
        display: none;

        @media only screen and (min-width: ${({ theme }) =>
            theme.breakpoints.desktop}) {
          align-items: center;
          display: flex;
          flex-direction: column;
          padding-top: ${({ theme }) => theme.spaces.jumbo};
          width: 50%;

          > p {
            margin-bottom: ${({ theme }) => theme.spaces.small};
          }

          > div {
            transform: rotate(-2deg);
            width: 70%;
          }
        }
      }
    }
  }
`;

export default Contact;
