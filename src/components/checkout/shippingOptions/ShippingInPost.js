import React from "react"

const ShippingInPost = ({ shipping }) => {
  return (
    <>
      <h3>Paczkomat InPost 24/7</h3>
      <div>Ulica: {shipping.address1}</div>
      <div>Miejscowość: {shipping.city}</div>
      <div>Numer Paczkomatu: {shipping.address2}</div>
      <h3>koszt dostawy: {shipping.price}</h3>
    </>
  )
}

export default ShippingInPost
