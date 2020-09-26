import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/layout";
import styled from "styled-components";
import ContentContainer from "../components/ContentContainer";
import FancyButton from "../components/FancyButton";
import Code from "../images/code.jpg"

const Container = styled.div`
  min-height: calc(100vh - 70px);
  width: 100vw;
  position: relative;
  background-color: black;

  @media screen and (min-width: 740px) {
    background-image: url(${Code});
    background-size: cover;
    background-position: center;
    background-attachment: fixed;
    min-height: calc(100vh - 100px);
    padding-top: 0px;
  }
`;

const Triangle = styled.div`
  width: 0;
  height: 0;
  background-color: transparent;
  border-left: 100vw solid white;
  border-bottom: calc(100vh - 70px) solid transparent;
  position: relative;

  @media screen and (min-width: 740px) {
    border-bottom: calc(100vh - 100px) solid transparent;
  }
`;

const CenterHero = styled.div`
  width: 100vw;
  padding: 0 1rem;
  position: absolute;
  left: 50%;
  top: 55%;
  transform: translate(-50%, -50%);
  z-index: 2;

  @media screen and (min-width: 740px) {
    width: 70vw;
    padding: 0 3rem;
  }
`;

const StyledTitle = styled.h1`
  color: ${(props) => props.color};
  text-align: ${(props) => props.alignment};
  margin: 8rem 0;
`;

const IndexPage = ({ data: {datoCmsHome} }) => {
  return (
    <Layout seo={datoCmsHome.seoMetaTags}>
      <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequuntur repudiandae quidem ullam maiores adipisci numquam cum repellat nam dolor omnis iure saepe, illum id. Eligendi, animi. Eligendi aliquam neque iste nostrum laudantium, numquam repellendus recusandae quibusdam odit possimus amet voluptates, quisquam tempore vero ducimus, veritatis alias. Cum perspiciatis unde aut asperiores velit ipsam officia sunt quo quos sit eum, optio reprehenderit omnis laboriosam quisquam delectus natus vel ullam odio? Blanditiis soluta error dolorum distinctio doloribus optio! Laborum assumenda corrupti voluptates cum repudiandae nam facere, nobis at repellat harum omnis qui ratione minima iure velit officia dicta illum voluptatum culpa. Vero illum numquam dolores ratione ipsum autem, praesentium quae ullam neque. Dignissimos veniam mollitia necessitatibus saepe quasi. Eligendi consectetur architecto ad impedit id odio perferendis minima deleniti tenetur, natus ducimus qui ullam cupiditate earum, voluptatum voluptatibus sapiente debitis corporis totam? Illo fugiat eaque ex delectus exercitationem amet, labore ad quisquam distinctio quasi laborum quos ea temporibus. Ut, alias? Facilis expedita placeat quos, voluptates quo fugit iste, repellat perferendis impedit similique neque cumque! Explicabo molestiae quaerat cumque similique non facere magnam ducimus ratione temporibus cum dicta deserunt rerum ipsum, quis accusantium? Tenetur esse nihil temporibus aut doloribus, nam incidunt voluptates molestiae quos velit, ab sapiente, ipsam consectetur atque labore quaerat! Nulla rem, expedita deserunt quod maiores laboriosam impedit nesciunt unde obcaecati provident non minus itaque molestiae amet atque modi ducimus id quidem aliquid possimus. Sequi blanditiis sit cum, qui necessitatibus incidunt quas perferendis consequatur sint vero repellat perspiciatis quae laborum tempora repellendus saepe consequuntur nostrum dolorem, voluptatibus aspernatur tempore, voluptatum mollitia? Dolor labore nemo qui aliquid officia maxime ex voluptatum praesentium expedita consectetur ea vitae quos sapiente autem consequuntur iure magnam optio laborum hic, itaque enim? Rem quasi pariatur repudiandae temporibus, laborum, quis facere obcaecati nesciunt nulla amet, illum molestias exercitationem voluptatem?</p>
    </Layout>
  );
}


export default IndexPage;

export const query = graphql`
  query HomePage {
    datoCmsHome {
      seoMetaTags {
        ...GatsbyDatoCmsSeoMetaTags
      }
      servicesTextNode {
        childMarkdownRemark {
          html
        }
      }
      missionStatementNode {
        childMarkdownRemark {
          html
        }
      }
      servicesImage {
        url
        alt
      }
    }
  }
`;
