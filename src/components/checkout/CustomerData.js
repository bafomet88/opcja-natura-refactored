import React, { useEffect } from "react"
import styled from "styled-components"
import { useForm } from "react-hook-form"
import useFormPersist from "react-hook-form-persist"
/* import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup" */

const Wrapper = styled.section`
  margin-top: 2em;
  display: grid;
`

const FormWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`

const Submit = styled.div`
  justify-self: center;
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
        <FormWrapper>
          <div className="group">
            <input
              type="text"
              placeholder="Imię"
              name="firstName"
              ref={register({
                required: "To pole jest wymagane",
              })}
            />
            <span className="highlight"></span>
            <span className="bar"></span>
            <label htmlFor="firstName">Imię:</label>
            {errors.firstName && <p>{errors.firstName.message}</p>}
          </div>

          <div className="group">
            <input
              type="text"
              placeholder="Nazwisko"
              name="lastName"
              ref={register({
                required: "To pole jest wymagane",
              })}
            />
            <span className="highlight"></span>
            <span className="bar"></span>
            <label htmlFor="firstName">Nazwisko:</label>
            {errors.firstName && <p>{errors.lastName.message}</p>}
          </div>

          <div className="group">
            <input
              type="email"
              placeholder="Mail"
              name="mail"
              ref={register({
                required: "To pole jest wymagane",
              })}
            />
            <span className="highlight"></span>
            <span className="bar"></span>
            <label htmlFor="mail">Mail:</label>
            {errors.firstName && <p>{errors.mail.message}</p>}
          </div>

          <div className="group">
            <input
              type="tel"
              placeholder="Telefon"
              name="phone"
              ref={register({
                required: "To pole jest wymagane",
              })}
            />
            <span className="highlight"></span>
            <span className="bar"></span>
            <label htmlFor="phone">Telefon:</label>
            {errors.firstName && <p>{errors.phone.message}</p>}
          </div>
        </FormWrapper>
        <Submit>
          <input type="submit" value="dodaj" />
        </Submit>
      </form>
    </Wrapper>
  )
})

export default BillingInPost
