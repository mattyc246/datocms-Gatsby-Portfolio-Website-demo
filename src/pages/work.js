import React from "react";
import styled from "styled-components";
import { graphql } from "gatsby";
import Layout from "../components/layout";
import ContentContainer from "../components/ContentContainer";

const TechContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-evenly;
  align-items: center;
`;

const TechBox = styled.div`
  width: 70px;
  height: 70px;
  margin: 1rem;
  background-image: url(${(props) => props.bgImg});
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
`;

const SiteLink = styled.a`
  display: block;
  width: 200px;
  padding: 1rem;
  text-align: center;
  background-color: rgb(128, 255, 212);
  ${(props) => (props.centered ? "margin: 0 auto;" : "")}
  ${(props) => (props.dark ? "color: black;" : "")}
  border-radius: 3px;
  font-weight: 700;
  transition: 0.5s ease-in-out;
  outline: none;

  :hover {
    text-decoration: none;
    box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.5);
    transform: scale(1.05);
    transition: 0.5s ease-in-out;
  }
`;

const Work = ({ data: { work } }) => {
  return (
    <Layout seo={work.seoMetaTags}>
      <ContentContainer dark>
        <h1 className="my-4">Work</h1>
        <div
          dangerouslySetInnerHTML={{
            __html: work.bioNode.childMarkdownRemark.html,
          }}
          data-sal="zoom-in"
          data-sal-duration="500"
        />
      </ContentContainer>
      <ContentContainer>
        {work.projects.map((project, idx) => {
          return (
            <>
              <h4 className="my-2">{project.projectName}</h4>
              <div key={idx} className="row my-4">
                <div className="col-12 col-lg-4">
                  <img
                    src={project.coverImage.url}
                    alt={project.coverImage.alt}
                    width="100%"
                  />
                  <SiteLink className="my-2" href={project.siteUrl} centered>
                    View Site
                  </SiteLink>
                </div>
                <div className="col-12 col-lg-8">
                  <h6 className="my-3">Project Description</h6>
                  <div
                    dangerouslySetInnerHTML={{
                      __html: project.descriptionNode.childMarkdownRemark.html,
                    }}
                    data-sal="slide-left"
                    data-sal-duration="500"
                  />
                  <h6 className="my-3">Technology Used</h6>
                  <TechContainer>
                    {project.languages.map((language, id) => {
                      return (
                        <TechBox
                          key={id}
                          bgImg={language.url}
                          data-sal="zoom-in"
                          data-sal-duration="500"
                        />
                      );
                    })}
                  </TechContainer>
                </div>
              </div>
            </>
          );
        })}
      </ContentContainer>
    </Layout>
  );
};

export default Work;

export const pageQuery = graphql`
  query WorkQuery {
    work: datoCmsWork {
      seoMetaTags {
        ...GatsbyDatoCmsSeoMetaTags
      }
      bioNode {
        childMarkdownRemark {
          html
        }
      }
      projects {
        projectName
        descriptionNode {
          childMarkdownRemark {
            html
          }
        }
        groupProject
        coverImage {
          url
          alt
        }
        languages {
          url
        }
        siteUrl
      }
    }
  }
`;
