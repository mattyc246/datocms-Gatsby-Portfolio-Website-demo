import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/layout";
import styled from "styled-components";

const Content = styled.div`
  width: 100%;
  min-height: calc(100vh - 18vw);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;

  h1 {
    font-size: 15vw;
    font-weight: 700;
    letter-spacing: 2px;
    text-transform: uppercase;

    @media screen and (min-width: 640px) {
      font-size: 11vw;
    }
  }

  h2 {
    font-size: 5vw;
    font-weight: 300;
    letter-spacing: 2px;

    @media screen and (min-width: 640px) {
      font-size: 3vw;
    }
  }

  @media screen and (min-width: 640px) {
    min-height: calc(100vh - 6vw);
  }
`;

const IndexPage = ({ data: {datoCmsHome} }) => {
  return (
    <Layout seo={datoCmsHome.seoMetaTags}>
      <Content>
        <h1>Full <br/>Stack Developer</h1>
        <h2>Design, Develop, Deploy</h2>
      </Content>
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
