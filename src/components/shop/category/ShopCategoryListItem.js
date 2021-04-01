import React, { useContext } from "react"
import { Link } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
/* import BuyButton from "./BuyButton" */
import { financial } from "../../../utils/functions/financial"

import { CartContext } from "../../../context/cartContext"

import {
  ProductLstWrapper,
  /* ProductImage, */
} from "../../../utils/styledWrappers/ProductListItem"

const Product = ({ product }) => {
  const { handleAddToCart } = useContext(CartContext)
  const image = getImage(product.images[0].fileLocal)

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
        onClick={() => handleAddToCart(product.product_id, 1)}
      >
        {/*   <BuyButton product={product}>Dodaj do koszyka</BuyButton> */} DO
        KOSZYKA
      </div>
    </ProductLstWrapper>
  )
}

export default Product
