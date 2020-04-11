import React from 'react';
import {
  SidebarTitle,
  SidebarContent,
  SidebarLineThrough,
} from '../utils/SidebarUtils';

const Profile = () => {
  return (
    <>
      <SidebarTitle>Profile</SidebarTitle>
      <SidebarLineThrough />
      <SidebarContent>
        27-year old web developer <br /> from Colorado Springs With <br /> 5+
        years of work experience <br /> in various fields.
      </SidebarContent>
    </>
  );
};

export default Profile;
