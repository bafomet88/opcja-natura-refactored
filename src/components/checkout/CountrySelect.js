import React, { useContext, useState } from "react"
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

const CountrySelect = React.memo(({ register, name, id }) => {
  const { cart } = useContext(CartContext)

  const [shippingCountry, setShippingCountry] = useState("")

  return (
    <Wrapper>
      <label htmlFor="delivery-country">Kraj dostawy</label>
      <select
        {...register(`${name}`)}
        name={name}
        id={id}
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
