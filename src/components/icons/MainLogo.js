import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

import MainLogo from "../../assets/icons/MainLogo"

const StyleWrapper = styled.div`
  align-self: center;
  justify-self: center;

  .logo {
    max-width: 22rem;
    height: auto;
  }
`

const StyledLogo = styled(MainLogo)`
  fill: inherit;
  transition: all 0.5s ease-out;
  width: 100%;
  height: auto;
`

const Logo = () => {
  return (
    <StyleWrapper>
      <div className="logo">
        <Link to="/">
          <StyledLogo />
        </Link>
      </div>
    </StyleWrapper>
  )
}

export default Logo
