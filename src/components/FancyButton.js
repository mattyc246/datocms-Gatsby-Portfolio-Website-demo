import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'

const StyledButton = styled(Link)`
  display: block;
  max-width: 200px;
  padding: 1rem;
  text-align: center;
  background-color: rgb(128, 255, 212);
  ${(props) => (props.centered ? "margin: 0 auto;" : "")}
  ${(props) => (props.dark ? "color: black;" : "")}
  border-radius: 3px;
  font-weight: 700;
  transition: 0.5s ease-in-out;

  :hover {
    text-decoration: none;
    box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.5);
    transform: scale(1.05);
    transition: 0.5s ease-in-out;
  }
`;

const FancyButton = ({children, ...rest}) => {
  return (
    <StyledButton {...rest}>{children}</StyledButton>
  )
}

export default FancyButton
