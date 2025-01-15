import React from 'react';
import styled from "styled-components";
import Logo from './Logo';
import HeaderComponent from './HeaderComponent';

const Header = () => {
  return (
    <Wrapper>
      <Logo />
      <HeaderComponent />
    </Wrapper>
  );
};

const Wrapper = styled.section`
  display: flex;
  align-items: center;
  background-color: #EBEAFF;
  position: sticky;
  top: 2px;
  height:120px;
   
`;
export default Header;

