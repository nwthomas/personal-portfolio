import styled from 'styled-components';
import CategoryTag from '../CategoryTag';
import { CategoryType } from '../../pages/api/categories';

interface Props {
  categories: Array<CategoryType>;
}

function CategoryList({ categories }: Props) {
  return (
    <RootStyles>
      <h3>Article Categories:</h3>
      <div>
        {categories.map(({ title }) => {
          return (
            <div key={title}>
              <CategoryTag name={title} />
            </div>
          );
        })}
      </div>
    </RootStyles>
  );
}

const RootStyles = styled.div`
  > h3 {
    display: flex;
    padding-bottom: ${({ theme }) => theme.spaces.small};
  }

  > div {
    display: flex;
    flex-wrap: wrap;
    width: 100%;

    > div {
      margin-bottom: ${({ theme }) => theme.spaces.small};
      margin-right: ${({ theme }) => theme.spaces.small};
    }
  }
`;

export default CategoryList;
