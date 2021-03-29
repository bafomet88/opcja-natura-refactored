import React, { useState, useEffect } from "react"
import swell from "swell-js"

swell.init(
  process.env.GATSBY_SWELL_STORE_NAME,
  process.env.GATSBY_SWELL_PUBLIC_KEY
)

export const CartContext = React.createContext()

const CartContextProvider = ({ children }) => {
  const [cart, setCart] = useState({})
  const [cartVisible, setCartVisible] = useState(false)

  const fetchCart = async () => {
    const cart = await swell.cart.get()

    setCart(cart)
    console.log("fetchCart", cart)
  }

  const handleAddToCart = async (productId, quantity) => {
    const cart = await swell.cart.addItem(productId, quantity)

    setCart(cart)
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

  const handleCartVisible = () => {
    setCartVisible(true)
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
      }}
    >
      {children}
    </CartContext.Provider>
  )
}

export default CartContextProvider
