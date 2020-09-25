import React from 'react'
import styled from 'styled-components';
import { Link } from "gatsby";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronUp } from '@fortawesome/free-solid-svg-icons';

const FloatyNav = styled.header`
  display: none;
  background-color: rgba(255, 255, 255, 1);
  padding: 0.5rem 1rem;
  width: 17.5vw;
  height: 650px;
  position: fixed;
  bottom: ${(props) => (props.navOpen ? "-20px" : "-575px")};
  right: 20px;
  flex-direction: column;
  align-items: center;
  transition: bottom 1200ms cubic-bezier(0.215, 0.61, 0.355, 1);

  small {
    opacity: ${(props) => (props.navOpen ? "0" : "1")};
    font-size: 13px;
    transition: opacity 1200ms cubic-bezier(0.215, 0.61, 0.355, 1);
  }

  p {
    position: absolute;
    margin: 0;
    right: 5px;
    top: 50%;
    transform: translate(0%, -50%);
    writing-mode: vertical-rl;
    text-orientation: mixed;
    letter-spacing: 10px;
    font-size: 18px;
  }

  @media screen and (min-width: 640px) {
    display: flex;
  }
`;

const StyledIcon = styled(FontAwesomeIcon)`
  font-size: 34px;
  cursor: pointer;
  color: black;
  opacity: 0.6;
  margin-bottom: 0.2rem;
  ${props => props.navOpen ? "transform: rotate(180deg);" : "transform: rotate(0deg);"}
  transition: transform 1200ms cubic-bezier(0.215, 0.610, 0.355, 1);

  :hover {
    transition: all 1000ms ease-in-out;
    opacity: 1;
  }
`

const FlexyLinks = styled.nav`
  flex-grow: 1;
  padding: 2rem 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
`

const NavBar = ({navOpen, setNavOpen}) => {
  return (
    <FloatyNav navOpen={navOpen}>
      <StyledIcon navOpen={navOpen} icon={faChevronUp} onClick={() => setNavOpen(!navOpen)}/>
      <small>Navigator</small>
      <p>Navigator</p>
      <FlexyLinks>
        <Link>Home</Link>
        <Link>About</Link>
        <Link>Work</Link>
        <Link>Blog</Link>
        <Link>Contact</Link>
      </FlexyLinks>
    </FloatyNav>
  )
}

export default NavBar;
