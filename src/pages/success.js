import React from 'react'
import styled from 'styled-components'
import Layout from '../components/layout'

const Content = styled.div`
  height: 70vh;
  width: 100vw;
  position: relative;
  text-align: center;
`

const Center = styled.div`
  width: 50%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`

const Success = () => {
  return (
    <Layout>
      <Content>
        <Center>
          <h1>Thanks for your submission.</h1>
          <p>I will aim to reply all emails within 2-3 working days. If you haven't had a response by then, you may reach out again.</p>
        </Center>
      </Content>
    </Layout>
  )
}

export default Success
