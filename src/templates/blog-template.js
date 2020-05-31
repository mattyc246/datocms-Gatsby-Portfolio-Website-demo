import React from "react";
import styled from "styled-components";
import { graphql, Link } from "gatsby";
import ReactMarkdown from "react-markdown";
import Layout from "../components/layout";
import ContentContainer from "../components/ContentContainer";
import codeBlock from "../components/codeBlock";
import FancyButton from "../components/FancyButton";

const HeroContent = styled.div`
  a {
    display: block;
    :hover {
      color: white;
      text-decoration: none;
      font-weight: 700;
    }
  }

  img {
    width: 100%;
  }
`;

export default ({ data: { datoCmsBlog } }) => {
  return (
    <Layout seo={datoCmsBlog.seoMetaTags}>
      <ContentContainer dark>
        <HeroContent>
          <Link to="/blog">&larr; Back</Link>
          <img
            src={datoCmsBlog.coverImage.url}
            alt={datoCmsBlog.coverImage.alt}
          />
          <h1 className="my-4">{datoCmsBlog.title}</h1>
          <small>Written By: {datoCmsBlog.writtenBy}</small>
          <p className="my-4">{datoCmsBlog.blurb}</p>
          <small>Published: {datoCmsBlog.publishedDate}</small>
        </HeroContent>
      </ContentContainer>
      <ContentContainer>
        <ReactMarkdown
          source={datoCmsBlog.body}
          renderers={{ code: codeBlock }}
        />
      </ContentContainer>
      <ContentContainer dark>
        <h3>Want to get in touch?</h3>
        <p>If you like this or anything else you see throughout my website and would like to get in touch with me for any reason, you can reach out to me through the link below.</p>
        <FancyButton to="/contact" dark>Get in touch</FancyButton>
      </ContentContainer>
    </Layout>
  );
};

export const pageQuery = graphql`
  query($slug: String!) {
    datoCmsBlog(slug: { eq: $slug }) {
      seoMetaTags {
        ...GatsbyDatoCmsSeoMetaTags
      }
      slug
      title
      body
      blurb
      coverImage {
        url
        alt
      }
      publishedDate
      writtenBy
    }
  }
`;
