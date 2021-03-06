import { useContext } from 'react';
import { useFormik } from 'formik';
import { useMutation } from 'react-query';
import { useStateValue } from 'react-conflux';
import * as Yup from 'yup';
import styled, { css, ThemeContext } from 'styled-components';
import {
  StateContext,
  UPDATE_CONTACT_FORM_VALUES,
  UPDATE_MODAL,
} from '../store';
import Layout from '../components/Layout';
import { sendEmailToServer } from './api/email';
import type { EmailType } from './api/email';

const PAGE_NAME = 'Contact';

const EMAIL_FAILURE = 'Sending Failed - Try Again';
const EMAIL_SENDING = 'Sending Email';
const EMAIL_SUCCESS = 'Email Sent';

function Contact() {
  const { currentTheme } = useContext(ThemeContext);
  const isDarkMode = currentTheme === 'dark';

  const [state, dispatch] = useStateValue(StateContext);

  const { mutate } = useMutation(sendEmailToServer, {
    onSuccess: () => {
      formik.resetForm();
      dispatch({
        type: UPDATE_MODAL,
        payload: {
          isLoading: false,
          message: EMAIL_SUCCESS,
          withButton: true,
        },
      });
    },
    onError: () => {
      dispatch({
        type: UPDATE_MODAL,
        payload: {
          isLoading: false,
          message: EMAIL_FAILURE,
          withButton: true,
        },
      });
    },
  });

  const handleFormSubmit = (emailValues: EmailType) => {
    mutate(emailValues);
    dispatch({
      type: UPDATE_MODAL,
      payload: { isShown: true, isLoading: true, message: EMAIL_SENDING },
    });
  };

  const formik = useFormik({
    initialValues: {
      name: state.contactFormValues.name,
      email: state.contactFormValues.email,
      subject: state.contactFormValues.subject,
      message: state.contactFormValues.message,
      // This field is the honeypot field. If it is sent to the email server,
      // the server will not pass on the email.
      fax: state.contactFormValues.fax,
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

  const handleFormUpdate = (event) => {
    formik.handleChange(event);
    dispatch({
      type: UPDATE_CONTACT_FORM_VALUES,
      payload: {
        [event.target.name]: event.target.value,
      },
    });
  };

  const handleResetForm = (event) => {
    event.preventDefault();
    const resetState = {
      name: '',
      email: '',
      subject: '',
      message: '',
      fax: '',
    };
    formik.resetForm({ values: resetState });
    dispatch({
      type: UPDATE_CONTACT_FORM_VALUES,
      payload: resetState,
    });
  };

  return (
    <Layout pageName={PAGE_NAME} withEmojis withFooter>
      <RootStyles isDarkMode={isDarkMode}>
        <div>
          <h2>What's happening?</h2>
          <div>
            <form onSubmit={formik.handleSubmit}>
              <div>
                <label htmlFor="name">Name</label>
                {formik.touched.name && formik.errors.name ? (
                  <p>{formik.errors.name}</p>
                ) : null}
              </div>
              <input
                name="name"
                type="text"
                onChange={handleFormUpdate}
                onBlur={formik.handleBlur}
                value={formik.values.name}
              />
              <div>
                <label htmlFor="email">Email</label>
                {formik.touched.email && formik.errors.email ? (
                  <p>{formik.errors.email}</p>
                ) : null}
              </div>
              <input
                name="email"
                type="email"
                onChange={handleFormUpdate}
                onBlur={formik.handleBlur}
                value={formik.values.email}
              />
              <div>
                <label htmlFor="subject">Subject</label>
                {formik.touched.subject && formik.errors.subject ? (
                  <p>{formik.errors.subject}</p>
                ) : null}
              </div>
              <input
                name="subject"
                type="subject"
                onChange={handleFormUpdate}
                onBlur={formik.handleBlur}
                value={formik.values.subject}
              />
              <div>
                <label htmlFor="message">Message</label>
                {formik.touched.message && formik.errors.message ? (
                  <p>{formik.errors.message}</p>
                ) : null}
              </div>
              <textarea
                name="message"
                onChange={handleFormUpdate}
                onBlur={formik.handleBlur}
                value={formik.values.message}
              />
              <input
                autoComplete="nope"
                name="fax"
                onChange={handleFormUpdate}
                onBlur={formik.handleBlur}
                tabIndex={-1}
                type="text"
                value={formik.values.fax}
              />
              <div>
                <button type="submit">Send</button>
                <button type="button" onClick={handleResetForm}>
                  Reset
                </button>
              </div>
            </form>
          </div>
        </div>
      </RootStyles>
    </Layout>
  );
}

interface StyleProps {
  isDarkMode: boolean;
}

const RootStyles = styled.main<StyleProps>`
  align-items: center;
  display: flex;
  flex-direction: column;
  overflow-y: hidden;
  padding: ${({ theme }) =>
    `calc(${theme.spaces.medium} * 2) ${theme.appDimensions.appHorizontalGutters}`};
  width: 100%;

  > div {
    max-width: ${({ theme }) => theme.appDimensions.articleMaxWidth};
    width: 100%;

    > h2 {
      margin-bottom: ${({ theme }) => theme.spaces.small};
      text-align: center;
      width: 100%;
    }

    > div {
      display: flex;
      justify-content: space-between;
      width: 100%;

      > form {
        border-radius: ${({ theme }) => theme.borderRadii.micro};
        display: flex;
        justify-content: space-between;
        flex-direction: column;
        width: 100%;

        > div {
          display: flex;
          justify-content: space-between;
          width: 100%;

          > label {
            margin-bottom: ${({ theme }) => theme.spaces.nano};
          }

          > p {
            color: red;
          }

          > button {
            align-items: center;
            display: flex;
            background: ${({ theme }) => theme.colors.textAccentTwo};
            color: ${({ theme }) => theme.colors.textOnColor};
            border: none;
            border-radius: ${({ theme }) => theme.borderRadii.micro};
            cursor: pointer;
            height: ${({ theme }) => theme.spaces.xLarge};
            justify-content: center;
            margin-bottom: ${({ theme }) => theme.spaces.small};
            transition: opacity ${({ theme }) => theme.transitions.medium}
              ease-in-out;
            width: 48%;

            ${({ isDarkMode, theme }) =>
              isDarkMode &&
              css`
                background: ${theme.colorsHex.black};
                color: ${theme.colors.text};
              `}

            &:hover {
              opacity: ${({ theme }) => theme.opacity.opacity70};
            }
          }
        }

        > input {
          background: ${({ theme }) => theme.colors.bodyBackgroundAccentThree};
          border: ${({ theme }) =>
            `1px solid ${theme.colors.bodyBackgroundAccentOne}`};
          border-radius: ${({ theme }) => theme.borderRadii.micro};
          box-shadow: 0;
          color: ${({ theme }) => theme.colorsHex.mineShaft};
          height: ${({ theme }) => theme.spaces.xLarge};
          margin-bottom: ${({ theme }) => theme.spaces.small};
          padding: ${({ theme }) => `0 ${theme.spaces.small}`};
          -webkit-appearance: none;

          &:focus {
            border: 1px solid ${({ theme }) => theme.colors.text};
            outline: none;
          }
        }

        > textarea {
          background: ${({ theme }) => theme.colors.bodyBackgroundAccentThree};
          border: ${({ theme }) =>
            `1px solid ${theme.colors.bodyBackgroundAccentOne}`};
          border-top-left-radius: ${({ theme }) => theme.borderRadii.micro};
          border-top-right-radius: ${({ theme }) => theme.borderRadii.micro};
          border-bottom-left-radius: ${({ theme }) => theme.borderRadii.micro};
          color: ${({ theme }) => theme.colorsHex.mineShaft};
          height: ${({ theme }) => `calc(${theme.spaces.xxLarge} * 3)`};
          margin-bottom: ${({ theme }) => theme.spaces.medium};
          min-width: 100%;
          max-width: 100%;
          padding: ${({ theme }) => `0${theme.spaces.small}`};
          -webkit-appearance: none;

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
            transform: rotate(-1deg);
            width: 70%;
          }
        }
      }
    }
  }
`;

export default Contact;
