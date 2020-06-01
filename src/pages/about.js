import React from "react";
import styled from "styled-components";
import { graphql } from "gatsby";
import { HelmetDatoCms } from "gatsby-source-datocms";
import Img from "gatsby-image";
import Layout from "../components/layout";
import ContentContainer from "../components/ContentContainer";

const TechContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  flex-wrap: wrap;
`;

const Stack = styled.div`
  width: 150px;
  height: 150px;
  margin: 1.5rem;
  background-image: url(${(props) => props.imgUrl});
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
  border-radius: 5px;

  div {
    opacity: 0;
    display: flex;
    transition: 0.3s ease-in-out;
    justify-content: center;
    align-items: center;
    height: 100%;
    width: 100%;
    cursor: pointer;

    :hover {
      opacity: 1;
      background-color: rgba(255, 255, 255, 0.5);
      color: black;
      transition: 0.3s ease-in-out;
    }
  }
`;

const About = ({ data: { about } }) => {
  return (
    <Layout>
      <ContentContainer dark>
        <HelmetDatoCms seo={about.seoMetaTags} />
        <h1 className="my-3">{about.title}</h1>
        <div
          dangerouslySetInnerHTML={{
            __html: about.subtitleNode.childMarkdownRemark.html,
          }}
        />
      </ContentContainer>
      <ContentContainer>
        <Img fluid={about.photo.fluid} />
        <h4 className="my-4">Background</h4>
        <div
          className="sheet__body"
          dangerouslySetInnerHTML={{
            __html: about.bioNode.childMarkdownRemark.html,
          }}
        />
      </ContentContainer>
      <ContentContainer dark>
        <h4 className="my-4">Tech Stack</h4>
        <div
          className="sheet__body"
          dangerouslySetInnerHTML={{
            __html: about.techStackBioNode.childMarkdownRemark.html,
          }}
        />
      </ContentContainer>
      <ContentContainer>
        <TechContainer>
          {
            about.techStacks.map((stack, idx) => {
              return(
                <Stack key={idx} imgUrl={stack.url} >
                  <div><h6 className="text-center">{stack.title}</h6></div>
                </Stack>
              )
            })
          }
        </TechContainer>
      </ContentContainer>
    </Layout>
  );
};

export default About;

export const query = graphql`
  query AboutQuery {
    about: datoCmsAbout {
      seoMetaTags {
        ...GatsbyDatoCmsSeoMetaTags
      }
      title
      subtitleNode {
        childMarkdownRemark {
          html
        }
      }
      photo {
        fluid(maxWidth: 600, imgixParams: { fm: "jpg", auto: "compress" }) {
          ...GatsbyDatoCmsSizes
        }
      }
      bioNode {
        childMarkdownRemark {
          html
        }
      }
      techStackBioNode {
        childMarkdownRemark {
          html
        }
      }
      techStacks {
        url
        title
        alt
      }
    }
  }
`;
