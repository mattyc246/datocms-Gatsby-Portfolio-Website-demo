import React from "react";
import styled from "styled-components";
import { graphql } from "gatsby";
import { HelmetDatoCms } from "gatsby-source-datocms";
import Img from "gatsby-image";
import Layout from "../components/layout";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookSquare, faGithubSquare, faInstagramSquare, faLinkedin } from "@fortawesome/free-brands-svg-icons";

const TextContainer = styled.div`
  display: flex;
  height: 100%;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

const FlexyTechs = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  width: 100%;

  img {
    width: 70px;
    margin: 0.5rem;
    transition: all 500ms ease-in-out;

    :hover {
      transform: scale(1.75);
      cursor: pointer;
      transition: all 500ms ease-in-out;
    }
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
      <div className="row">
        <div className="col-md-4">
          <h1 className="text-center">{about.title}</h1>
          <Img className="rounded-circle my-4" fluid={about.photo.fluid} />
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
        </div>
        <div className="col-md-7 offset-md-1">
          <TextContainer>
            <div
              className="sheet__body"
              dangerouslySetInnerHTML={{
                __html: about.bioNode.childMarkdownRemark.html,
              }}
              data-sal="slide-up"
              data-sal-duration="500"
            />
          </TextContainer>
        </div>
      </div>
      <div className="row">
        <div className="col">
          <h6 className="my-3">What I use...</h6>
          <FlexyTechs>
            {about.techStacks.map((stack) => {
              return <img key={stack.id} src={stack.url} alt={stack.title} />;
            })}
          </FlexyTechs>
        </div>
      </div>
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
