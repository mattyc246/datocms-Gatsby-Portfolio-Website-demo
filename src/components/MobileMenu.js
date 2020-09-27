import React, {useState} from 'react';
import styled from "styled-components";
import {Link} from 'gatsby'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faChevronDown} from "@fortawesome/free-solid-svg-icons"
import AniLink from "gatsby-plugin-transition-link/AniLink"

const NavBar = styled.nav`
  width: 100%;
  height: 100vh;
  background-color: white;
  transition: all 2000ms cubic-bezier(0.39, 1.52, 0.46, 0.92);
  position: fixed;
  top: ${(props) => (props.expanded ? "0" : "calc(-100vh + 50px)")};
  box-shadow: 0px 0px 30px rgba(0,0,0,0.1);
  z-index: 999;

  @media screen and (min-width: 640px) {
    display: none;
  }
`;

const NavContents = styled.div`
  height: 100%;
  width: 100%;
  padding: 1rem 1rem 0.5rem 1rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  position: relative;

  h6 {
    position: absolute;
    left: 0px;
    top: 50vh;
    transform: translate(-50%, -50%) rotate(180deg);
    writing-mode: vertical-rl;
    text-orientation: mixed;
    letter-spacing: 5px;
    height: 100vh;
    text-align: center;
  }
`;

const NavLinks = styled.div`
  width: 50%;
  height: 70%;
  display: flex;
  flex-grow: 1;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  transition: opacity 1.5s ease-in-out;

  a{
    color: rgba(0,0,0,0.6);

    :hover {
      color: rgba(0,0,0,1);
      text-decoration: underline;
    }
  }
`;


const StyledIcon = styled(FontAwesomeIcon)`
  color: black;
  font-size: 28px;
  transform: ${props => props.expanded ? 'rotate(180deg)' : 'rotate(0deg)'};
  transition: 1.5s ease-in-out;
  cursor: pointer;
`

const MobileMenu = () => {
  const [expanded, setExpanded] = useState(false)
  return (
    <NavBar expanded={expanded}>
      <NavContents>
        <h6>Matthew Cross - Full Stack Developer</h6>
        <NavLinks expanded={expanded}>
          <AniLink
            cover
            bg="#000000"
            direction="up"
            to="/"
            activeStyle={{ fontWeight: "700", color: "black" }}
          >
            Home
          </AniLink>
          <AniLink
          cover
            bg="#000000"
            direction="left"
            to="/about"
            activeStyle={{ fontWeight: "700", color: "black" }}
          >
            About
          </AniLink>
          <AniLink
            cover
            bg="#000000"
            direction="right"
            to="/work"
            activeStyle={{ fontWeight: "700", color: "black" }}
          >
            Work
          </AniLink>
          <a href="https://blog.matthewcross.me">Blog</a>
          <AniLink
            cover
            bg="#000000"
            direction="down"
            to="/contact"
            activeStyle={{ fontWeight: "700", color: "black" }}
          >
            Contact
          </AniLink>
        </NavLinks>
        <StyledIcon
          expanded={expanded}
          icon={faChevronDown}
          onClick={() => setExpanded(!expanded)}
        />
      </NavContents>
    </NavBar>
  );
}

export default MobileMenu;
