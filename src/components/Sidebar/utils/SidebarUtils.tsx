import styled from 'styled-components';

export const SidebarTitle = styled.h2`
  text-transform: uppercase;
  color: #fff;
`;

export const SidebarContent = styled.p`
  color: #fff;
  line-height: 30px;
`;

export const SidebarLineThrough = styled.hr`
  width: 150px;
  height: 1px;
  background-color: #fff;
  display: block;
  border: 0;
  border-top: 1px solid #ccc;
  margin: 1em auto;
  padding: 0;
`;

export const Container = styled.div`
  height: 15px;
  width: 70%;
  position: relative;
  margin: 0 auto;
`;

const BaseBox = styled.div`
  height: 100%;
  position: absolute;
  left: 0;
  top: 0;
  border: solid 1px #fff
  transition: width 10s ease-in-out;
`;

export const Background = styled(BaseBox)`
  background: grey;
  width: 100%;
`;

export const Progress = styled(BaseBox)`
  background: #fff;
  width: 70%;
`;
