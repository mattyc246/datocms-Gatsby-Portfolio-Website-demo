import React from 'react'
import Layout from '../components/layout'
import ContentContainer from '../components/ContentContainer'
import ContactForm from '../components/ContactForm'

const Contact = () => {
  return (
    <Layout>
      <ContentContainer>
        <h1>Contact me</h1>
        <div className="row">
          <div className="col-12 col-lg-7">
            <ContactForm />
          </div>
          <div className="col-12 col-lg-5"></div>
        </div>
      </ContentContainer>
    </Layout>
  )
}

export default Contact
