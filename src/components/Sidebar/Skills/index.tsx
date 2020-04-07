import React from 'react';
import {
  SidebarTitle,
  SidebarContent,
  SidebarLineThrough,
  Container,
  Background,
  Progress,
} from '../utils/SidebarUtils';

const Skills = () => {
  return (
    <>
      <SidebarTitle>Skills</SidebarTitle>
      <SidebarLineThrough />
      <SidebarContent>FRONT END</SidebarContent>
      <Container>
        <Background />
        <Progress />
      </Container>
      <SidebarContent>BACK END</SidebarContent>
      <Container>
        <Background />
        <Progress />
      </Container>
      <SidebarContent>WRITING</SidebarContent>
      <Container>
        <Background />
        <Progress />
      </Container>
    </>
  );
};

export default Skills;
