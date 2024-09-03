import React from 'react';
import { HeaderContainer } from '../styles';
import logo from '../images/logo.png'

const Header = () => {
  return (
    <HeaderContainer>
      <img src={logo}/>
      <h1>전통길</h1>
      <nav>
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </nav>
    </HeaderContainer>
  );
};

export default Header;
