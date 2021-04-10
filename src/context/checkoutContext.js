import React, { useState, useReducer, useEffect, useCallback } from "react"
import swell from "swell-js"

export const CheckoutContext = React.createContext()

const cartReducer = (currCart, action) => {
  switch (action.type) {
    case "UPDATE_BILLING":
      return { cart: action.cart }
    case "UPDATE_SHIPPING":
      return { ...currCart, cart: action.cart }
    default:
      throw new Error("error in reducer")
  }
}

const CheckoutContextProvider = ({ children }) => {
  const [cart, dispatchCart] = useReducer(cartReducer, {})

  const handleUpadateShipping = async () => {
    await swell.cart.update({
      shipping: {
        name: "Julia Sanchez",
        address1: "560 Olive Drive",
        address2: "",
        city: "Ellinwood",
        state: "KS",
        zip: "67526",
        country: "US",
        phone: "620-564-3737",
        price: 9,
      },
    })

    dispatchCart({ type: "UPDATE_SHIPPING", cart: cart })
    console.log("UPDATE_SHIPPING", cart)
  }

  return (
    <CheckoutContext.Provider
      value={{
        handleUpadateShipping,
      }}
    >
      {children}
    </CheckoutContext.Provider>
  )
}

export default CheckoutContextProvider
