import React from "react"

import RootLayout from "./src/components/layout/rootLayout"

export const wrapRootElement = ({ element }) => (
  <RootLayout> {element} </RootLayout>
)
