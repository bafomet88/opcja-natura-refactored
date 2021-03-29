import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"

const query = graphql`
  {
    allSwellCategory(
      sort: { fields: sort, order: ASC }
      filter: { active: { eq: true } }
    ) {
      nodes {
        name
        slug
        id
      }
    }
  }
`

const ShopCategoriesMenu = () => {
  const {
    allSwellCategory: { nodes: categories },
  } = useStaticQuery(query)

  console.log(categories)

  return (
    <>
      {categories.map(category => {
        return (
          <Link
            key={category.id}
            to={`/sklep/${category.slug}`}
            activeClassName="activeMobile"
          >
            <li>{category.name}</li>
          </Link>
        )
      })}
    </>
  )
}

export default ShopCategoriesMenu
