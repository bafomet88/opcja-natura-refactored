import React from "react"
import { ThemeProvider } from "styled-components"
import { theme } from "../../styles/theme/theme"
import GlobalStyle from "../../styles/GlobalStyle"
import SwellContextProvider from "../../context/cartContext"

const RootLayout = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <SwellContextProvider>
        <GlobalStyle />
        {children}
      </SwellContextProvider>
    </ThemeProvider>
  )
}

export default RootLayout
