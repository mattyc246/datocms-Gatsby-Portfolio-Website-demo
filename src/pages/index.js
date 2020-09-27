import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/layout";
import styled from "styled-components";

const IndexPage = ({ data: {datoCmsHome} }) => {
  return (
    <Layout seo={datoCmsHome.seoMetaTags}>
      
    </Layout>
  );
}

export default IndexPage;

export const query = graphql`
  query HomePage {
    datoCmsHome {
      seoMetaTags {
        ...GatsbyDatoCmsSeoMetaTags
      }
      servicesTextNode {
        childMarkdownRemark {
          html
        }
      }
      missionStatementNode {
        childMarkdownRemark {
          html
        }
      }
      servicesImage {
        url
        alt
      }
    }
  }
`;
