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
    default:
      throw new Error("error in reducer")
  }
}

const CartContextProvider = ({ children }) => {
  const [cart, dispatchCart] = useReducer(cartReducer, {})
  /*   const [cart, setCart] = useState(null) */
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
      }}
    >
      {children}
    </CartContext.Provider>
  )
}

export default CartContextProvider
