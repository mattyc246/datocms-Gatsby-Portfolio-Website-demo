import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/layout";
import styled from "styled-components";
import ContentContainer from "../components/ContentContainer";
import FancyButton from "../components/FancyButton";

const Container = styled.div`
  min-height: calc(100vh - 70px);
  width: 100vw;
  position: relative;
  padding-top: 70px;

  @media screen and (min-width: 740px) {
    min-height: calc(100vh - 100px);
    padding-top: 0px;
  }
`;

const Triangle = styled.div`
  width: 0;
  height: 0;
  background-color: black;
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
      <Container>
        <CenterHero>
          <StyledTitle color={"black"} alignment={"left"}>
            Full Stack
          </StyledTitle>
          <StyledTitle color={"white"} alignment={"right"}>
            Developer
          </StyledTitle>
        </CenterHero>
        <Triangle></Triangle>
      </Container>
      <ContentContainer>
        <h4>Services</h4>
        <div className="row my-4">
          <div className="col-12 col-lg-6">
            <div
              dangerouslySetInnerHTML={{
                __html: datoCmsHome.servicesTextNode.childMarkdownRemark.html,
              }}
            ></div>
            <FancyButton to="/work" className="my-4" centered>
              View Work
            </FancyButton>
          </div>
          <div className="col-12 col-lg-5 offset-lg-1">
            <img
              src={"https://via.placeholder.com/500"}
              alt={"placeholder"}
              width="100%"
            />
          </div>
        </div>
      </ContentContainer>
      <ContentContainer dark>
        <h4>Mission Statement</h4>
        <div className="row my-4">
          <div className="col-12 col-lg-8">
            <div
              dangerouslySetInnerHTML={{
                __html: datoCmsHome.missionStatementNode.childMarkdownRemark.html,
              }}
            ></div>
          </div>
        </div>
      </ContentContainer>
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
    }
  }
`;
