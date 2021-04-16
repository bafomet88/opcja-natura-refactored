import React, { useContext, useState, useEffect } from "react"
import styled from "styled-components"
import { CartContext } from "../../context/cartContext"

const Wrapper = styled.section`
  position: relative;

  .active {
    border: 1px solid #000;
  }
`

const BoxWrapper = styled.div`
  display: flex;
`

const BoxItem = styled.ul`
  display: flex;
  margin-left: 2em;
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
  position: relative;
`

const DeliveryMethods = () => {
  const [activeShipping, setActiveShipping] = useState(null)

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

  useEffect(() => {
    if (cart.shipping.service) {
      setActiveShipping(cart.shipping.service)
    }
  }, [cart.shipping.service])

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
      {shippingMethods ? (
        <>
          <BoxWrapper>
            {shippingMethods.map((item, index) => (
              <BoxItem
                key={item.id}
                onClick={() => handleShipping(item.id)}
                className={`${item.id === activeShipping && "active"}`}
              >
                <Icon>{index + 1}</Icon>
                <Title>{item.name}</Title>
                <Price>{item.price}</Price>
              </BoxItem>
            ))}
          </BoxWrapper>
          <Summary>
            <h5>Koszty dostawy</h5>
            <span>20</span>
          </Summary>
        </>
      ) : (
        <div>ładowanie opcji dostawy...</div>
      )}
    </Wrapper>
  )
}

export default DeliveryMethods
