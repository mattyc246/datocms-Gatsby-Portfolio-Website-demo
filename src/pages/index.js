import React from 'react'
import { graphql } from 'gatsby'
import Layout from "../components/layout"
import styled from "styled-components";

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

  @media screen and (min-width: 740px) {
    border-bottom: calc(100vh - 100px) solid transparent;
  }
`;

const IndexPage = ({ data }) => (
  <Layout>
    <Container>
      <Triangle></Triangle>
    </Container>
  </Layout>
)

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
