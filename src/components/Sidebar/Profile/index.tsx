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
        27-year old web developer from Colorado Springs With 5+ years of work
        experience in various fields.
      </SidebarContent>
    </>
  );
};

export default Profile;
