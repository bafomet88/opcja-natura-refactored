import React, { useEffect } from "react"
import styled from "styled-components"
import { useForm } from "react-hook-form"
import useFormPersist from "react-hook-form-persist"

const Wrapper = styled.div`
  position: relative;
`

const BillingInPost = () => {
  const { register, handleSubmit, errors, watch, setValue } = useForm()

  useFormPersist("form", { watch, setValue })

  console.log("render billingInPost")

  const onSubmit = data => {
    console.log(data)
  }

  return (
    <Wrapper>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor="firstName">Imię:</label>
        <input
          type="text"
          placeholder="Imię"
          name="firstName"
          defaultValue={sessionStorage.form && sessionStorage.form.firstName}
          ref={register({
            required: "pole wymagane",
          })}
        />
        {errors.firstName && <p>{errors.firstName.message}</p>}
        <label htmlFor="lastName">Nazwisko:</label>
        <input
          type="text"
          placeholder="Nazwisko"
          name="lastName"
          defaultValue={sessionStorage.form && sessionStorage.form.lastName}
          ref={register({
            required: "wpisz nazwisko",
          })}
        />
        <label htmlFor="mail">Mail:</label>
        <input
          type="text"
          placeholder="Mail"
          name="mail"
          /* defaultValue={sessionStorage.form && sessionStorage.form.lastName} */
          ref={register({
            required: "podaj mail",
          })}
        />
        <input type="submit" value="dodaj" />
      </form>
    </Wrapper>
  )
}

export default BillingInPost
