import React from 'react'
import styled from 'styled-components'
import Layout from '../components/layout'

const Content = styled.div`
  width: 100%;
  min-height: calc(100vh - 18vw);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;

  h1 {
    font-size: 15vw;
    font-weight: 700;
    letter-spacing: 2px;
    text-transform: uppercase;

    @media screen and (min-width: 640px) {
      font-size: 11vw;
    }
  }

  h2 {
    width: 100%;
    font-size: 5vw;
    font-weight: 300;
    letter-spacing: 2px;

    @media screen and (min-width: 640px) {
      width: 70%;
      font-size: 3vw;
    }
  }

  @media screen and (min-width: 640px) {
    min-height: calc(100vh - 6vw);
  }
`;

const Success = () => {
  return (
    <Layout>
      <Content>
        <h1>Thank <br />You.</h1>
        <h2>I aim to respond to all messages within 2-3 days.</h2>
      </Content>
    </Layout>
  );
}

export default Success
