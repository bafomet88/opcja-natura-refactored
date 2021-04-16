import React, { useState, useReducer, useEffect, useCallback } from "react"
import swell from "swell-js"

export const CartContext = React.createContext()

const cartReducer = (currCart, action) => {
  switch (action.type) {
    case "SET_CART":
      return { cart: action.cart }
    case "ADD_ITEM":
      return { ...currCart, cart: action.cart }
    case "CHANGE_QTY":
      return { ...currCart, cart: action.cart }
    case "REMOVE_ITEM":
      return { ...currCart, cart: action.cart }
    case "ADD_COUPON":
      return { ...currCart, cart: action.cart }
    case "ADD_COMMENT":
      return { ...currCart, cart: action.cart }
    case "SET_SHIPPING_COUNTRY":
      return { ...currCart, cart: action.cart }
    case "SET_SHIPPING_METHOD":
      return { ...currCart, cart: action.cart }
    case "SET_SHIPPING_ADDRESS":
      return { ...currCart, cart: action.cart }
    case "SET_SHIPPING_INPOST":
      return { ...currCart, cart: action.cart }
    default:
      throw new Error("error in reducer")
  }
}

const CartContextProvider = ({ children }) => {
  const [cart, dispatchCart] = useReducer(cartReducer, {})
  const [shippingMethods, setShippingMethods] = useState(null)
  const [cartVisible, setCartVisible] = useState(false)
  const [couponMessage, setCouponMessage] = useState("")
  const [commentMessage, setCommentMessage] = useState("")

  const fetchCart = async () => {
    const cart = await swell.cart.get()

    dispatchCart({ type: "SET_CART", cart: cart })
    console.log("fetchCart", cart)
  }

  const handleAddToCart = useCallback(
    async (productId, quantity) => {
      const cart = await swell.cart.addItem(productId, quantity)

      dispatchCart({ type: "ADD_ITEM", cart: cart })
      setCartVisible(true)
      console.log("addToCart", cart)
    },
    [cart]
  )

  const handleUpdateItem = async (productId, newQuantity) => {
    const cart = await swell.cart.addItem(productId, { quantity: newQuantity })

    dispatchCart({ type: "CHANGE_QTY", cart: cart })
    console.log("handleUpdateItem", cart)
  }

  const handleRemoveItem = async productId => {
    const cart = await swell.cart.removeItem(productId)

    dispatchCart({ type: "ADD_ITEM", cart: cart })
    console.log("removeItem", cart)
  }

  const handleApplyCoupon = useCallback(
    async couponName => {
      try {
        const cart = await swell.cart.applyCoupon(couponName)
        dispatchCart({ type: "ADD_COUPON", cart: cart })
        setCouponMessage("Kupon dodany")
      } catch (err) {
        console.log(err)
        setCouponMessage("Stała się kupa")
      }
    },
    [cart.discounts]
  )

  const handleApplyComment = useCallback(
    async commentText => {
      const cart = await swell.cart.update({
        metadata: { customerComment: commentText },
      })

      dispatchCart({ type: "ADD_COMMENT", cart: cart })
      setCommentMessage("Komentarz został dodany")
      console.log("comment added", cart)
    },
    [cart]
  )

  const handleCartVisible = () => {
    setCartVisible(!cartVisible)
  }

  useEffect(() => {
    fetchCart()
    console.log("initial fetch cart fired")
  }, [])

  const handleUpadateCountry = async countryCode => {
    const cart = await swell.cart.update({
      billing: {
        country: `${countryCode}`,
      },
      shipping: {
        country: `${countryCode}`,
      },
    })

    dispatchCart({ type: "SET_SHIPPING_COUNTRY", cart: cart })
    console.log("SET_SHIPPING_COUNTRY", cart)
  }

  const handleGetShipping = async () => {
    const response = await swell.cart.getShippingRates()

    setShippingMethods(response.services)
    console.log("GET COUNTRY", response.services)
  }

  const handleSetShipping = async shippingId => {
    const cart = await swell.cart.update({
      shipping: {
        service: shippingId,
      },
    })

    dispatchCart({ type: "SET_SHIPPING_METHOD", cart: cart })
    console.log("SET_SHIPPING_METHOD", cart)
  }

  const handleUpdateShippingAddress = async (adress1, address2, city, zip) => {
    const cart = await swell.cart.update({
      shipping: {
        address1: `${adress1 || ""}`,
        address2: `${address2 || ""}`,
        city: `${city || ""}`,
        zip: `${zip || ""}`,
      },
      billing: {
        address1: `${adress1 || ""}`,
        address2: `${address2 || ""}`,
        city: `${city || ""}`,
        zip: `${zip || ""}`,
      },
    })

    dispatchCart({ type: "SET_SHIPPING_ADDRESS", cart: cart })
    console.log("SET_SHIPPING_ADRESS", cart)
  }

  const handleUpdateShippingInPost = async (adress1, machineNo, city, zip) => {
    const cart = await swell.cart.update({
      shipping: {
        address1: `${adress1 || ""}`,
        address2: `${machineNo || ""}`,
        city: `${city || ""}`,
        zip: `${zip || ""}`,
      },
    })

    dispatchCart({ type: "SET_SHIPPING_INPOST", cart: cart })
    console.log("SET_SHIPPING_INPOST", cart)
  }

  return (
    <CartContext.Provider
      value={{
        cart: cart.cart,
        cartVisible,
        handleAddToCart,
        handleCartVisible,
        handleUpdateItem,
        handleRemoveItem,
        handleApplyCoupon,
        handleApplyComment,
        handleCartVisible,
        couponMessage,
        commentMessage,
        handleUpadateCountry,
        handleGetShipping,
        shippingMethods,
        handleSetShipping,
        handleUpdateShippingAddress,
        handleUpdateShippingInPost,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}

export default CartContextProvider
