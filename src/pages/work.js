import React, { useState } from "react";
import styled from "styled-components";
import { graphql } from "gatsby";
import Layout from "../components/layout";
import Img from "gatsby-image"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons";

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
  background-color: rgb(0,0,0);
  color: white;
  border-radius: 3px;
  font-weight: 700;
  transition: 0.5s ease-in-out;
  outline: none;
  border: 2px solid black;

  :hover {
    text-decoration: none;
    background-color: transparent;
    color: black;
    transition: all 0.5s ease-in-out;
  }
`;

const ColumnContent = styled.div`
  width: 100%;
  height: calc(100vh - 18vw);

  @media screen and (min-width: 640px) {
    height: calc(100vh - 6vw);
  }
`;

const WorkCard = styled.div`
  width: 100%;
  height: 100%;
  box-shadow: 10px 10px 25px rgba(0, 0, 0, 0.2);
  padding: 3rem;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  @media screen and (min-width: 640px){
    padding: 2rem 6rem;
  }

  .left-arrow {
    position: absolute;
    top: 50%;
    left: 10px;
    transform: translate(0%, -50%);
    font-size: 36px;
    cursor: pointer;
  }

  .right-arrow {
    position: absolute;
    top: 50%;
    right: 10px;
    transform: translate(0%, -50%);
    font-size: 36px;
    cursor: pointer;
  }
`;

const PageIndicatorContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  span {
    font-size: 24px;
    transition: font-size 500ms ease-in-out;

  }
  .active {
    font-size: 36px;
    transition: font-size 500ms ease-in-out;
  }
`;

const Work = ({ data: { work } }) => {
  const [activeProject, setActiveProject] = useState(0);

  const {projects} = work

  const moveLeft = () => {
    if(activeProject === 0){
      setActiveProject(projects.length - 1)
    } else {
      setActiveProject(activeProject - 1)
    }
  };

  const moveRight = () => {
    if(activeProject === projects.length - 1){
      setActiveProject(0)
    } else {
      setActiveProject(activeProject + 1)
    }
  };


  return (
    <Layout seo={work.seoMetaTags}>
      <div className="row">
        <div className="col-md-5">
          <h1 className="my-4">Work</h1>
          <div
            dangerouslySetInnerHTML={{
              __html: work.bioNode.childMarkdownRemark.html,
            }}
          />
        </div>
        <div className="col-md-7">
          <ColumnContent>
            <WorkCard>
              <FontAwesomeIcon className="left-arrow" icon={faChevronLeft} onClick={moveLeft} />
              <FontAwesomeIcon className="right-arrow" icon={faChevronRight} onClick={moveRight} />
              <Img
                fluid={projects[activeProject].coverImage.fluid}
                alt={projects[activeProject].coverImage.alt}
              />
              <div className="d-flex justify-content-between align-items-center">
                <h4 className="my-2">{projects[activeProject].projectName}</h4>
                <SiteLink className="my-2" href={projects[activeProject].siteUrl}>
                  View Site
                </SiteLink>
              </div>
              <div
                dangerouslySetInnerHTML={{
                  __html:
                    projects[activeProject].descriptionNode.childMarkdownRemark.html,
                }}
              />
              <TechContainer>
                {projects[activeProject].languages.map((language, id) => {
                  return (
                    <TechBox
                      key={id}
                      bgImg={language.url}
                    />
                  );
                })}
              </TechContainer>
              <PageIndicatorContainer>
                {projects.map((project, indx) => {
                    return(
                      <span className={activeProject === indx ? 'active' : ''}>&bull;</span>
                    )
                })}
              </PageIndicatorContainer>
            </WorkCard>
          </ColumnContent>
        </div>
      </div>
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
                 fluid(
                   maxWidth: 600
                   imgixParams: { fm: "jpg", auto: "compress" }
                 ) {
                   ...GatsbyDatoCmsSizes
                 }
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
