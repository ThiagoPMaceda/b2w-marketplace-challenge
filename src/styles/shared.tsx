import styled from 'styled-components';

export const ItemContainer = styled.div`
  margin-bottom: 50px;

  @media (min-width: 1024px) {
    width: 450px;
  }

  @media (min-width: 1440px) {
    margin-left: 70px;
    width: 100%;
  }
`;

export const LineThrough = styled.hr`
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

export const Paragraph = styled.p`
  color: #000;
  line-height: 30px;
  font-weight: bold;

  @media (min-width: 1440px) {
    width: 70%;
  }
`;

export const Role = styled.h3`
  text-transform: uppercase;
  color: #000;
`;

export const Title = styled.h2`
  text-transform: uppercase;
  color: #000;
`;
