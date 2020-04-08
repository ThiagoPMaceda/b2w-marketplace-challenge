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
`;

const WorkExperienceRole = styled.h3`
  text-transform: uppercase;
  color: #000;
`;

const WorkExperienceParagraph = styled.p`
  color: #000;
  line-height: 30px;
  font-weight: bold;
`;

const WorkExperienceItemContainer = styled.div`
  margin-bottom: 50px;
`;

const WorkExperience = () => {
  return (
    <>
      <WorkExperienceTitle>Work Experience</WorkExperienceTitle>
      <WorkExperienceLineThrough />
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
    </>
  );
};

export default WorkExperience;
