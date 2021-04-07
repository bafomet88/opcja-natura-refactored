import React, { useContext } from "react"
import styled from "styled-components"
import CartItem from "./CartItem"
import CartHeader from "./CartHeader"
import CartFooter from "./CartFooter"
/* import EmptyCart from "./EmptyCart" */

import { CartContext } from "../../context/cartContext"

import { borderBefore } from "../styled/mixins/mixins"

const Wrapper = styled.aside`
  position: fixed;
  background: #fff;
  padding: 2em;
  height: 100%;
  width: 20%;
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

const ItemsWrapper = styled.ul`
  margin-top: 1em;
  ${borderBefore}
`

const EmptyCartWrapper = styled.div`
  align-self: center;
  justify-self: center;
`

const Cart = React.memo(() => {
  const { cart, cartVisible } = useContext(CartContext)

  console.log("RENDERING CART")

  let backdrop

  const EmptyCart = () => {
    return <EmptyCartWrapper>Pusta karta</EmptyCartWrapper>
  }

  const FilledCart = () => {
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

  if (!cart) {
    return <EmptyCart />
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
          <CartHeader cartVisible={cartVisible} />
          {!cart.items.length ? <EmptyCart /> : <FilledCart />}
        </ScrollingWrapper>
      </Wrapper>
    </>
  )
})

export default Cart
