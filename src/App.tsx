import React from 'react';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import WorkExperience from './components/WorkExperience';
import Education from './components/Education';
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body {
    font-family: 'Montserrat', sans-serif;
  }
`;

const App = () => {
  return (
    <>
      <GlobalStyle />
      <Header />
      <Sidebar />
      <WorkExperience />
      <Education />
    </>
  );
};

export default App;
