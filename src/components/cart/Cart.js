import React, { useContext, useEffect } from "react"
import styled from "styled-components"
import CartHeader from "./CartHeader"
import FilledCart from "./FilledCart"
import EmptyCart from "./EmptyCart"

import { CartContext } from "../../context/cartContext"

const Wrapper = styled.aside`
  position: fixed;
  background: #fff;
  padding: 2em;
  height: 100%;
  z-index: 100;
  top: 0;
  right: 0;
  transform: ${props =>
    props.cartVisible ? "translateX(0)" : "translateX(100%)"};
  transition: transform 0.3s ease-out;
`

const ScrollingWrapper = styled.div`
  display: flex;
  flex-direction: column;
  overflow: auto;
  min-height: 98%;
  max-height: 98%;
  padding-bottom: 2%;
`

const Backdrop = styled.section`
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  right: 0;
  z-index: 50;
  background-color: rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease-out;
`

const Cart = React.memo(() => {
  const { cart, cartVisible, handleUpadateCountry } = useContext(CartContext)

  console.log("RENDERING CART component", cart)

  /*  useEffect(() => {
    if (!cart.billing.country) {
      handleUpadateCountry("PL")
    }
  }, []) */

  let backdrop

  if (!cart) {
    return ""
  }

  if (!cart.items) {
    return <EmptyCart />
  }

  if (cartVisible) {
    backdrop = <Backdrop />
  }

  return (
    <>
      {backdrop}
      <Wrapper cartVisible={cartVisible}>
        <ScrollingWrapper>
          <CartHeader />
          {!cart.items.length ? <EmptyCart /> : <FilledCart />}
        </ScrollingWrapper>
      </Wrapper>
    </>
  )
})

export default Cart
