import React from "react"
import styled from "styled-components"
import Layout from "../components/layout/Layout"
import FilledCart from "../components/cart/FilledCart"

const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
`

export default function CartPage({ location }) {
  return (
    <Layout location={location}>
      <Wrapper>
        <FilledCart />
      </Wrapper>
    </Layout>
  )
}
