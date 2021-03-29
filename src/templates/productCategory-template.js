import React from "react"
import { graphql } from "gatsby"
import ShopCategoryPage from "../components/shop/category/ShopCategoryPage"
/* import SEO from "../components/SEO" */

import { Layout } from "../components/index"

const ProductCategoryTemplate = ({ data }) => {
  const {
    category,
    categoryProducts: { nodes: products },
  } = data
  return (
    <Layout>
      {/*       <SEO
        pageTitle={`${categories.categoryTitle} - kosmetyki Opcja Natura. Natura. To proste.`}
        pageDesc={categories.ogDesc}
        ogImage={categories.ogImage.fluid.src}
        ogImageAlt={categories.ogImage.title}
      />  */}
      <ShopCategoryPage
        products={products}
        categoryTitle={category.name}
        categoryDesc={category.description}
        location={location}
      />
    </Layout>
  )
}

export const query = graphql`
  query GetCategory($id: String) {
    category: swellCategory(id: { eq: $id }) {
      name
      slug
      description
    }
    categoryProducts: allSwellProduct(
      filter: { categories: { elemMatch: { id: { eq: $id } } } }
    ) {
      nodes {
        name
        id
        price
        product_id
        slug
        currency
        description
        images {
          fileLocal {
            childImageSharp {
              gatsbyImageData(width: 500, placeholder: BLURRED)
            }
          }
        }
      }
    }
  }
`

export default ProductCategoryTemplate
