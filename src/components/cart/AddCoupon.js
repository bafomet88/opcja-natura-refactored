import React, { useState, useContext, useEffect } from "react"
import styled from "styled-components"
import { useForm } from "react-hook-form"

import { CartContext } from "../../context/cartContext"

import { linkBorderOut } from "../styled/mixins/mixins"

const Wrapper = styled.div`
  display: grid;
  grid-gap: 1em;
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
  /* max-height: ${props => (props.formVisible ? "150px" : "0")}; */
  overflow: hidden;
  transition: max-height 1s;
`

const FormErrors = styled.div`
  display: block;
`

const AddCoupon = () => {
  const { handleApplyCoupon, couponMessage, cart } = useContext(CartContext)
  /* const [formVisible, setFormVisible] = useState() */

  const { register, handleSubmit, errors } = useForm()

  /*  const handleFormVisible = () => {
    setFormVisible(!formVisible)
  } */

  const onSubmitCoupon = data => {
    handleApplyCoupon(data.discount_code)
    console.log(data)
  }

  const CouponForm = () => {
    return (
      <>
        <FormHeader>
          <p>Masz kod?</p>
          <span
            role="button"
            className="cart-form-span_button"
            /*          onClick={() => handleFormVisible()} */
          >
            Dodaj kod
          </span>
        </FormHeader>

        <Form /* formVisible={formVisible} */>
          <form id="disount" onSubmit={handleSubmit(onSubmitCoupon)}>
            <input
              type="text"
              placeholder="wpisz kod"
              name="discount_code"
              ref={register({
                required: "WPISZ KOD",
                minLength: {
                  value: 3,
                  message: "zbyt krótki kod",
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
      </>
    )
  }

  return (
    <Wrapper>
      {cart.coupon_code ? (
        <div>
          <p>Kod promocyjny dodany</p>
        </div>
      ) : (
        <CouponForm />
      )}
    </Wrapper>
  )
}

export default AddCoupon
