import React, { useEffect } from "react"
import styled from "styled-components"
import Layout from "../../components/layout/Layout"
import {
  DeliveryMethods,
  CountrySelect,
  ShippingData,
} from "../../components/index"
import { addScript } from "../../utils/functions/addScript"
import { initInpostMap } from "../../utils/functions/initInpostMap"
import "../../utils/css/inpostModal.css"
import { form } from "../../components/styled/mixins/mixins"

const Wrapper = styled.section`
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 600px;
  ${form}
`

const DeliveryWrapper = styled.section`
  display: flex;
  flex-direction: column;
`

export default function dostawa({ location }) {
  useEffect(() => {
    if (typeof window !== "undefined" && window.document) {
      addScript("https://geowidget.easypack24.net/js/sdk-for-javascript.js")
      initInpostMap()
      console.log("initial use effect")
    }
  }, [])

  console.log("render delivery page")

  return (
    <Layout location={location}>
      <Wrapper>
        <DeliveryWrapper>
          <CountrySelect />
          <DeliveryMethods />
        </DeliveryWrapper>
        <ShippingData />
      </Wrapper>
    </Layout>
  )
}
