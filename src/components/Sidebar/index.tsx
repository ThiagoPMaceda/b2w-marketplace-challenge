import React from 'react';
import Skills from './Skills';
import Profile from './Profile';
import Contact from './Contact';
import styled from 'styled-components';

const SidebarContainer = styled.div`
  background-color: #333333;
  display: flex;
  margin-top: 5px;
  flex-direction: column;
  text-align: center;
  padding-bottom: 80px;

  @media (min-width: 600px) {
    margin-top: 0px;
  }

  @media (min-width: 1024px) {
    grid-column: 1;
    grid-row: 2 / span 2;

    margin-top: -193px;
    width: 420px;
  }
`;

const Sidebar = () => {
  return (
    <SidebarContainer>
      <Profile />
      <Contact />
      <Skills />
    </SidebarContainer>
  );
};

export default Sidebar;
