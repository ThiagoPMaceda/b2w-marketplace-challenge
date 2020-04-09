import React from 'react';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import WorkExperience from './components/WorkExperience';
import Education from './components/Education';
import styled, { createGlobalStyle } from 'styled-components';
import { Normalize } from 'styled-normalize';

const GlobalStyle = createGlobalStyle`
  body {
    font-family: 'Montserrat', sans-serif;
  }
`;

const GridWrapper = styled.div`
  display: grid;
  @media (min-width: 600px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

const App = () => {
  return (
    <>
      <Normalize />
      <GlobalStyle />
      <GridWrapper>
        <Header />
        <Sidebar />
        <WorkExperience />
        <Education />
      </GridWrapper>
    </>
  );
};

export default App;
