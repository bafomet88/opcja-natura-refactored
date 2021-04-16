import React, { useEffect } from "react"
import styled from "styled-components"
import { useForm } from "react-hook-form"
import useFormPersist from "react-hook-form-persist"
/* import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup" */

const Wrapper = styled.div`
  position: relative;
`

/* const schema = yup.object().shape({
  firstName: yup.string().required("To pole jest wymagane"),
  lastName: yup.string().required("To pole jest wymagane"),
  mail: yup.string().mail().required("To pole jest wymagane"),
  phone: yup.number().positive().integer().required("To pole jest wymagane"),
})  */

const setDefaultValue = () => {
  if (sessionStorage.form) {
    const defaultValues = {
      firstName: sessionStorage.form.firstName,
      lastName: sessionStorage.form.lastName,
      mail: sessionStorage.form.mail,
      phone: sessionStorage.form.phone,
    }
    return defaultValues
  } else {
    return ""
  }
}

const BillingInPost = React.memo(() => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
    setValue,
  } = useForm({
    setDefaultValue,
    /*     resolver: yupResolver(schema), */
  })

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
          ref={register({
            required: "To pole jest wymagane",
          })}
        />
        {errors.firstName && <p>{errors.firstName.message}</p>}
        <label htmlFor="lastName">Nazwisko:</label>
        <input
          type="text"
          placeholder="Nazwisko"
          name="lastName"
          ref={register({
            required: "To pole jest wymagane",
          })}
        />
        {errors.firstName && <p>{errors.lastName.message}</p>}
        <label htmlFor="mail">Mail:</label>
        <input
          type="email"
          placeholder="Mail"
          name="mail"
          ref={register({
            required: "To pole jest wymagane",
          })}
        />
        {errors.firstName && <p>{errors.mail.message}</p>}
        <label htmlFor="phone">Mail:</label>
        <input
          type="tel"
          placeholder="Telefon"
          name="phone"
          ref={register({
            required: "To pole jest wymagane",
          })}
        />
        {errors.firstName && <p>{errors.phone.message}</p>}
        <input type="submit" value="dodaj" />
      </form>
    </Wrapper>
  )
})

export default BillingInPost
