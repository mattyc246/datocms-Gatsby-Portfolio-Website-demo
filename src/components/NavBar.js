import React from 'react'
import styled from 'styled-components';
import { Link } from "gatsby";

const Nav = styled.nav`
  width: 100%;
  height: 100px;
  padding: 1rem;
  background-color: orange;
  display: none;
  justify-content: space-between;
  align-items: center;
  background-color: white;
  position: sticky;
  top: 0;
  z-index: 999;

  @media screen and (min-width: 740px){
    display: flex;
  }
`

const NavLinks = styled.div`
  min-width: 40vw;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
`

const StyledLink = styled(Link)`
  color: rgba(0,0,0,0.6);

  :hover {
    color: rgba(0,0,0,1);
    text-decoration: underline;
  }
`

const NavBar = () => {
  return (
    <Nav>
      <h5>Matthew Cross</h5>
      <NavLinks>
        <StyledLink to="/">Home</StyledLink>
        <StyledLink to="/">Home</StyledLink>
        <StyledLink to="/">Home</StyledLink>
        <StyledLink to="/">Home</StyledLink>
      </NavLinks>
    </Nav>
  )
}

export default NavBar;