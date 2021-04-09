import React from "react"
import Layout from "../components/layout/Layout"
import { Hero, HomepageTitle } from "../components/index"

export default function Home({ location }) {
  return (
    <Layout location={location}>
      <Hero>
        <HomepageTitle />
      </Hero>
    </Layout>
  )
}
