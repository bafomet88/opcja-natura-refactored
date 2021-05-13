import React, { useContext } from "react"
import styled from "styled-components"
import Layout from "../../components/layout/Layout"
import { CustomerData } from "../../components/index"
import { CartContext } from "../../context/cartContext"
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

export default function adres({ location }) {
  const { cart } = useContext(CartContext)

  console.log("render adres page", cart)

  return (
    <Layout location={location}>
      <Wrapper>{cart && <CustomerData />}</Wrapper>
    </Layout>
  )
}
