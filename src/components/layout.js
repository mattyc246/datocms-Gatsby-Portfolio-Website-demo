import React, {useState} from "react";
import { StaticQuery, graphql } from "gatsby";
import { HelmetDatoCms } from "gatsby-source-datocms";
import MobileMenu from "./MobileMenu";
import NavBar from "./NavBar";

import "../styles/index.scss";

const TemplateWrapper = ({ children, seo }) => {
  const [navOpen, setNavOpen] = useState(true)

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
        <main id="actual-body">
          <HelmetDatoCms
            favicon={data.datoCmsSite.faviconMetaTags}
            seo={seo}
          />
          <NavBar navOpen={navOpen} setNavOpen={setNavOpen} />
          <MobileMenu />
          {children}
        </main>
      )}
    />
  );
};

export default TemplateWrapper;

