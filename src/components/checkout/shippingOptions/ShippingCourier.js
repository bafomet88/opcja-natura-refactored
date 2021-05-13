import React from "react"

const ShippingCourier = ({ shipping }) => {
  return (
    <>
      <h5>Kurier dostawa do domu</h5>
      <div>Ulica: tu będzie formularz</div>
      <div>Miejscowość: tu będzie formularz</div>
      <div>Numer Paczkomatu: tu będzie formularz</div>
      <h5>koszt dostawy: {shipping.price}</h5>
    </>
  )
}

export default ShippingCourier
