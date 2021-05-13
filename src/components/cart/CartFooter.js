import React, { useContext, useState } from "react"
import styled from "styled-components"
import Button from "../styled/elements/CheckoutButton"
import { financial } from "../../utils/functions/financial"
import AddCoupon from "./AddCoupon"
import AddComment from "./AddComment"
import { Link } from "gatsby"

import { CartContext } from "../../context/cartContext"

const Wrapper = styled.div`
  margin-top: auto;
  padding-top: 3em;
  display: flex;
  flex-direction: column;
  row-gap: 1em;

  .order-sum {
    font-size: ${({ theme }) => theme.fonts.fontSize.xl};
    font-weight: bolder;
  }
`

const CheckoutButton = styled(Button)`
  justify-self: center;
`
const StyledButton = styled(Button)`
  align-self: center;
`

const CartSum = styled.span`
  padding-bottom: 1em;
  justify-self: flex-start;
  text-transform: uppercase;
  border-bottom: 1px solid #000;

  div {
    display: flex;
    justify-content: space-between;
    margin-top: 0.5em;
  }
`

const ButtonContainer = styled.div`
  margin-top: 2em;
  display: flex;
  flex-direction: column;
`

const CartFooter = React.memo(() => {
  const { cart, setCartVisible } = useContext(CartContext)

  console.log("REDER CART FOOTER")

  return (
    <Wrapper>
      <CartSum>
        {cart.coupon_code && (
          <div>
            <p>rabat:</p>
            <p>{financial(cart.discount_total, "PLN")}</p>
          </div>
        )}
        <div>
          <p>VAT:</p>
          <p>{financial(cart.item_tax, "PLN")}</p>
        </div>
        <div>
          <p className="order-sum">suma:</p>
          <p className="order-sum">{financial(cart.grand_total, "PLN")}</p>
        </div>
      </CartSum>

      {/*   <AddCoupon />
       <AddComment /> */}
      <Link to="/zamowienie/adres">
        <ButtonContainer>
          <CheckoutButton onClick={() => setCartVisible(false)}>
            Do kasy
          </CheckoutButton>
        </ButtonContainer>
      </Link>
    </Wrapper>
  )
})

export default CartFooter
