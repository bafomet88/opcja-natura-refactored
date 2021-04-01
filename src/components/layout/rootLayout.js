import React from "react"
import { ThemeProvider } from "styled-components"
import { theme } from "../../styles/theme/theme"
import GlobalStyle from "../../styles/GlobalStyle"
import CartContextProvider from "../../context/cartContext"

import swell from "swell-js"

swell.init(
  process.env.GATSBY_SWELL_STORE_NAME,
  process.env.GATSBY_SWELL_PUBLIC_KEY
)

const RootLayout = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <CartContextProvider>
        <GlobalStyle />
        {children}
      </CartContextProvider>
    </ThemeProvider>
  )
}

export default RootLayout
