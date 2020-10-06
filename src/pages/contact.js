import React from "react";
import styled from "styled-components"
import { graphql } from 'gatsby'
import Layout from "../components/layout";
import ContactForm from "../components/ContactForm";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faFacebookSquare, faLinkedin, faGithubSquare, faInstagram } from "@fortawesome/free-brands-svg-icons"

const IconLink = styled.a`
  display: flex;
  font-size: 64px;
  margin: 1rem;
  justify-content: space-between;
  align-items: center;
  text-align: center;
  color: rgba(0, 0, 0, 0.9);
  text-decoration: none;

  :hover {
    color: rgba(0,0,0,0.8);
    text-decoration: none;
  }
`;

const SocialLinks = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
`

const FormContent = styled.div`
  width: 100%;
  min-height: calc(80vh - 9vw);
  position: relative;

  @media screen and (min-width: 640px){
    min-height: calc(80vh - 6vw);
  }
`

const SocialContent = styled.div`
  width: 100%;
  min-height: calc(20vh - 9vw);

  @media screen and (min-width: 640px){
    min-height: calc(20vh - 6vw);
  }
`;

const Contact = ({ data: { datoCmsContact } }) => {
  return (
    <Layout seo={datoCmsContact.seoMetaTags}>
      <FormContent>
        <ContactForm />
      </FormContent>
      <SocialContent>
        <h5 className="text-center">
          I'm socially awkward, but here's my socials anyway...
        </h5>
        <SocialLinks>
          <IconLink href="mailto:mattjcrossdev@gmail.com">
            <FontAwesomeIcon icon={faEnvelope} />
          </IconLink>
          <IconLink href="https://www.github.com/mattyc246" target="_blank">
            <FontAwesomeIcon icon={faGithubSquare} />
          </IconLink>
          <IconLink href="https://www.facebook.com/mattyc246" target="_blank">
            <FontAwesomeIcon icon={faFacebookSquare} />
          </IconLink>
          <IconLink
            href="https://www.linkedin.com/in/matthew-cross/"
            target="_blank"
          >
            <FontAwesomeIcon icon={faLinkedin} />
          </IconLink>
          <IconLink href="https://www.instagram.com/mattyc246" target="_blank">
            <FontAwesomeIcon icon={faInstagram} />
          </IconLink>
        </SocialLinks>
      </SocialContent>
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