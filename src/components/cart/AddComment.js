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
  max-height: ${props => (props.formVisible ? "150px" : "0")};
  overflow: hidden;
  transition: max-height 1s;
`

const FormErrors = styled.div`
  display: block;
`

const AddComment = () => {
  const { handleApplyComment, couponMessage, cart } = useContext(CartContext)
  const [isLoading, setIsLoading] = useContext(false)
  const [formVisible, setFormVisible] = useState()

  const { register, handleSubmit, errors } = useForm()

  const handleFormVisible = () => {
    setFormVisible(!formVisible)
  }

  const onSubmitComment = data => {
    handleApplyComment(data.comment)
  }

  const CommentForm = () => (
    <>
      <FormHeader>
        <p>"Zamówienie na prezent? Inne Uwagi?</p>
        <span
          role="button"
          className="cart-form-span_button"
          onClick={() => handleFormVisible()}
        >
          Komentarz
        </span>
      </FormHeader>

      <Form formVisible={formVisible}>
        <form id="comment" onSubmit={handleSubmit(onSubmitComment)}>
          <input
            type="text"
            placeholder="wpisz kod"
            name="comment"
            ref={register({
              required: "wpisz treść",
              minLength: {
                value: 3,
                message: "za krótka wiadomość",
              },
            })}
          />
          <input type="submit" value="dodaj" />
        </form>
        {/*   {isLoading && <div>loading...</div>} */}
        <FormErrors>
          {errors.discount_code && <p>{errors.discount_code.message}</p>}
          {couponMessage && <p>{couponMessage}</p>}
        </FormErrors>
      </Form>
    </>
  )

  return (
    <Wrapper>
      {cart.comments ? (
        <div>
          <p>Komentarz dodany</p>
        </div>
      ) : (
        <CommentForm />
      )}
    </Wrapper>
  )
}

export default AddComment
