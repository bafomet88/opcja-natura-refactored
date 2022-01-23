const path = require("path")

// prettier-ignore
function slugify(text) {
  return text.toString().toLowerCase().trim()
    .replace(/[żź]/gi, "z")
    .replace(/ó/gi, "o")
    .replace(/ł/gi, "l")
    .replace(/ć/gi, "c")
    .replace(/ś/gi, "s")
    .replace(/ń/gi, "n")
    .replace(/ą/gi, "a")
    .replace(/&/g, '-and-')        
    .replace(/[\s\W-]+/g, '-')     
}

// create pages dynamically
exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const result = await graphql(`
    {
      categories: allSwellCategory {
        nodes {
          slug
          id
        }
      }
      products: allSwellProduct {
        nodes {
          attributes {
            id
          }
          slug
        }
      }
    }
  `)

  result.data.categories.nodes.forEach(category => {
    createPage({
      path: `sklep/${category.slug}`,
      component: path.resolve("src/templates/productCategory-template.js"),
      context: {
        slug: category.slug,
        id: category.id,
      },
    })
  })

  result.data.products.nodes.forEach(product => {
    createPage({
      path: `sklep/${product.slug}`,
      component: path.resolve(`src/templates/product-template.js`),
      context: {
        slug: product.slug,
        id: product.attributes.id,
      },
    })
  })
}
