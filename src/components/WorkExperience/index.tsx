import React from 'react';
import styled from 'styled-components';

const WorkExperienceTitle = styled.h2`
  text-transform: uppercase;
  color: #000;
`;

const WorkExperienceLineThrough = styled.hr`
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

const WorkExperienceRole = styled.h3`
  text-transform: uppercase;
  color: #000;
`;

const WorkExperienceParagraph = styled.p`
  color: #000;
  line-height: 30px;
  font-weight: bold;

  @media (min-width: 1440px) {
    width: 70%;
  }
`;

const WorkExperienceItemContainer = styled.div`
  margin-bottom: 50px;

  @media (min-width: 1024px) {
    width: 450px;
  }

  @media (min-width: 1440px) {
    margin-left: 70px;
    width: 100%;
  }
`;

const WorkExperience = () => {
  return (
    <div>
      <WorkExperienceItemContainer>
        <WorkExperienceTitle>Work Experience</WorkExperienceTitle>
        <WorkExperienceLineThrough />
        <WorkExperienceRole>Front End Developer @ Hillson</WorkExperienceRole>
        <WorkExperienceParagraph> January 2014 - </WorkExperienceParagraph>
        <WorkExperienceParagraph>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Delectus
          facilis nisi sapiente sit tempore earum maiores illo laudantium quae
          cum nobis, architecto eaque molestias autem rem, error voluptates,
          ipsum est!
        </WorkExperienceParagraph>
      </WorkExperienceItemContainer>

      <WorkExperienceItemContainer>
        <WorkExperienceRole>Front End Developer @ Hillson</WorkExperienceRole>
        <WorkExperienceParagraph> January 2014 - </WorkExperienceParagraph>
        <WorkExperienceParagraph>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Delectus
          facilis nisi sapiente sit tempore earum maiores illo laudantium quae
          cum nobis, architecto eaque molestias autem rem, error voluptates,
          ipsum est!
        </WorkExperienceParagraph>
      </WorkExperienceItemContainer>

      <WorkExperienceItemContainer>
        <WorkExperienceRole>Front End Developer @ Hillson</WorkExperienceRole>
        <WorkExperienceParagraph> January 2014 - </WorkExperienceParagraph>
        <WorkExperienceParagraph>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Delectus
          facilis nisi sapiente sit tempore earum maiores illo laudantium quae
          cum nobis, architecto eaque molestias autem rem, error voluptates,
          ipsum est!
        </WorkExperienceParagraph>
      </WorkExperienceItemContainer>
    </div>
  );
};

export default WorkExperience;
