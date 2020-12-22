import React from "react"
import styled from "styled-components"
import { Link } from "react-router-dom"

//Styles
import fonts from "../styles/fonts"

const BackWrapper = styled.div`
  width: 100%;
  padding: ${({ padding }) => padding};
  margin: ${({ margin }) => margin};

  @media only screen and (min-width: 850px) {
    margin-top: 0;
    margin-bottom: 5px;
  }
`

const StyledLink = styled(Link)`
  font-family: ${fonts.mainFont};
  font-weight: 400;
  color: #1e86ff;
  text-decoration: none;
  font-size: 1em;
`

const BackToSearch = ({ padding, margin }) => {
  return (
    <BackWrapper padding={padding} margin={margin}>
      <StyledLink exact to="/">
        ← Back To Search
      </StyledLink>
    </BackWrapper>
  )
}

export default BackToSearch
