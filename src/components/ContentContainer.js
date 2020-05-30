import React from 'react'
import styled from 'styled-components'

const PaddedContainer = styled.div`
  padding: 3vw 12vw;
  ${(props) => (props.dark ? "background-color: black;" : "")}
  * {
    ${(props) => (props.dark ? "color: white;" : "")}
  }

  p {
    text-align: justify;
  }
`;

const ContentContainer = ({children, ...rest}) => {
  return (
    <PaddedContainer {...rest}>
      {children}
    </PaddedContainer>
  )
}

export default ContentContainer
