import React, {useRef} from "react";
import { StaticQuery, graphql } from "gatsby";
import { HelmetDatoCms } from "gatsby-source-datocms";
import MobileMenu from "./MobileMenu";
import NavBar from "./NavBar";
import Footer from './Footer';

import "../styles/index.scss";

const scrollToRef = (ref) => window.scrollTo(0, ref.current.offsetTop);

const TemplateWrapper = ({ children, seo }) => {
  const topRef = useRef()
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
        <main id="actual-body" ref={topRef}>
          <HelmetDatoCms
            favicon={data.datoCmsSite.faviconMetaTags}
            seo={seo}
          />
          <NavBar />
          <MobileMenu />
          {children}
          <Footer scrollToRef={() => scrollToRef(topRef)} />
        </main>
      )}
    />
  );
};

export default TemplateWrapper;

