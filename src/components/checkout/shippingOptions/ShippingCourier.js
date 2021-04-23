import React from "react"

const ShippingCourier = ({ shipping }) => {
  return (
    <>
      <h3>Kurier dostawa do domu</h3>
      <div>Ulica: tu będzie formularz</div>
      <div>Miejscowość: tu będzie formularz</div>
      <div>Numer Paczkomatu: tu będzie formularz</div>
      <h3>koszt dostawy: {shipping.price}</h3>
    </>
  )
}

export default ShippingCourier
