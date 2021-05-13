import React, { useEffect } from "react"
import styled from "styled-components"
import { useForm } from "react-hook-form"
import useFormPersist from "react-hook-form-persist"
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"

import FormInput from "../form/FormInput"
import CountrySelect from "./CountrySelect"

const Wrapper = styled.section`
  margin-top: 2em;
  display: grid;
`

const FormWrapper = styled.div`
  position: relative;
`

const Submit = styled.div`
  justify-self: center;
`

const schema = yup.object().shape({
  firstName: yup.string().required("To pole jest wymagane"),
  lastName: yup.string().required("To pole jest wymagane"),
  mail: yup.string().email().required("To pole jest wymagane"),
  phone: yup.number().positive().integer().required("To pole jest wymagane"),
  street: yup.string().required("To pole jest wymagane"),
  aparment: yup.string(),
  city: yup.string().required("To pole jest wymagane"),
  zipCode: yup.string().required("To pole jest wymagane"),
})

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
    resolver: yupResolver(schema),
  })

  useFormPersist("form", { watch, setValue })

  console.log("render billingInPost")

  const onSubmit = data => {
    console.log(data)
  }

  return (
    <Wrapper>
      <form onSubmit={handleSubmit(onSubmit)}>
        <h3>Informacje kontaktowe</h3>
        <FormWrapper>
          <FormInput
            type="text"
            placeholder="Adres Mail"
            name="mail"
            id="mail"
            register={register}
            errors={errors.mail?.message}
          />
          <FormInput
            type="tel"
            placeholder="Telefon"
            name="phone"
            id="phone"
            register={register}
            errors={errors.phone?.message}
          />
          <h3>Adres</h3>
          <FormInput
            type="text"
            placeholder="Adres"
            name="street"
            id="street"
            register={register}
            errors={errors.street?.message}
          />
          <FormInput
            type="text"
            placeholder="Mieszkanie"
            name="apartment"
            id="apartment"
            register={register}
            errors={errors.apratment?.message}
          />
          <FormInput
            type="text"
            placeholder="Miejscowość"
            name="city"
            id="city"
            register={register}
            errors={errors.zipCode?.message}
          />
          <FormInput
            type="text"
            placeholder="Kod Pocztowy"
            name="zipCode"
            id="zipCode"
            register={register}
            errors={errors.zipCode?.message}
          />
          <CountrySelect />
        </FormWrapper>
        <Submit>
          <input type="submit" value="kontynuuj do wysyłki" />
        </Submit>
      </form>
    </Wrapper>
  )
})

export default BillingInPost
