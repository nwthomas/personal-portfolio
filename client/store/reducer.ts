export const UPDATE_CONTACT_FORM_VALUES = 'UPDATE_CONTACT_FORM_VALUES';
export const UPDATE_MODAL = 'UPDATE_MODAL';
export const UPDATE_SEARCH_FORM_VALUE = 'UPDATE_SEARCH_FORM_VALUE';

const initialState = {
  contactFormValues: {
    name: '',
    email: '',
    subject: '',
    message: '',
    fax: '',
  },
  modal: {
    isLoading: false,
    isShown: false,
    message: '',
    withButton: false,
  },
  searchFormValues: {
    value: '',
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
    case UPDATE_SEARCH_FORM_VALUE:
      return {
        ...state,
        searchFormValue: {
          ...action.payload,
        },
      };
    default:
      return state;
  }
};
