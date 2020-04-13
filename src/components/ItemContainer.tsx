import styled from 'styled-components';

const ItemContainer = styled.div`
  margin-bottom: 50px;

  @media (min-width: 1024px) {
    width: 450px;
  }

  @media (min-width: 1440px) {
    margin-left: 70px;
    width: 100%;
  }
`;

export default ItemContainer;
