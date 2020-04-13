import React from 'react';
import styled from 'styled-components';

const EducationTitle = styled.h2`
  text-transform: uppercase;
  color: #000;
`;

const EducationLineThrough = styled.hr`
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

const EducationRole = styled.h3`
  text-transform: uppercase;
  color: #000;
`;

const EducationParagraph = styled.p`
  color: #000;
  line-height: 30px;
  font-weight: bold;

  @media (min-width: 1440px) {
    width: 70%;
  }
`;

const EducationItemContainer = styled.div`
  margin-bottom: 50px;

  @media (min-width: 1024px) {
    width: 450px;
  }

  @media (min-width: 1440px) {
    margin-left: 70px;
    width: 100%;
  }
`;

const Education = () => {
  return (
    <div>
      <EducationItemContainer>
        <EducationTitle>Education</EducationTitle>
        <EducationLineThrough />
        <EducationRole>Front End Developer @ Hillson</EducationRole>
        <EducationParagraph> January 2014 - </EducationParagraph>
        <EducationParagraph>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Delectus
          facilis nisi sapiente sit tempore earum maiores illo laudantium quae
          cum nobis, architecto eaque molestias autem rem, error voluptates,
          ipsum est!
        </EducationParagraph>
      </EducationItemContainer>

      <EducationItemContainer>
        <EducationRole>Front End Developer @ Hillson</EducationRole>
        <EducationParagraph> January 2014 - </EducationParagraph>
        <EducationParagraph>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Delectus
          facilis nisi sapiente sit tempore earum maiores illo laudantium quae
          cum nobis, architecto eaque molestias autem rem, error voluptates,
          ipsum est!
        </EducationParagraph>
      </EducationItemContainer>

      <EducationItemContainer>
        <EducationRole>Front End Developer @ Hillson</EducationRole>
        <EducationParagraph> January 2014 - </EducationParagraph>
        <EducationParagraph>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Delectus
          facilis nisi sapiente sit tempore earum maiores illo laudantium quae
          cum nobis, architecto eaque molestias autem rem, error voluptates,
          ipsum est!
        </EducationParagraph>
      </EducationItemContainer>
    </div>
  );
};

export default Education;
