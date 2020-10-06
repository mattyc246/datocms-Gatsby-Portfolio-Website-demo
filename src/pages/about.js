import React from "react";
import styled from "styled-components";
import { graphql } from "gatsby";
import { HelmetDatoCms } from "gatsby-source-datocms";
import Img from "gatsby-image";
import Layout from "../components/layout";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookSquare, faGithubSquare, faInstagramSquare, faLinkedin } from "@fortawesome/free-brands-svg-icons";


const Content = styled.div`
  width: 100%;
  display: block;
  height: calc(100vh - 18vw);
  padding: 2vw;
  position: relative;

  h1 {
    padding: 1rem;
    letter-spacing: 4px;
    font-weight: 700;
    font-size: 38px;
  }

  .main-image {
    width: 100%;
    border-radius: 5px;
  }

  @media screen and (min-width: 1024px) {
    height: calc(100vh - 6vw);

    h1 {
      position: absolute;
      top: 0;
      right: 0;
    }

    .main-image {
      width: 70%;
      border-radius: 5px;
    }
  }
`;

const TextContainer = styled.div`
  display: flex;
  padding: 2vw;
  width: 100%;
  flex-direction: column;
  justify-content: center;
  align-items: space-between;
  border-radius: 3px;

  @media screen and (min-width: 1024px) {
    position: absolute;
    top: 5vw;
    background-color: white;
    right: 0;
    width: 30vw;
  }
`;

const FlexyTechs = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  background-color: white;
  border-radius: 3px;

  h6 {
    width: 100%;
  }

  img {
    width: 30px;
    margin: 0.5rem;
    transition: all 500ms ease-in-out;

    :hover {
      transform: scale(1.75);
      cursor: pointer;
      transition: all 500ms ease-in-out;
    }
  }

  @media screen and (min-width: 1024px) {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 50%;
  }
`;

const FlexySocials = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 0.5rem 0;

  a {
    font-size: 38px;
  }
`

const About = ({ data: { about } }) => {
  return (
    <Layout>
      <HelmetDatoCms seo={about.seoMetaTags} />
      <Content>
        <h1>{about.title}</h1>
        <Img className="main-image" fluid={about.photo.fluid} />
        <TextContainer>
          <div
            className="sheet__body"
            dangerouslySetInnerHTML={{
              __html: about.bioNode.childMarkdownRemark.html,
            }}
            data-sal="slide-up"
            data-sal-duration="500"
          />
          <FlexySocials>
            <a href="https://www.facebook.com/mattyc246">
              <FontAwesomeIcon icon={faFacebookSquare} />
            </a>
            <a href="https://www.instagram.com/mattyc246">
              <FontAwesomeIcon icon={faInstagramSquare} />
            </a>
            <a href="https://www.github.com/mattyc246">
              <FontAwesomeIcon icon={faGithubSquare} />
            </a>
            <a href="https://www.linkedin.com/in/matthew-cross">
              <FontAwesomeIcon icon={faLinkedin} />
            </a>
          </FlexySocials>
        </TextContainer>
        <FlexyTechs>
          <h6 className="my-3">What I use...</h6>
          {about.techStacks.map((stack) => {
            return <img key={stack.id} src={stack.url} alt={stack.title} />;
          })}
        </FlexyTechs>
      </Content>
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
               fluid(
                 maxWidth: 600
                 imgixParams: { fm: "jpg", auto: "compress" }
               ) {
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
               originalId
               url
               title
               alt
             }
           }
         }
       `;
