import React, { useContext, useState } from "react"
import styled from "styled-components"
import { useForm } from "react-hook-form"
import Button from "../styled/elements/CheckoutButton"
import { financial } from "../../utils/functions/financial"

import { CartContext } from "../../context/cartContext"

import { borderAfter, linkBorderOut } from "../styled/mixins/mixins"
import { cartData } from "./cartData"

const Wrapper = styled.div`
  margin-top: auto;
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

const FormHeader = styled.div`
  display: flex;
  justify-content: space-between;

  .cart-form-span_button {
    cursor: pointer;
    align-self: center;
    text-transform: uppercase;
    letter-spacing: 1px;
    ${linkBorderOut}
  }
`

const Form = styled.div`
  max-height: ${props => (props.formVisible ? "200px" : "0")};
  overflow: hidden;
  transition: max-height 1s;
`

const FormErrors = styled.p`
  display: block;
`

const ButtonContainer = styled.div`
  margin-top: 2em;
  display: flex;
  flex-direction: column;
`

const CartFooter = () => {
  const { cart, handleApplyCoupon, couponMessage } = useContext(CartContext)
  const { register, handleSubmit, errors } = useForm()
  const [formVisible, setFormVisible] = useState(false)

  console.log(cartData)

  const discountSubmit = data => {
    const discountCode = data.discount_code
    handleApplyCoupon(discountCode)
  }

  const commentSubmit = data => {
    const discountCode = data.discount_code
    handleApplyCoupon(discountCode)
  }

  return (
    <Wrapper>
      <CartSum>
        <p>suma:</p>
        <p>{financial(cart.grand_total, "PLN")}</p>
      </CartSum>

      {cartData.map(item => {
        return (
          <div key={item.id}>
            <FormHeader>
              <p>{item.Text}</p>
              <span
                role="button"
                className="cart-form-span_button"
                onClick={() => setFormVisible(!formVisible)}
              >
                {item.Link}
              </span>
            </FormHeader>
            <Form formVisible={formVisible}>
              <form onSubmit={handleSubmit(discountSubmit)}>
                <input
                  type="text"
                  placeholder={`${item.FormPlaceholder}`}
                  name={`${item.FormName}`}
                  ref={register({
                    required: `${item.FormRequiredMessage}`,
                    minLength: {
                      value: 3,
                      message: `${item.FormLengthMessage}`,
                    },
                  })}
                />
                <input type="submit" value="dodaj" />
              </form>
              <FormErrors>
                {errors.discount_code && <p>{errors.discount_code.message}</p>}
                {couponMessage && <p>{couponMessage}</p>}
              </FormErrors>
            </Form>
          </div>
        )
      })}

      <ButtonContainer>
        <CheckoutButton>Do kasy</CheckoutButton>
      </ButtonContainer>
    </Wrapper>
  )
}

export default CartFooter
