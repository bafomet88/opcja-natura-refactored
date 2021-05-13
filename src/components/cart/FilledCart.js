import React, { useContext } from "react"
import styled from "styled-components"
import CartItem from "./CartItem"
import CartFooter from "./CartFooter"
import { CartContext } from "../../context/cartContext"
import LoadingIndicator from "../UI/LoadingIndicator"

import { borderBefore } from "../styled/mixins/mixins"

const ItemsWrapper = styled.ul`
  position: relative;
  margin-top: 1em;
  max-width: 600px;
  ${borderBefore}
`

const LoadingWrapper = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  z-index: 5;
`

const FilledCart = () => {
  const { cart, isLoading } = useContext(CartContext)

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
      {isLoading && (
        <LoadingWrapper>
          <LoadingIndicator />
        </LoadingWrapper>
      )}
      <CartFooter />
    </>
  )
}

export default FilledCart
