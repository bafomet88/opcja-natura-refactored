import React from "react"
/* import Navbar from "./Navbar/Navbar"
import Footer from "./Footer/index"
import CookieConsent from "./CookieConstent" */
import styled from "styled-components"

import { Cart } from "../index"

const StyledWrapper = styled.div`
  max-width: 1920px;
  margin: 0 auto;
`

const Layout = ({ children, location }) => {
  return (
    <StyledWrapper>
      <Cart />
      {/*  <Navbar path={location.pathname} />  */}
      <main>{children}</main>
      {/*      <CookieConsent />
          <Footer />*/}
    </StyledWrapper>
  )
}

export default Layout
