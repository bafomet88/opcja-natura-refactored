import React, { useState, useContext, useEffect } from "react"
import styled from "styled-components"
import { useForm } from "react-hook-form"

import { CartContext } from "../../context/cartContext"

import { linkBorderOut } from "../styled/mixins/mixins"

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

const FormErrors = styled.div`
  display: block;
`

const CartFooterForms = React.memo(item => {
  const {
    handleApplyCoupon,
    handleApplyComment,
    couponMessage,
    commentMessage,
  } = useContext(CartContext)
  const { register, handleSubmit, errors } = useForm()
  const [formVisible, setFormVisible] = useState(false)

  const onSubmit = data => {
    if (item.Role === "Coupon") {
      handleApplyCoupon(data.discount_code)
    } else if (item.Role === "Comment") {
      handleApplyComment(data.comment)
    }
  }

  console.log("REDER CART FORMS")

  return (
    <div>
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
        <form onSubmit={handleSubmit(onSubmit)}>
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
})

export default CartFooterForms
