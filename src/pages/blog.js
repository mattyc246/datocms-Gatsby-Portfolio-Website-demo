import React from "react";
import styled from "styled-components";
import Layout from "../components/layout";
import ContentContainer from "../components/ContentContainer";
import FancyButton from "../components/FancyButton";
import {Link} from 'gatsby'

const BlogCard = styled.div`
  width: 100%;
  height: 100%;
  border: 1px solid rgba(0, 0, 0, 0.3);
  border-radius: 5px;
  box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.3);
  padding: 2rem;
  background-color: white;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  img {
    width: 100%;
    max-height: 250px;
    object-fit: cover;
  }
`;

const Latest = styled.div`
  border: 1px solid white;
  border-radius: 5px;
  padding: 1.5rem;

  div {
    margin: 10px 0;
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 50px;

    h4, p {
      margin: 0;
    }
  }

  a {
    color: white;

    :hover {
      color: white;
      text-decoration: underline;
    }
  }
`;

const Blog = ({ data: { allDatoCmsBlog, datoCmsBlogpage } }) => {
  return (
    <Layout seo={datoCmsBlogpage.seoMetaTags}>
      <ContentContainer dark>
        <h2 className="my-4">Blog</h2>
        <p>
          A curation of articles and posts written by me. Content can vary from
          personal experiences, my personal opinions to tutorials on how to
          build and implement certain features in code.
        </p>
        {
          allDatoCmsBlog.nodes.length > 0 ? (
            <Latest>
              <div>
                <h4>Latest:</h4>
                <p>{allDatoCmsBlog.nodes[0].title}</p>
                <Link to={`/blog/${allDatoCmsBlog.nodes[0].slug}`}>Read now</Link>
              </div>
            </Latest>
          ) : ""
        }
      </ContentContainer>
      <ContentContainer>
        <div className="row justify-content-center my-4">
          {allDatoCmsBlog.nodes.length === 0 ? (
            <h3 style={{margin: '15vh auto'}}>No posts yet...</h3>
          ) : (
            allDatoCmsBlog.nodes.map((blogPost) => {
              return (
                <div className="col-12 col-md-6 col-lg-4">
                  <BlogCard>
                    <h4>{blogPost.title}</h4>
                    <img
                      src={blogPost.coverImage.url}
                      alt={blogPost.coverImage.alt}
                    />
                    <p className="my-2">{blogPost.blurb}</p>
                    <FancyButton to={`/blog/${blogPost.slug}`}>
                      Read Post
                    </FancyButton>
                  </BlogCard>
                </div>
              );
            })
          )}
        </div>
      </ContentContainer>
    </Layout>
  );
};

export default Blog;

export const query = graphql`
  query BlogPage {
    datoCmsBlogpage {
      seoMetaTags {
        ...GatsbyDatoCmsSeoMetaTags
      }
    }
    allDatoCmsBlog(sort: { order: DESC, fields: id }) {
      nodes {
        blurb
        slug
        title
        coverImage {
          alt
          url
        }
      }
    }
  }
`;
