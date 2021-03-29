import React, { useContext } from "react"
import styled from "styled-components"

import { CartContext } from "../../context/cartContext"

const Wrapper = styled.aside`
  position: fixed;
  background: #fff;
  height: 100%;
  width: 30%;
  z-index: 100;
  top: 0;
  right: 0;
  transform: ${props =>
    props.cartVisible ? "translateX(0)" : "translateX(100%)"};
  transition: transform 0.3s ease-out;
`

const Cart = () => {
  const { cart, cartVisible } = useContext(CartContext)

  const EmptyCart = () => {
    return <div>Pusta karta</div>
  }

  const FilledCart = () => {
    return (
      <>
        {cart.items.map(item => (
          <div key={item.id}>{item.product.name}</div>
        ))}
      </>
    )
  }

  if (!cart.items) return "Przygotowuję koszyk..."

  return (
    <Wrapper cartVisible={cartVisible}>
      {!cart.items.length ? <EmptyCart /> : <FilledCart />}
    </Wrapper>
  )
}

export default Cart
