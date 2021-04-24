import styled from 'styled-components';
import TopicTag from '../TopicTag';
import { CategoryType } from '../../pages/api/categories';

interface Props {
  categories: Array<CategoryType>;
}

function CategoryList({ categories }: Props) {
  return (
    <RootStyles>
      <h3>Article Categories</h3>
      <div>
        {categories.map(({ title }) => {
          return (
            <div key={title}>
              <TopicTag name={title} />
            </div>
          );
        })}
      </div>
    </RootStyles>
  );
}

const RootStyles = styled.div`
  > div {
    display: flex;
    flex-wrap: wrap;
    margin-bottom: 50px;
    width: 100%;

    > div {
      margin-bottom: ${({ theme }) => theme.spaces.small};
      margin-right: ${({ theme }) => theme.spaces.small};
    }
  }
`;

export default CategoryList;
