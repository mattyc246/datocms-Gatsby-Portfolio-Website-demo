import React from "react";
import styled from "styled-components"
import { graphql } from 'gatsby'
import Layout from "../components/layout";
import ContentContainer from "../components/ContentContainer";
import ContactForm from "../components/ContactForm";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faFacebookSquare, faLinkedin, faGithubSquare, faInstagram } from "@fortawesome/free-brands-svg-icons"

const IconLink = styled.a`
  display: flex;
  width: 50%;
  margin: 0 auto;
  justify-content: space-between;
  align-items: center;
  text-align: center;
  color: rgba(0, 0, 0, 0.6);
  text-decoration: none;

  :hover {
    color: rgba(0,0,0,0.8);
    text-decoration: none;
  }

  svg {
    font-size: 36px;
    margin-right: 2rem;
  }
`;

const Contact = ({ data: { datoCmsContact } }) => {
  return (
    <Layout seo={datoCmsContact.seoMetaTags}>
      <ContentContainer>
        <h1>Contact me</h1>
        <div className="row">
          <div className="col-12 col-lg-7">
            <ContactForm />
          </div>
          <div className="col-12 col-lg-5">
            <h5 className="my-4 text-center">Email me directly</h5>
            <IconLink href="mailto:mattjcrossdev@gmail.com">
              <FontAwesomeIcon icon={faEnvelope} />
              mattjcrossdev@gmail.com
            </IconLink>
            <hr />
            <h5 className="my-4 text-center">Social Media</h5>
            <IconLink
              className="my-4"
              href="https://www.github.com/mattyc246"
              target="_blank"
            >
              <FontAwesomeIcon icon={faGithubSquare} />
              Github
            </IconLink>
            <IconLink
              className="my-4"
              href="https://www.facebook.com/mattyc246"
              target="_blank"
            >
              <FontAwesomeIcon icon={faFacebookSquare} />
              Facebook
            </IconLink>
            <IconLink
              className="my-4"
              href="https://www.linkedin.com/in/matthew-cross/"
              target="_blank"
            >
              <FontAwesomeIcon icon={faLinkedin} />
              LinkedIn
            </IconLink>
            <IconLink
              className="my-4"
              href="https://www.instagram.com/mattyc246"
              target="_blank"
            >
              <FontAwesomeIcon icon={faInstagram} />
              Instagram
            </IconLink>
          </div>
        </div>
      </ContentContainer>
    </Layout>
  );
};

export default Contact;

export const pageQuery = graphql`
  query ContactPage {
    datoCmsContact {
      seoMetaTags {
        ...GatsbyDatoCmsSeoMetaTags
      }
    }
  }
`;