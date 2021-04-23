import React, {
  useState,
  useReducer,
  useEffect,
  useCallback,
  useMemo,
} from "react"
import swell from "swell-js"

export const CartContext = React.createContext()

const cartReducer = (currCart, action) => {
  switch (action.type) {
    case "SET_CART":
      return { cart: action.cart, loading: false }
    case "INIT":
      return { ...currCart, loading: true }
    case "ADD_ITEM":
      return { ...currCart, cart: action.cart, loading: false }
    case "CHANGE_QTY":
      return { ...currCart, cart: action.cart, loading: false }
    case "REMOVE_ITEM":
      return { ...currCart, cart: action.cart, loading: false }
    case "ADD_COUPON":
      return { ...currCart, cart: action.cart, loading: false }
    case "ADD_COMMENT":
      return { ...currCart, cart: action.cart, loading: false }
    case "SET_SHIPPING_COUNTRY":
      return { ...currCart, cart: action.cart, loading: false }
    case "SET_SHIPPING_METHOD":
      return { ...currCart, cart: action.cart, loading: false }
    case "SET_SHIPPING_ADDRESS":
      return { ...currCart, cart: action.cart, loading: false }
    case "SET_SHIPPING_INPOST":
      return { ...currCart, cart: action.cart, loading: false }
    default:
      throw new Error("error in reducer")
  }
}

const CartContextProvider = ({ children }) => {
  const [cart, dispatchCart] = useReducer(cartReducer, {})
  /* const [isLoading, setIsLoading] = useState(false) */
  const [shippingMethods, setShippingMethods] = useState(null)
  const [cartVisible, setCartVisible] = useState(false)
  const [couponMessage, setCouponMessage] = useState("")
  const [commentMessage, setCommentMessage] = useState("")

  const fetchCart = async () => {
    const cart = await swell.cart.get()

    dispatchCart({ type: "SET_CART", cart: cart })
    console.log("fetchCart", cart)
  }

  const handleAddToCart = async (productId, quantity) => {
    dispatchCart({ type: "INIT" })
    try {
      const cart = await swell.cart.addItem(productId, quantity)

      dispatchCart({ type: "ADD_ITEM", cart: cart })
      setCartVisible(true)
      console.log("addToCart", cart)
    } catch (err) {
      console.log(err)
    }
  }

  const handleUpdateItem = async (productId, newQuantity) => {
    dispatchCart({ type: "INIT" })
    const cart = await swell.cart.addItem(productId, { quantity: newQuantity })

    dispatchCart({ type: "CHANGE_QTY", cart: cart })
    console.log("handleUpdateItem", cart)
  }

  const handleRemoveItem = async productId => {
    const cart = await swell.cart.removeItem(productId)

    dispatchCart({ type: "ADD_ITEM", cart: cart })
    console.log("removeItem", cart)
  }

  const handleApplyCoupon = async couponName => {
    try {
      const cart = await swell.cart.applyCoupon(couponName)
      dispatchCart({ type: "ADD_COUPON", cart: cart })
      setCouponMessage("Kupon dodany")
    } catch (err) {
      console.log(err)
      setCouponMessage("Stała się kupa")
    }
  }

  const handleApplyComment = useCallback(
    async commentText => {
      const cart = await swell.cart.update({
        comments: commentText,
      })

      dispatchCart({ type: "ADD_COMMENT", cart: cart })
      setCommentMessage("Komentarz został dodany")
      console.log("comment added", cart)
    },
    [cart.comments]
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
        address1: null,
        address2: null,
        city: null,
        zip: null,
      },
      shipping: {
        country: `${countryCode}`,
        address1: null,
        address2: null,
        city: null,
        zip: null,
      },
    })

    dispatchCart({ type: "handleUpadateCountry", cart: cart })
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

  const value = useMemo(
    () => ({
      cart: cart.cart,
      loading: cart.loading,
      cartVisible,
      setCartVisible,
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
    }),
    [
      cart,
      cart.loading,
      shippingMethods,
      couponMessage,
      commentMessage,
      cartVisible,
    ]
  )

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}

export default CartContextProvider
