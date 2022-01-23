import React from "react"
import { graphql } from "gatsby"
import { Layout } from "../components/index"

const ProdcutTemplate = ({ data, location }) => {
  const { swellProduct } = data

  console.log("product data", data)

  return <Layout location={location}>hello from product</Layout>
}

export const query = graphql`
  query GetProduct($id: String) {
    swellProduct(attributes: { id: { eq: $id } }) {
      slug
      name
      attributes {
        id
      }
    }
    contentfulProducts(productId: { eq: $id }) {
      title
      productId
    }
  }
`

export default ProdcutTemplate
