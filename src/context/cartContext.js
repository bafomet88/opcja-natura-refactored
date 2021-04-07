import React, { useState, useEffect, useCallback } from "react"
import swell from "swell-js"

export const CartContext = React.createContext()

/* const cartReducer = (currCart, action) => {
  switch (action.type) {
    case "SET_CART":
      return action.cart;
    case "ADD_ITEM":
    case "CHANGE_QTY":
    case "DELETE_ITEM":
    case "ADD_COUPON":
    case "ADD_COMMENT":
  }
} */

const CartContextProvider = ({ children }) => {
  const [cart, setCart] = useState(null)
  const [cartVisible, setCartVisible] = useState(false)
  const [couponMessage, setCouponMessage] = useState("")
  const [commentMessage, setCommentMessage] = useState("")

  const fetchCart = async () => {
    const cart = await swell.cart.get()

    setCart(cart)
    console.log("fetchCart", cart)
  }

  const handleAddToCart = useCallback(
    async (productId, quantity) => {
      const cart = await swell.cart.addItem(productId, quantity)

      setCart(cart)
      setCartVisible(true)
      console.log("addToCart", cart)
    },
    [cart]
  )

  const handleUpdateItem = async (productId, newQuantity) => {
    const cart = await swell.cart.addItem(productId, { quantity: newQuantity })

    setCart(cart)
    console.log("handleUpdateItem", cart)
  }

  const handleRemoveItem = async productId => {
    const cart = await swell.cart.removeItem(productId)

    setCart(cart)
    console.log("removeItem", cart)
  }

  const handleApplyCoupon = useCallback(
    async couponName => {
      try {
        const cart = await swell.cart.applyCoupon(couponName)
        setCart(cart)
        setCouponMessage("Kupon dodany")
      } catch (err) {
        console.log(err)
        setCouponMessage("Stała się kupa")
      }
    },
    [cart]
  )

  const handleApplyComment = useCallback(
    async commentText => {
      const cart = await swell.cart.update({
        metadata: { customerComment: commentText },
      })

      setCart(cart)
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
        cart,
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
