import React, { useContext } from "react"
import styled from "styled-components"
import { VscClose } from "react-icons/vsc"

import { CartContext } from "../../context/cartContext"

const CartTitle = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  position: relative;

  h3 {
    text-transform: uppercase;
    letter-spacing: 2px;
    align-self: center;
    margin-bottom: 0;
  }

  /*   ::after {
    content: "";
    width: 100%;
    position: absolute;
    top: 0;
    height: 1px;
    opacity: 0.9;
    color: ${({ theme }) => theme.colors.secondary};
    border: 1px solid ${({ theme }) => theme.colors.secondary_opacity};
  } */
`

const Close = styled(VscClose)`
  cursor: pointer;
  width: 20px;
  height: 20px;
  align-self: center;
`

const CartHeader = () => {
  const { handleCartVisible } = useContext(CartContext)
  return (
    <CartTitle>
      <h3>Karta</h3>
      <Close role="button" onClick={() => handleCartVisible()} />
    </CartTitle>
  )
}

export default CartHeader
