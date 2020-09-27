import React from 'react'
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import AniLink from "gatsby-plugin-transition-link/AniLink";

const FloatyNav = styled.header`
  display: none;
  background-color: rgba(255, 255, 255, 1);
  padding: 0.5rem 1rem;
  width: 250px;
  height: 100vh;
  position: fixed;
  right: ${(props) => (props.navOpen ? "0px" : "-250px")};
  top: 0px;
  flex-direction: column;
  align-items: center;
  transition: right 1200ms cubic-bezier(0.39, 1.52, 0.46, 0.92);
  box-shadow: 15px 15px 25px rgba(0,0,0,0.2);

  small {
    opacity: ${(props) => (props.navOpen ? "0" : "1")};
    font-size: 13px;
    transition: opacity 1200ms cubic-bezier(0.39, 1.52, 0.46, 0.92);
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
  @keyframes bouncyArrow {
    0% {right: 150px;}
    100% {right: 140px;}
  }

  font-size: 34px;
  cursor: pointer;
  color: black;
  opacity: 0.6;
  margin-bottom: 0.2rem;
  ${(props) =>
    props.navOpen ? "transform: rotate(180deg);" : "transform: rotate(0deg);"}
  transition: all 1200ms cubic-bezier(0.39, 1.52, 0.46, 0.92);
  position: relative;
  animation: bouncyArrow 1000ms infinite alternate-reverse;

  :hover {
    opacity: 1;
  }
`;

const FlexyLinks = styled.nav`
  flex-grow: 1;
  padding: 2rem 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;

  a {
    font-weight: 400;
    text-decoration: none;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-transform: uppercase;

    span {
      display: block;
      width: 0;
      height: 2px;
      background-color: black;
    }

    :hover {
      span {
        width: 100%;
        transition: width 400ms cubic-bezier(0.39, 1.52, 0.46, 0.92);
      }
    }
  }
`;

const NavBar = ({navOpen, setNavOpen}) => {
  return (
    <FloatyNav navOpen={navOpen}>
      <StyledIcon
        navOpen={navOpen}
        icon={faChevronLeft}
        onClick={() => setNavOpen(!navOpen)}
      />
      <p>Navigation</p>
      <FlexyLinks>
        <AniLink cover bg="#000000" direction="up" to="/">
          <span></span>Home<span></span>
        </AniLink>
        <AniLink cover bg="#000000" direction="right" to="/about">
          <span></span>About<span></span>
        </AniLink>
        <AniLink cover bg="#000000" direction="left" to="/work">
          <span></span>Work<span></span>
        </AniLink>
        <a href="https://blog.matthewcross.me">
          <span></span>Blog<span></span>
        </a>
        <AniLink cover bg="#000000" direction="down" to="/contact">
          <span></span>Contact<span></span>
        </AniLink>
      </FlexyLinks>
    </FloatyNav>
  );
}

export default NavBar;
