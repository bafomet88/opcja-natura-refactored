import React, { useContext, useState, useEffect } from "react"
import styled from "styled-components"
import Layout from "../../components/layout/Layout"

import { DeliveryMethods, BillingInPost } from "../../components/index"
import { addScript } from "../../utils/functions/addScript"
import { initInpostMap } from "../../utils/functions/initInpostMap"
import { CartContext } from "../../context/cartContext"
import "../../utils/css/inpostModal.css"

const DeliveryWrapper = styled.section`
  max-width: 900px;
  display: flex;
  flex-direction: column;
  align-items: center;
`

const openModal = () => {
  easyPack.modalMap(
    function (point, modal) {
      console.log(point)
      modal.closeModal()
    },
    { width: 500, height: 600 }
  )
}

export default function adres({ location }) {
  const { cart } = useContext(CartContext)
  const [activeDeliveryId, setActiveDeliveryId] = useState(null)

  const handleActiveDelivery = deliveryId => {
    setActiveDeliveryId(deliveryId)
  }

  useEffect(() => {
    if (typeof window !== "undefined" && window.document) {
      addScript("https://geowidget.easypack24.net/js/sdk-for-javascript.js")
      initInpostMap()
      console.log("initial use effect")
    }
  }, [])

  console.log("render adres page", cart)

  return (
    <Layout location={location}>
      {cart && (
        <>
          <DeliveryWrapper>
            <DeliveryMethods
              isActive={activeDeliveryId}
              handleActiveDelivery={handleActiveDelivery}
            />
          </DeliveryWrapper>
          <BillingInPost />
        </>
      )}
      <p onClick={() => openModal()}>open modal</p>
      <p onClick={() => handleGetShipping()}>GET SHIPPING</p>
    </Layout>
  )
}
