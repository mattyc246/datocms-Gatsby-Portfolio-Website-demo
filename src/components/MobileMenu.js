import React, {useState} from 'react';
import styled from "styled-components";
import {Link} from 'gatsby'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faArrowAltCircleDown} from "@fortawesome/free-regular-svg-icons"

const NavBar = styled.nav`
  width: 100%;
  height: ${props => props.expanded ? '100vh' : '75px'};
  background-color: ${props => props.expanded ? 'aquamarine' : 'white'};
  transition: 1.5s ease-in-out;
  position: fixed;
  z-index: 999;

  @media screen and (min-width: 740px) {
    display: none;
  }
`

const NavContents = styled.div`
  height: 100%;
  width: 100%;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  position: relative;
`;

const NavLinks = styled.div`
  visibility: ${(props) => (props.expanded ? "visible" : "hidden")};
  width: 50%;
  height: 70%;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  opacity: ${props => props.expanded ? '1' : '0'};
  transition: opacity 1.5s ease-in-out;
`;

const StyledLink = styled(Link)`
  color: rgba(0,0,0,0.6);

  :hover {
    color: rgba(0,0,0,1);
    text-decoration: underline;
  }
`

const StyledIcon = styled(props => <FontAwesomeIcon {...props} />)`
  color: black;
  transform: ${props => props.expanded ? 'rotate(180deg)' : 'rotate(0deg)'};
  transition: 1.5s ease-in-out;
`

const MobileMenu = () => {
  const [expanded, setExpanded] = useState(false)
  return (
    <NavBar expanded={expanded}>
      <NavContents>
        <h5>Matthew Cross</h5>
        <NavLinks expanded={expanded}>
          <StyledLink to="/" activeStyle={{fontWeight: '700', color: 'black'}}>Home</StyledLink>
          <StyledLink to="/" activeStyle={{fontWeight: '700', color: 'black'}}>About</StyledLink>
          <StyledLink to="/" activeStyle={{fontWeight: '700', color: 'black'}}>Work</StyledLink>
          <StyledLink to="/" activeStyle={{fontWeight: '700', color: 'black'}}>Blog</StyledLink>
          <StyledLink to="/" activeStyle={{fontWeight: '700', color: 'black'}}>Contact</StyledLink>
        </NavLinks>
        <StyledIcon expanded={expanded} icon={faArrowAltCircleDown} onClick={() => setExpanded(!expanded)}/>
      </NavContents>
    </NavBar>
  )
}

export default MobileMenu;
