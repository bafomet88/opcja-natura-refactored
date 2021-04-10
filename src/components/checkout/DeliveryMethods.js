import React, { useState } from "react"
import styled from "styled-components"

const Wrapper = styled.section`
  position: relative;
`

const Box = styled.div`
  display: flex;
`

const Boxes = styled.ul`
  display: flex;

  .active {
    border: 1px solid #000;
  }
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

const deliveryData = [
  {
    Id: "1",
    Name: "Odbiór osobisty",
    Icon: "1",
    Price: 0,
  },
  {
    Id: "2",
    Name: "Dostawa kurierem",
    Icon: "2",
    Price: 11,
  },
  {
    Id: "3",
    Name: "Paczkomaty 24/7",
    Icon: "3",
    Price: 11,
  },
]

const DeliveryMethod = ({ isActive, handleActiveDelivery }) => {
  return (
    <Wrapper>
      <Boxes>
        {deliveryData.map(item => (
          <Box
            onClick={() => handleActiveDelivery(item.Id)}
            className={`${item.Id === isActive && "active"}`}
          >
            <Icon>{item.Icon}</Icon>
            <Title>{item.Name}</Title>
            <Price>{item.Price}</Price>
          </Box>
        ))}
      </Boxes>
      <Summary>
        <h5>Koszty dostawy</h5>
        <span>20</span>
      </Summary>
    </Wrapper>
  )
}

export default DeliveryMethod
