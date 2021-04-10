import React, { useContext, useState } from "react"
import styled from "styled-components"
import Layout from "../../components/layout/Layout"
import { useForm } from "react-hook-form"
import DeliveryMethods from "../../components/checkout/DeliveryMethods"

import { CartContext } from "../../context/cartContext"

const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
`

export default function Step1({ location }) {
  const [activeDeliveryId, setActiveDeliveryId] = useState(null)
  const { handleUpadateShipping } = useContext(CartContext)

  const { register, handleSubmit, errors } = useForm()

  const handleActiveDelivery = deliveryId => {
    setActiveDeliveryId(deliveryId)
  }
  return (
    <Layout location={location}>
      <Wrapper>
        <DeliveryMethods
          isActive={activeDeliveryId}
          handleActiveDelivery={handleActiveDelivery}
        />
      </Wrapper>
    </Layout>
  )
}
