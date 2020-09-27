import React, {useState} from "react";
import styled from "styled-components"
import { StaticQuery, graphql } from "gatsby";
import { HelmetDatoCms } from "gatsby-source-datocms";
import MobileMenu from "./MobileMenu";
import NavBar from "./NavBar";

import "../styles/index.scss";

const Content = styled.main`
  width: 100vw;
  min-height: 100vh;
  padding: 15vw 3vw 3vw 3vw;
  transition: width 1200ms cubic-bezier(0.39, 1.52, 0.46, 0.92);

  p {
    text-align: justify;
  }

  @media screen and (min-width: 640px) {
    width: ${(props) => (props.navOpen ? "calc(100vw - 250px)" : "100vw")};
    padding: 3vw 7vw 3vw 7vw;
  }
`;

const SideName = styled.p`
  display: none;
  position: fixed;
  left: 1.5vw;
  top: 50%;
  height: 100vh;
  transform: translate(0%, -50%) rotate(180deg);
  writing-mode: vertical-rl;
  text-orientation: mixed;
  letter-spacing: 7px;
  text-align: center!important;
  text-transform: uppercase;
  font-weight: 800;

  @media screen and (min-width: 640px){
    display: block;
  }
`;

const TemplateWrapper = ({ children, seo }) => {
  const [navOpen, setNavOpen] = useState(false)

  return (
    <StaticQuery
      query={graphql`
        query LayoutQuery {
          datoCmsSite {
            globalSeo {
              siteName
            }
            faviconMetaTags {
              ...GatsbyDatoCmsFaviconMetaTags
            }
          }
        }
      `}
      render={data => (
        <>
          <NavBar navOpen={navOpen} setNavOpen={setNavOpen} />
          <MobileMenu />
          <HelmetDatoCms
            favicon={data.datoCmsSite.faviconMetaTags}
            seo={seo}
          />
          <Content navOpen={navOpen}>
            <SideName>Matthew Cross - Full Stack Developer</SideName>
            {children}
          </Content>
        </>
      )}
    />
  );
};

export default TemplateWrapper;

