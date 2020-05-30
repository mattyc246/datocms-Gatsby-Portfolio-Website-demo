import React from 'react'
import { graphql } from 'gatsby'
import Layout from "../components/layout"
import styled from "styled-components";
import ContentContainer from '../components/ContentContainer'
import FancyButton from '../components/FancyButton'

const Container = styled.div`
  min-height: calc(100vh - 70px);
  width: 100vw;
  position: relative;
  padding-top: 70px;

  @media screen and (min-width: 740px){
    min-height: calc(100vh - 100px);
    padding-top: 0px;
  }
`

const Message = styled.h1`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`

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
`

const StyledTitle = styled.h1`
  color: ${props => props.color};
  text-align: ${props => props.alignment};
  margin: 8rem 0;
`

const IndexPage = ({ data }) => (
  <Layout>
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
          <p>My skillset extends to various areas of Software Development, allowing me to offer a wide variety of services. This can range from a simple website to a full blown web application. Below you can see a list of the services I can offer. If you do have further requests you can get in contact with me to discuss as I am always open to new challenges.</p>
          <ul>
            <li>Static Websites (HTML, CSS, JavaScript, GatsbyJS)</li>
            <li>Single Page Applications (ReactJS)</li>
            <li>
              Web Applications
              <ul>
                <li>Python (Flask, Django)</li>
                <li>Ruby (Ruby on Rails)</li>
                <li>Elixir (Phoenix)</li>
              </ul>
            </li>
            <li>Mobile Applications (React Native)</li>
          </ul>
          <p>You can view a collection of my previous work through this website. Feel free to explore.</p>
          <FancyButton to="/work" className="my-4" centered>View Work</FancyButton>
        </div>
        <div className="col-12 col-lg-5 offset-lg-1">
          <img src={"https://via.placeholder.com/500"} alt={"placeholder"} width="100%" />
        </div>
      </div>
    </ContentContainer>
    <ContentContainer dark>
      <h4>Mission Statement</h4>
      <div className="row my-4">
        <div className="col-12 col-lg-8">
          <p>I strive to produce the best possible content and product I can, I will never leave a job half done.</p>
          <p>I ensure that everything that I produce not only exceeds my own expections, but also that of the client. If I don't believe the end result is going to be 110%, I simply won't take the project.</p>
          <p>Good customer service doesn't just end when the final product is delivered, it goes beyond that and ensuring customers are happy for a long time beyond that.</p>
        </div>
      </div>
    </ContentContainer>
  </Layout>
);

export default IndexPage

export const query = graphql`
  query IndexQuery {
    allDatoCmsWork(sort: { fields: [position], order: ASC }) {
      edges {
        node {
          id
          title
          slug
          excerpt
          coverImage {
            fluid(maxWidth: 450, imgixParams: { fm: "jpg", auto: "compress" }) {
              ...GatsbyDatoCmsSizes
            }
          }
        }
      }
    }
  }
`
