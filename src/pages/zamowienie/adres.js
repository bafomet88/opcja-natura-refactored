import React, { useContext, useState, useEffect } from "react"
import styled from "styled-components"
import Layout from "../../components/layout/Layout"
import {
  DeliveryMethods,
  CountrySelect,
  CustomerData,
  ShippingData,
} from "../../components/index"
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

export default function adres({ location }) {
  const { cart } = useContext(CartContext)

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
            <CountrySelect />
            <DeliveryMethods />
          </DeliveryWrapper>
          <CustomerData />
          <ShippingData />
        </>
      )}
    </Layout>
  )
}
