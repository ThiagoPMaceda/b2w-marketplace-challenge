import styled from 'styled-components';

export const HeaderContainer = styled.div`
  background-color: #333333;
  display: flex;
  height: 50vh;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  @media (min-width: 600px) {
    height: 1020px;
  }

  @media (min-width: 1024px) {
    grid-column: 1;
    grid-row: 1 / span 2;

    height: 750px;
    width: 420px;
  }

  @media (min-width: 1440px) {
    grid-row: 1;
    width: 100%;
  }
`;

export const HeaderImg = styled.img`
  margin-bottom: 15%;
`;

export const HeaderDevName = styled.h1`
  color: white;
  text-align: center;
  letter-spacing: 10px;
`;

export const HeaderDevRole = styled.p`
  color: white;
`;
