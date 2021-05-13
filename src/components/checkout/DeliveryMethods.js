import React, { useContext, useState, useEffect } from "react"
import styled from "styled-components"
import { CartContext } from "../../context/cartContext"

import { financial } from "../../utils/functions/financial"

const Wrapper = styled.section`
  position: relative;

  .active {
    border: 1px solid #000;
  }
`

const BoxWrapper = styled.div`
  display: flex;
  justify-content: space-around;
`

const BoxItem = styled.ul`
  display: flex;
  cursor: pointer;
  padding: 10px;
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
  display: flex;
  justify-content: center;
  margin-top: 2em;
`

const DeliveryMethods = () => {
  const {
    cart,
    shippingMethods,
    handleSetShipping,
    handleUpdateShippingInPost,
  } = useContext(CartContext)

  const openModal = () => {
    easyPack.modalMap(
      function (point, modal) {
        console.log(point)
        handleUpdateShippingInPost(
          point.address.line1,
          point.name,
          point.address_details.city,
          point.address_details.post_code
        )
        modal.closeModal()
      },
      { width: 500, height: 600 }
    )
  }

  const handleShipping = shippingId => {
    if (shippingId === "express") {
      openModal()
      handleSetShipping(shippingId)
    } else {
      handleSetShipping(shippingId)
    }
  }
  console.log("deliveryMethods render")

  return (
    <Wrapper>
      <h3>Wybierz opcje dostawy:</h3>
      {shippingMethods ? (
        <>
          <BoxWrapper>
            {shippingMethods.map(item => (
              <BoxItem
                key={item.id}
                onClick={() => handleShipping(item.id)}
                className={`${item.id === cart.shipping.service && "active"}`}
              >
                {/* <Icon>{index + 1}</Icon> */}
                <Title>{item.name}</Title>
                <Price>{financial(item.price, "PLN")}</Price>
              </BoxItem>
            ))}
          </BoxWrapper>
          <Summary>
            <h5>Koszty dostawy: </h5>
            <span>{cart.shipment_price}</span>
          </Summary>
        </>
      ) : (
        <div>ładowanie opcji dostawy...</div>
      )}
    </Wrapper>
  )
}

export default DeliveryMethods
