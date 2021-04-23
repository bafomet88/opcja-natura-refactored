import React, { useContext } from "react"
import styled from "styled-components"
import CartItem from "./CartItem"
import CartFooter from "./CartFooter"
import { CartContext } from "../../context/cartContext"

import { borderBefore } from "../styled/mixins/mixins"

const ItemsWrapper = styled.ul`
  margin-top: 1em;
  max-width: 600px;
  ${borderBefore}
`

const FilledCart = () => {
  const { cart } = useContext(CartContext)

  /* if (!cart) {
    return ""
  } */

  return (
    <>
      <ItemsWrapper>
        {cart.items.map(item => (
          <CartItem key={item.id} {...item} />
        ))}
      </ItemsWrapper>
      <CartFooter />
    </>
  )
}

export default FilledCart
