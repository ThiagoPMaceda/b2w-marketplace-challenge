import React from 'react';
import { SidebarTitle, SidebarContent, SidebarLineThrough } from '../styles';

const Contact = () => {
  return (
    <>
      <SidebarTitle>Contact</SidebarTitle>
      <SidebarLineThrough />
      <SidebarContent>
        123-456-7890 <br /> 012-345-6789
      </SidebarContent>

      <SidebarContent>
        1490 General Woods <br /> Colorado Springs
      </SidebarContent>

      <SidebarContent>
        brianwalker.co <br /> mail@brianwalker.com
      </SidebarContent>
    </>
  );
};

export default Contact;
