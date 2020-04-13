import React from 'react';
import LineThrough from '../LineThrough';
import Title from '../Title';
import Role from '../Role';
import Paragraph from '../Paragraph';
import ItemContainer from '../ItemContainer';

const WorkExperience = () => {
  return (
    <div>
      <ItemContainer>
        <Title>Work Experience</Title>
        <LineThrough />
        <Role>Front End Developer @ Hillson</Role>
        <Paragraph> January 2014 - </Paragraph>
        <Paragraph>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Delectus
          facilis nisi sapiente sit tempore earum maiores illo laudantium quae
          cum nobis, architecto eaque molestias autem rem, error voluptates,
          ipsum est!
        </Paragraph>
      </ItemContainer>

      <ItemContainer>
        <Role>Front End Developer @ Hillson</Role>
        <Paragraph> January 2014 - </Paragraph>
        <Paragraph>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Delectus
          facilis nisi sapiente sit tempore earum maiores illo laudantium quae
          cum nobis, architecto eaque molestias autem rem, error voluptates,
          ipsum est!
        </Paragraph>
      </ItemContainer>

      <ItemContainer>
        <Role>Front End Developer @ Hillson</Role>
        <Paragraph> January 2014 - </Paragraph>
        <Paragraph>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Delectus
          facilis nisi sapiente sit tempore earum maiores illo laudantium quae
          cum nobis, architecto eaque molestias autem rem, error voluptates,
          ipsum est!
        </Paragraph>
      </ItemContainer>
    </div>
  );
};

export default WorkExperience;
