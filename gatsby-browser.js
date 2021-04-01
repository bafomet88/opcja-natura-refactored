/* const React = require("react")
const RootLayout = require("./src/components/layout/rootLayout") */

import React from "react"
import RootLayout from "./src/components/layout/rootLayout"

export const wrapRootElement = ({ element }) => {
  return <RootLayout> {element} </RootLayout>
}
