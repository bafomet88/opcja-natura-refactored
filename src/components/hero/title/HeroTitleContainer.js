import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import { GlobalButton } from "../../styled/index"

/* import FadeIn from "./utils/styledComponents/FadeIn" */

const Wrapper = styled.header`
  position: absolute;
  margin-top: 45%;
  justify-self: center;
  display: flex;
  flex-direction: column;
  /*  animation: ${FadeIn} ease 2s; */
  color: #fff;

  h1,
  h5 {
    text-transform: uppercase;
    text-align: center;
    color: ${({ theme }) => theme.colors.white};
    padding-bottom: ${({ theme }) => theme.spaces.padding.base};
  }

  h1 {
    letter-spacing: 5px;
  }

  @media (min-width: 600px) {
    margin-top: 30%;
  }

  @media (min-width: 830px) {
    margin-top: 20%;
  }

  @media (min-width: 1100px) {
    margin-top: 18%;
  }
`

const StyledLink = styled(Link)`
  margin: 0 auto;
`

const HeroTitle = ({ children, button }) => {
  return (
    <Wrapper>
      {children}

      {button && (
        <StyledLink to="/sklep">
          <GlobalButton
            color="#fff"
            text="odkryj produkty"
            padding="1.5em 3em"
          />
        </StyledLink>
      )}
    </Wrapper>
  )
}

export default HeroTitle
