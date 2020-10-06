import React, { useState } from "react";
import styled from "styled-components";
import { graphql } from "gatsby";
import Layout from "../components/layout";
import Img from "gatsby-image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";

const TechContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-evenly;
  align-items: center;
  padding: 1rem;

  @media screen and (min-width: 940px) {
    position: absolute;
    left: 2vw;
    bottom: 0;
    width: auto;
    max-width: 40vw;
    background-color: white;
    border-radius: 3px;
  }
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
  background-color: rgb(0, 0, 0);
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

const PageIndicatorContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 0;
  left: 0;

  span {
    font-size: 24px;
    transition: font-size 500ms ease-in-out;
    line-height: 18px;
  }
  .active {
    font-size: 36px;
    transition: font-size 500ms ease-in-out;
  }
`;

const WorkCard = styled.article`
  position: absolute;
  padding: 0vw 2rem;
  padding-top: 15vw;
  top: 0;
  left: 0;
  width: 100%;
  display: block;

  ${(props) => (props.active ? `` : `display: none;`)}

  .shadowy {
    border: 1px solid rgba(0,0,0,0.1);
    border-radius: 3px;
    width: 100%;

    @media screen and (min-width: 940px) {
      width: 95%;
    }
  }

  @media screen and (min-width: 940px) {
    padding-left: 3vw;
    padding-top: 0;
    display: block;

    ${(props) =>
      props.active
        ? `
    opacity: 1;
    width: 100%;
    height: 100%;
    transition: width 0.5s, height 0.5s, opacity 0.5s 0.5s;
  `
        : `
    opacity: 0;
    width: 0!important;
    height: 0!important;
    transition: width 0.5s 0.5s, height 0.5s 0.5s, opacity 0.5s;
  `}
  }
`;

const FloatyBox = styled.div`
  background-color: white;
  border-radius: 3px;
  margin-top: 1rem;
  padding: 1rem;

  @media screen and (min-width: 940px) {
    position: absolute;
    bottom: 5vw;
    right: 3vw;
    width: 40vw;
  }
`;

const CardsContainer = styled.div`
  width: 100%;
  display: block;
  height: calc(100vh - 18vw);
  padding: 1vw 7vw;
  position: relative;

  h1 {
    letter-spacing: 4px;
    font-weight: 700;
    font-size: 38px;
  }

  .left-arrow {
    position: absolute;
    padding: 5px;
    background-color: rgba(255, 255, 255, 0.5);
    top: 50%;
    left: 0px;
    transform: translate(0%, -50%);
    font-size: 48px;
    cursor: pointer;
    z-index: 3;
  }

  .right-arrow {
    position: absolute;
    padding: 5px;
    top: 50%;
    right: 5px;
    transform: translate(0%, -50%);
    font-size: 48px;
    cursor: pointer;
    z-index: 3;
  }

  @media screen and (min-width: 940px) {
    padding: 1vw 3rem;
    height: calc(100vh - 6vw);

    h1 {
      position: absolute;
      bottom: 0;
      right: 0;
      z-index: 3;
      padding: 1rem;
      background-color: white;
      border-radius: 3px;
    }
  }
`;

const Work = ({ data: { work } }) => {
  const [activeProject, setActiveProject] = useState(0);

  const { projects } = work;

  const moveLeft = () => {
    if (activeProject === 0) {
      setActiveProject(projects.length - 1);
    } else {
      setActiveProject(activeProject - 1);
    }
  };

  const moveRight = () => {
    if (activeProject === projects.length - 1) {
      setActiveProject(0);
    } else {
      setActiveProject(activeProject + 1);
    }
  };

  return (
    <Layout seo={work.seoMetaTags}>
      <CardsContainer>
        <h1>Work</h1>
        <PageIndicatorContainer>
          {projects.map((project, indx) => {
            return (
              <span className={activeProject === indx ? "active" : ""}>
                &bull;
              </span>
            );
          })}
        </PageIndicatorContainer>
        <FontAwesomeIcon
          className="left-arrow"
          icon={faChevronLeft}
          onClick={moveLeft}
        />
        <FontAwesomeIcon
          className="right-arrow"
          icon={faChevronRight}
          onClick={moveRight}
        />
        {projects.map((project, idx) => {
          return (
            <WorkCard key={idx} active={activeProject === idx ? true : false}>
              <Img
                className="shadowy"
                fluid={project.coverImage.fluid}
                alt={project.coverImage.alt}
              />
              <FloatyBox>
                <h4 className="my-3">{project.projectName}</h4>
                <div
                  className="my-4"
                  dangerouslySetInnerHTML={{
                    __html: project.descriptionNode.childMarkdownRemark.html,
                  }}
                />
                <SiteLink className="my-4 mx-auto" href={project.siteUrl}>
                  View Site
                </SiteLink>
              </FloatyBox>
              <TechContainer>
                {project.languages.map((language, id) => {
                  return <TechBox key={id} bgImg={language.url} />;
                })}
              </TechContainer>
            </WorkCard>
          );
        })}
      </CardsContainer>
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
          fluid(maxWidth: 1200, imgixParams: { fm: "jpg", auto: "compress" }) {
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
