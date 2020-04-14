import React from 'react';
import {
  HeaderContainer,
  HeaderDevName,
  HeaderDevRole,
  HeaderImg,
} from './styles';

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
