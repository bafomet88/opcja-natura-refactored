import React, { useContext } from "react"
import styled from "styled-components"
import { CartContext } from "../../context/cartContext"

import {
  ShippingInPost,
  ShippingCourier,
  ShippingLocalPickup,
} from "./shippingOptions/index"

const Wrapper = styled.div`
  position: relative;
`

const ShippingData = () => {
  const { cart } = useContext(CartContext)

  const settings = shippingOption => {
    switch (shippingOption) {
      case "local_pickup":
        return <ShippingLocalPickup />
      case "express":
        return <ShippingInPost shipping={cart.shipping} />
      case "standard":
        return <ShippingCourier />
    }
  }

  if (!cart.shipping.service) {
    return <div>Ładuję...</div>
  }

  return (
    <Wrapper>
      <h3>Adres dostawy</h3>
      {settings(cart.shipping.service)}
    </Wrapper>
  )
}

export default ShippingData
