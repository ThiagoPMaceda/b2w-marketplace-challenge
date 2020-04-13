import styled from 'styled-components';

const LineThrough = styled.hr`
  width: 90%;
  height: 1px;
  background-color: #000;
  display: block;
  border: 0;
  border-top: 1px solid #000;
  margin: 0;
  padding: 0;

  @media (min-width: 1440px) {
    width: 80%;
  }
`;

export default LineThrough;
