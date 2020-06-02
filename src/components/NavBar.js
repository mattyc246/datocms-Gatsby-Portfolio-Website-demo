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
        <StyledLink to="/" activeStyle={{fontWeight: '700', color: 'black'}}>Home</StyledLink>
        <StyledLink to="/about" activeStyle={{fontWeight: '700', color: 'black'}}>About</StyledLink>
        <StyledLink to="/work" activeStyle={{fontWeight: '700', color: 'black'}}>Work</StyledLink>
        <StyledLink to="/blog" activeStyle={{fontWeight: '700', color: 'black'}}>Blog</StyledLink>
        <StyledLink to="/contact" activeStyle={{fontWeight: '700', color: 'black'}}>Contact</StyledLink>
      </NavLinks>
    </Nav>
  )
}

export default NavBar;
