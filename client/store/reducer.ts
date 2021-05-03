export const UPDATE_CONTACT_FORM_VALUES = 'UPDATE_CONTACT_FORM_VALUES';
export const UPDATE_MODAL = 'UPDATE_MODAL';

const initialState = {
  contactFormValues: {
    name: '',
    email: '',
    subject: '',
    message: '',
    fax: '',
  },
  modal: {
    isLoading: true,
    isShown: true,
    message: 'Sending Email',
    withButton: false,
  },
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_MODAL:
      return {
        ...state,
        modal: {
          ...state.modal,
          ...action.payload,
        },
      };
    case UPDATE_CONTACT_FORM_VALUES:
      return {
        ...state,
        contactFormValues: {
          ...state.contactFormValues,
          ...action.payload,
        },
      };
    default:
      return state;
  }
};
