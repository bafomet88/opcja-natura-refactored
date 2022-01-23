import React, { useContext, useEffect, useState } from "react"
import styled from "styled-components"
import { useForm } from "react-hook-form"
import useFormPersist from "react-hook-form-persist"
import { yupResolver } from "@hookform/resolvers/yup"
import { CartContext } from "../../context/cartContext"
import { navigate } from "gatsby"
import * as yup from "yup"

import FormInput from "../form/FormInput"
import CountrySelect from "./CountrySelect"
import LoadingIndicator from "../UI/LoadingIndicator"

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
  const [billingData, setBillingData] = useState({})
  const [waiting, setWaiting] = useState(false)

  const { handleUpdatCustomerInfo, isLoading } = useContext(CartContext)
  useFormPersist("form", { watch, setValue })

  console.log("render billingInPost")
  //console.log(billingData)

  useEffect(() => {
    /* if (billingData.length > 0)  {*/
    console.log("effect run")
    handleUpdatCustomerInfo(
      billingData.firstName,
      billingData.lastName,
      billingData.email,
      billingData.phone,
      billingData.street,
      billingData.apartment,
      billingData.city,
      billingData.zipCode,
      billingData.country
    )
    //}
  }, [billingData])

  const onSubmit = (data, event) => {
    event.preventDefault()
    setBillingData(data)
    navigate("/zamowienie/dostawa/")

    /*  handleUpdatCustomerInfo(
      data.firstName,
      data.lastName,
      data.email,
      data.phone,
      data.street,
      data.apartment,
      data.city,
      data.zipCode,
      data.country
    ).then(() => {
      navigate("/zamowienie/dostawa/")
    }) */

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
          <h3>Adres Wysyłki</h3>
          <FormInput
            type="text"
            placeholder="Imię"
            name="firstName"
            id="firstName"
            register={register}
            errors={errors.firsName?.message}
          />
          <FormInput
            type="text"
            placeholder="Nazwisko"
            name="lastName"
            id="lastName"
            register={register}
            errors={errors.lastName?.message}
          />
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
          <CountrySelect
            register={register}
            name="country"
            id="delivery-country"
          />
        </FormWrapper>

        <input type="submit" />
      </form>
      {isLoading && <LoadingIndicator />}
    </Wrapper>
  )
})

export default BillingInPost
