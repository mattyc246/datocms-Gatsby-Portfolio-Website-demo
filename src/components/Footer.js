import React from "react";
import styled from "styled-components";
import { Link } from "gatsby";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";

const StyledFooter = styled.footer`
  width: 100%;
  min-height: 50px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 5vw;
`;

const LinksBox = styled.div`
  display: flex;
  width: 8vw;
  flex-direction: column;
  justify-content: space-between;
`;

const FooterLinks = styled.div`
  display: none;

  @media screen and (min-width: 740px) {
    display: block;
  }
`;

const BackToTop = styled(FontAwesomeIcon)`
  font-size: xx-large;
  cursor: pointer;
`;

const Footer = ({ scrollToRef }) => {
  return (
    <StyledFooter>
      <FooterLinks>
        <h5>Links</h5>
        <LinksBox>
          <Link to="/">About</Link>
          <Link to="/">Work</Link>
          <Link to="/blog">Blog</Link>
          <Link to="/contact">Contact</Link>
        </LinksBox>
      </FooterLinks>
      <small style={{ alignSelf: "flex-end" }}>
        {new Date().getFullYear()} Designed & Created by Matthew Cross
      </small>
      <BackToTop icon={faArrowUp} onClick={scrollToRef} />
    </StyledFooter>
  );
};

export default Footer;
