import React, { useContext, useState } from "react"
import styled from "styled-components"
import Button from "../styled/elements/CheckoutButton"
import { financial } from "../../utils/functions/financial"
import CartFooterForm from "./CartFooterForms"

import { CartContext } from "../../context/cartContext"

import { cartData } from "./cartData"

const Wrapper = styled.div`
  margin-top: auto;
  padding-top: 3em;
  display: flex;
  flex-direction: column;
  row-gap: 1em;
`

const CheckoutButton = styled(Button)`
  justify-self: center;
`
const StyledButton = styled(Button)`
  align-self: center;
`

const CartSum = styled.span`
  justify-self: flex-start;
  text-transform: uppercase;
  border-bottom: 1px solid #000;
  display: flex;
  justify-content: space-between;
`

const ButtonContainer = styled.div`
  margin-top: 2em;
  display: flex;
  flex-direction: column;
`

const CartFooter = React.memo(() => {
  const { cart } = useContext(CartContext)
  const [formVisible, setFormVisible] = useState(false)

  const handleFormVisible = () => {
    setFormVisible(!formVisible)
  }

  console.log("REDER CART FOOTER")

  return (
    <Wrapper>
      <CartSum>
        <p>suma:</p>
        <p>{financial(cart.grand_total, "PLN")}</p>
      </CartSum>

      {cartData.map(item => {
        return (
          <CartFooterForm
            key={item.id}
            {...item}
            handleFormVisible={handleFormVisible}
            visible={formVisible}
          />
        )
      })}

      <ButtonContainer>
        <CheckoutButton>Do kasy</CheckoutButton>
      </ButtonContainer>
    </Wrapper>
  )
})

export default CartFooter
