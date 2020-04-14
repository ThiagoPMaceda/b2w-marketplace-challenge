import React from 'react';
import {
  ItemContainer,
  Title,
  LineThrough,
  Role,
  Paragraph,
} from '../../styles/shared';

const Education = () => {
  return (
    <div>
      <ItemContainer>
        <Title>Education</Title>
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

export default Education;
