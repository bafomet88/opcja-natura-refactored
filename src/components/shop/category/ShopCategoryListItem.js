import React, { useContext, useCallback, useState } from "react"
import { Link } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
/* import BuyButton from "./BuyButton" */
import { financial } from "../../../utils/functions/financial"

import { CartContext } from "../../../context/cartContext"

import {
  ProductLstWrapper,
  ProductImage,
} from "../../../utils/styledWrappers/ProductListItem"

const Product = React.memo(({ product }) => {
  const { handleAddToCart } = useContext(CartContext)
  const [isLoading, setIsLoading] = useState(false)
  const image = getImage(product.images[0].fileLocal)

  const addItem = useCallback((productId, productQty) => {
    setIsLoading(true)
    handleAddToCart(productId, productQty).then(() => {
      setIsLoading(false)
    })
  }, [])

  return (
    <ProductLstWrapper>
      <section className="image">
        <Link
          to={`/sklep/${product.slug}`}

          /* onMouseEnter={() => handleMouseEnter()}
          onMouseLeave={() => handleMouseLeave()} */
        >
          <GatsbyImage image={image} alt="product foto" />
        </Link>
      </section>

      <h3>{product.name}</h3>
      <span>podpis</span>

      <p className="price-text">{financial(product.price, "PLN")}</p>

      <div
        className="buy-section"
        onClick={() => addItem(product.product_id, 1)}
      >
        {/*   <BuyButton product={product}>Dodaj do koszyka</BuyButton> */} DO
        KOSZYKA
        {isLoading && <p>Ładowanie...</p>}
      </div>
    </ProductLstWrapper>
  )
})

export default Product
