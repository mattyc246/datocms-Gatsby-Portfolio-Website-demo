import React from 'react'
import { graphql } from 'gatsby'
import Layout from "../components/layout"
import styled from "styled-components";

const Container = styled.div`
  height: 100vh;
  width: 100vw;
  position: relative;
`

const Message = styled.h1`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`

const IndexPage = ({ data }) => (
  <Layout>
    <Container>
      <Message>Coming soon...</Message>
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
