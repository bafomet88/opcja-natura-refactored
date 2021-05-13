import React, { useContext, useState, useEffect } from "react"
import styled from "styled-components"
import { CartContext } from "../../context/cartContext"

const Wrapper = styled.section`
  position: relative;
  margin-bottom: 3em;

  label {
    margin-right: 1em;
    top: -1em;
  }
`

const options = [
  { value: "PL", name: "Polska" },
  { value: "DE", name: "Hitler" },
]

const CountrySelect = React.memo(() => {
  const { handleUpadateCountry, handleGetShipping, cart } = useContext(
    CartContext
  )

  const [shippingCountry, setShippingCountry] = useState("")
  const defaultCountry = "PL"

  console.log("shippignCountry", shippingCountry)

  /*   useEffect(() => {
    if (!shippingCountry && !cart.billing.country) {
      handleUpadateCountry(defaultCountry).then(() => {
        handleGetShipping()
        console.log("FIRST SHIPPING RENDER: defoult caountry")
      })
    } else if (!shippingCountry && cart.billing.country) {
      handleGetShipping()
      console.log("FIRST SHIPPING RENDER: get country from cart")
    }
  }, []) */

  //initial get country form cart and generate shipping methods
  useEffect(() => {
    handleGetShipping()
  }, [])

  //generate shipping methods when user changes country
  useEffect(() => {
    if (shippingCountry) {
      handleUpadateCountry(shippingCountry).then(() => {
        handleGetShipping()
        console.log("change country to ship")
      })
    }
  }, [shippingCountry])

  return (
    <Wrapper>
      <label htmlFor="delivery-country">Kraj dostawy</label>
      <select
        name="country"
        id="delivery-country"
        value={shippingCountry || cart.billing.country}
        onChange={e => setShippingCountry(e.target.value)}
      >
        {options.map(option => (
          <option key={option.value} value={option.value}>
            {option.name}
          </option>
        ))}
      </select>
    </Wrapper>
  )
})

export default CountrySelect
