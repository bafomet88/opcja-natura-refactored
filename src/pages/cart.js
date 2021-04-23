import React from "react"
import styled from "styled-components"
import Layout from "../components/layout/Layout"
import FilledCart from "../components/cart/FilledCart"
import EmptyCart from "../components/cart/EmptyCart"

const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
`

export default function CartPage({ location }) {
  /*   if (!cart) {
    return ""
  }

  if (!cart.items) {
    return <EmptyCart />
  } */

  return (
    <Layout location={location}>
      <Wrapper>
        <FilledCart />
      </Wrapper>
    </Layout>
  )
}
