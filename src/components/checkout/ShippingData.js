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

  const selectedShipping = shippingOption => {
    switch (shippingOption) {
      case "local_pickup":
        return <ShippingLocalPickup />
      case "express":
        return <ShippingInPost shipping={cart.shipping} />
      case "standard":
        return <ShippingCourier shipping={cart.shipping} />
      default:
        throw new Error("there is no such shipping option")
    }
  }

  if (!cart) {
    return ""
  }

  if (!cart.shipping.service) {
    return ""
  }

  return (
    <Wrapper>
      <h3>Adres dostawy</h3>
      {selectedShipping(cart.shipping.service)}
    </Wrapper>
  )
}

export default ShippingData
