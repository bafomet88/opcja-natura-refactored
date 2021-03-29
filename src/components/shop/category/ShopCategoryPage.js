import React from "react"
import ShopCategoryListItem from "./ShopCategoryListItem"
import ShopMenu from "../ShopMenu"

import {
  ShopWrapper,
  ShopHeader,
} from "../../../utils/styledWrappers/ProductListPage"

const ShopCategoryPage = ({ products, categoryTitle, categoryDesc }) => {
  return (
    <>
      <ShopHeader>
        <h1>{categoryTitle}</h1>
        <p>{categoryDesc}</p>
      </ShopHeader>
      <ShopWrapper>
        <ShopMenu />

        <section className="product-list">
          {products.map(product => {
            return <ShopCategoryListItem key={product.id} product={product} />
          })}
        </section>
      </ShopWrapper>
    </>
  )
}

export default ShopCategoryPage
