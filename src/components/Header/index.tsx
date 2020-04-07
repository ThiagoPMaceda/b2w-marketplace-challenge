import React from 'react';
import styled from 'styled-components';

const HeaderContainer = styled.div`
  background-color: #333333;
  display: flex;
  height: 50vh;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const HeaderImg = styled.img`
  margin-bottom: 15%;
`;

const HeaderDevName = styled.h1`
  color: white;
  text-align: center;
  letter-spacing: 10px;
`;

const HeaderDevRole = styled.p`
  color: white;
`;

const Header = () => {
  return (
    <HeaderContainer>
      <HeaderImg src='https://raw.githubusercontent.com/b2w-marketplace/code-challenge/master/files/avatar-dev.png'></HeaderImg>
      <HeaderDevName>
        BRIAN <br /> WALKER
      </HeaderDevName>
      <HeaderDevRole>Web Developer</HeaderDevRole>
    </HeaderContainer>
  );
};

export default Header;
