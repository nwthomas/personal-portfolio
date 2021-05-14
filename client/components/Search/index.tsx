import styled from 'styled-components';
import { useFormik } from 'formik';
import * as Yup from 'yup';

const SEARCH_PLACEHOLDER_VALUE = 'Search...';

interface Props {
  initialFormValue: string;
  onFormUpdate: (newFormValue: string) => void;
}

function Search({ initialFormValue, onFormUpdate }: Props) {
  const formik = useFormik({
    initialValues: {
      searchFormValue: 'initialFormValue',
    },
    validationSchema: Yup.object({
      value: Yup.string(),
    }),
    onSubmit: function noop() {},
  });

  function handleSearchInputUpdate(event) {
    formik.handleChange(event);
    console.log(formik.errors);
    // onFormUpdate(event.target.value);
  }

  return (
    <RootStyles>
      <input
        name="searchForm"
        onChange={handleSearchInputUpdate}
        placeholder={SEARCH_PLACEHOLDER_VALUE}
        type="text"
        value={formik.values.searchFormValue}
      />
    </RootStyles>
  );
}

const RootStyles = styled.div`
  height: ${({ theme }) => theme.spaces.large};
  width: ${({ theme }) => `calc(${theme.spaces.jumbo} * 3)`};

  > input {
    background: ${({ theme }) => theme.colors.bodyBackgroundAccentTwo};
    border-radius: ${({ theme }) => theme.borderRadii.infinity};
    border: 1px solid ${({ theme }) => theme.colors.bodyBackgroundAccentOne};
    color: ${({ theme }) => theme.colors.text};
    height: 100%;
    padding: ${({ theme }) => theme.spaces.small};
    width: 100%;

    &:focus {
      border: 1px solid ${({ theme }) => theme.colors.textAccentOne};
      outline: none;
    }
  }
`;

export default Search;
