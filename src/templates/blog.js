import React from 'react'
import Slider from 'react-slick'
import { HelmetDatoCms } from 'gatsby-source-datocms'
import Img from 'gatsby-image'
import { graphql } from 'gatsby'
import Layout from "../components/layout"

export default ({ data }) => (
  <Layout>
    <article className="sheet">
      <HelmetDatoCms seo={data.datoCmsBlog.seoMetaTags} />
      <div className="sheet__inner">
        <h1 className="sheet__title">{data.datoCmsBlog.title}</h1>
        <p className="sheet__lead">{data.datoCmsBlog.blurb}</p>
        <div
          className="sheet__body"
          dangerouslySetInnerHTML={{
            __html: data.datoCmsBlog.bodyNode.childMarkdownRemark.html,
          }}
        />
        <div className="sheet__gallery">
          <Img fluid={data.datoCmsBlog.coverImage.fluid} />
        </div>
      </div>
    </article>
  </Layout>
)

export const query = graphql`
  query BlogQuery($slug: String!) {
    datoCmsBlog(slug: { eq: $slug }) {
      seoMetaTags {
        ...GatsbyDatoCmsSeoMetaTags
      }
      title
      blurb
      bodyNode {
        childMarkdownRemark {
          html
        }
      }
      coverImage {
        url
        fluid(maxWidth: 600, imgixParams: { fm: "jpg", auto: "compress" }) {
          ...GatsbyDatoCmsSizes
        }
      }
    }
  }
`
