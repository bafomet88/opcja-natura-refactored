import React from "react"
/* import Navbar from "./Navbar/Navbar"
import Footer from "./Footer/index"
import CookieConsent from "./CookieConstent" */
import styled, { ThemeProvider } from "styled-components"
import { theme } from "../../styles/theme/theme"
import GlobalStyle from "../../styles/GlobalStyle"

const StyledWrapper = styled.div`
  max-width: 1920px;
  margin: 0 auto;
`

const Layout = ({ children, location }) => {
  return (
    <ThemeProvider theme={theme}>
      <>
        <GlobalStyle />
        <StyledWrapper>
          {/*  <Navbar path={location.pathname} />  */}
          <main>{children}</main>
          {/*      <CookieConsent />
          <Footer />*/}
        </StyledWrapper>
      </>
    </ThemeProvider>
  )
}

export default Layout
