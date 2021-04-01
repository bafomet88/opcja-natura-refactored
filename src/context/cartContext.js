import React, { useState, useEffect } from "react"
import swell from "swell-js"

export const CartContext = React.createContext()

const CartContextProvider = ({ children }) => {
  const [cart, setCart] = useState({})
  const [cartVisible, setCartVisible] = useState(false)
  const [couponMessage, setCouponMessage] = useState("")

  const fetchCart = async () => {
    const cart = await swell.cart.get()

    setCart(cart)
    console.log("fetchCart", cart)
  }

  const handleAddToCart = async (productId, quantity) => {
    const cart = await swell.cart.addItem(productId, quantity)

    setCart(cart)
    setCartVisible(true)
    console.log("addToCart", cart)
  }

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

  const handleApplyCoupon = async couponName => {
    try {
      const response = await swell.cart.applyCoupon(couponName)
      setCart(response.cart)
      setCouponMessage("Kupon dodany")
    } catch (err) {
      console.log(err)
      setCouponMessage("Stała się kupa")
    }
  }

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
        handleCartVisible,
        couponMessage,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}

export default CartContextProvider
