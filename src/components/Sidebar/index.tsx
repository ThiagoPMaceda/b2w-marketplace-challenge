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
