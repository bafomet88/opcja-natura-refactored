import React, { useState, useEffect, useContext } from "react"
import styled from "styled-components"
import { CartContext } from "../../context/cartContext"

const Wrapper = styled.section`
  position: relative;
`

const Box = styled.div`
  display: flex;
`

const Boxes = styled.ul`
  display: flex;

  .active {
    border: 1px solid #000;
  }
`

const Icon = styled.div`
  position: relative;
`
const Title = styled.h5`
  position: relative;
`

const Price = styled.h5`
  position: relative;
`

const Summary = styled.div`
  position: relative;
`

const CountrySelect = styled.div`
  position: relative;
`

const options = [
  { value: "PL", name: "Polska" },
  { value: "DE", name: "Hitler" },
]

const DeliveryMethod = (isActive, handleActiveDelivery) => {
  const {
    handleUpadateCountry,
    handleGetShipping,
    shippingMethods,
    cart,
  } = useContext(CartContext)

  const [shippingCountry, setShippingCountry] = useState("")
  const defaultCountry = "PL"

  console.log("shippignCountry", shippingCountry)

  useEffect(() => {
    if (!shippingCountry && !cart.billing.country) {
      handleUpadateCountry(defaultCountry).then(() => {
        handleGetShipping()
        console.log("FIRST SHIPPING RENDER: defoult caountry")
      })
    } else if (!shippingCountry && cart.billing.country) {
      handleUpadateCountry(cart.billing.country).then(() => {
        handleGetShipping()
        console.log("FIRST SHIPPING RENDER: get country from cart")
      })
    }
  }, [])

  useEffect(() => {
    if (shippingCountry) {
      handleUpadateCountry(shippingCountry).then(() => {
        handleGetShipping()
        console.log("change country to ship")
      })
    }
  }, [shippingCountry])

  console.log("deliveryMethods render", cart)

  const DeliveryCountryMethods = () => {
    return (
      <>
        <Boxes>
          {shippingMethods.map((item, index) => (
            <Box
              key={item.id}
              onClick={() => handleActiveDelivery(index + 1)}
              className={`${index + 1 === isActive && "active"}`}
            >
              <Icon>{index + 1}</Icon>
              <Title>{item.name}</Title>
              <Price>{item.price}</Price>
            </Box>
          ))}
        </Boxes>
        <Summary>
          <h5>Koszty dostawy</h5>
          <span>20</span>
        </Summary>
      </>
    )
  }

  return (
    <Wrapper>
      <CountrySelect>
        <label htmlfor="delivery-country">Kraj dostawy</label>
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
      </CountrySelect>
      {shippingMethods ? <DeliveryCountryMethods /> : ""}
    </Wrapper>
  )
}

export default DeliveryMethod
