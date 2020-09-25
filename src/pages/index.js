import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/layout";
import styled from "styled-components";
import ContentContainer from "../components/ContentContainer";
import FancyButton from "../components/FancyButton";
import Code from "../images/code.jpg"

const Container = styled.div`
  min-height: calc(100vh - 70px);
  width: 100vw;
  position: relative;
  background-color: black;

  @media screen and (min-width: 740px) {
    background-image: url(${Code});
    background-size: cover;
    background-position: center;
    background-attachment: fixed;
    min-height: calc(100vh - 100px);
    padding-top: 0px;
  }
`;

const Triangle = styled.div`
  width: 0;
  height: 0;
  background-color: transparent;
  border-left: 100vw solid white;
  border-bottom: calc(100vh - 70px) solid transparent;
  position: relative;

  @media screen and (min-width: 740px) {
    border-bottom: calc(100vh - 100px) solid transparent;
  }
`;

const CenterHero = styled.div`
  width: 100vw;
  padding: 0 1rem;
  position: absolute;
  left: 50%;
  top: 55%;
  transform: translate(-50%, -50%);
  z-index: 2;

  @media screen and (min-width: 740px) {
    width: 70vw;
    padding: 0 3rem;
  }
`;

const StyledTitle = styled.h1`
  color: ${(props) => props.color};
  text-align: ${(props) => props.alignment};
  margin: 8rem 0;
`;

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
