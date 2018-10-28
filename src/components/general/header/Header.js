import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Logo = styled.span`

`;

const NavList = styled.ul`

`;

const NavListItem = styled.li`
list-style-type: none;
display:inline-block
`;

export default function Header(props) {
  return (
    <nav>
      <Logo>KLIFT</Logo>
      {props.children}
      <NavList>
        <NavListItem>
          <Link to="/">Home</Link>
        </NavListItem>
        <NavListItem>
          <Link to="/Demo">Demo</Link>
        </NavListItem>
        <NavListItem>
          <Link to="/About">About</Link>
        </NavListItem>
      </NavList>
    </nav>
  );
}
