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
    case "SET_CUSTOMER_INFO":
      return { ...currCart, cart: action.cart }
    case "SET_DEFAULT_COUNTRY":
      return { ...currCart, cart: action.cart }
    default:
      throw new Error("error in reducer")
  }
}

const httpReducer = (curr, action) => {
  switch (action.type) {
    case "SEND":
      return { ...curr, loading: true }
    case "RESPONSE":
      return { ...curr, loading: false }
    case "ERROR":
      return { ...curr, loading: false, message: "Błąd. Spróbuj ponownie" }
    /*     case "COUPON_ERROR":
      return {...curr, loading: false, message: "Nie ma takiego kuponu"}
    case "COUPON_ADDED":
      return {...curr, loading: false, message: "Kupon dodany poprawnie"}
    case "COMMENT_ADDED":
      return {...curr, message: "Komentarz dodany"} */
    default:
      throw new Error("error in httpReducer")
  }
}

const CartContextProvider = ({ children }) => {
  const [cart, dispatchCart] = useReducer(cartReducer, {})
  const [httpState, dispatchHttp] = useReducer(httpReducer, {
    loading: false,
    message: "",
  })
  /* const [isLoading, setIsLoading] = useState(false) */
  const [shippingMethods, setShippingMethods] = useState(null)
  const [cartVisible, setCartVisible] = useState(false)
  const [couponMessage, setCouponMessage] = useState("")
  const [commentMessage, setCommentMessage] = useState("")

  // initial fetch cart. Fetch it with defaoult PL as shipping and billing country
  const fetchCart = async () => {
    let cart = await swell.cart.get()

    if (!cart) {
      cart = await swell.cart.update({
        billing: {
          country: "PL",
        },
        shipping: {
          country: "PL",
        },
      })
    }
    dispatchCart({ type: "SET_CART", cart: cart })
    console.log("SET_CART", cart)
  }

  // Add item to cart
  const handleAddToCart = async (productId, quantity) => {
    try {
      const cart = await swell.cart.addItem(productId, quantity)

      dispatchCart({ type: "ADD_ITEM", cart: cart })
      setCartVisible(true)
      console.log("addToCart", cart)
    } catch (err) {
      console.log(err)
    }
  }

  // Update line item amount in cart
  const handleUpdateItem = async (productId, newQuantity) => {
    dispatchHttp({ type: "SEND" })
    try {
      const cart = await swell.cart.addItem(productId, {
        quantity: newQuantity,
      })
      dispatchCart({ type: "CHANGE_QTY", cart: cart })
      dispatchHttp({ type: "RESPONSE" })
      console.log("handleUpdateItem", cart)
    } catch (err) {
      dispatchHttp({ type: "ERROR" })
      console.log(err)
    }
  }

  //remove line item from cart
  const handleRemoveItem = async productId => {
    dispatchHttp({ type: "SEND" })
    try {
      const cart = await swell.cart.removeItem(productId)

      dispatchCart({ type: "REMOVE_ITEM", cart: cart })
      dispatchHttp({ type: "RESPONSE" })
      console.log("removeItem", cart)
    } catch (err) {
      dispatchHttp({ type: "ERROR" })
      console.log(err)
    }
  }

  // apply discount to cart
  const handleApplyCoupon = async couponName => {
    dispatchHttp({ type: "SEND" })
    try {
      const cart = await swell.cart.applyCoupon(couponName)
      dispatchCart({ type: "ADD_COUPON", cart: cart })
      setCouponMessage("Kupon dodany poprawnie")
    } catch (err) {
      setCouponMessage("Nie ma takiego kuponu")
      console.log(err)
    }
  }

  // apply comment to cart
  const handleApplyComment = useCallback(
    async commentText => {
      dispatchHttp({ type: "SEND" })
      try {
        const cart = await swell.cart.update({
          comments: commentText,
        })

        dispatchCart({ type: "ADD_COMMENT", cart: cart })
        setCommentMessage("Komentarz został dodany")
        console.log("comment added", cart)
      } catch (err) {
        setCommentMessage("Coś poszło nie tak")
        console.log(err)
      }
    },
    [cart.comments]
  )

  // set state of cart drawer
  const handleCartVisible = () => {
    setCartVisible(!cartVisible)
  }

  /* const handleUpadateCountry = async countryCode => {
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

    dispatchCart({ type: "SET_SHIPPING_COUNTRY", cart: cart })
    console.log("SET_SHIPPING_COUNTRY", cart)
  }
  */

  // Get shipping rates for cart.shipping.country
  const handleGetShipping = async () => {
    const response = await swell.cart.getShippingRates()

    setShippingMethods(response.services)
    console.log("GET COUNTRY", response.services)
  }

  // Set shipping method to cart
  const handleSetShipping = async shippingId => {
    dispatchHttp({ type: "SEND" })
    const cart = await swell.cart.update({
      shipping: {
        service: shippingId,
      },
    })

    dispatchCart({ type: "SET_SHIPPING_METHOD", cart: cart })
    dispatchHttp({ type: "RESPONSE" })
    console.log("SET_SHIPPING_METHOD", cart)
  }

  // Set cart billing (customer) information

  const handleUpdatCustomerInfo = async (
    firstname,
    lastName,
    email,
    phone,
    street,
    apartment,
    city,
    zipCode,
    country
  ) => {
    dispatchHttp({ type: "SEND" })
    const cart = await swell.cart.update({
      billing: {
        // name: email,
        first_name: firstname,
        last_name: lastName,
        address1: street,
        address2: `${apartment || ""}`,
        city: `${city || ""}`,
        zip: `${zipCode || ""}`,
        phone: phone,
        country: country,
      },
      metadata: {
        email: email,
      },
    })

    dispatchCart({ type: "SET_CUSTOMER_INFO", cart: cart })
    dispatchHttp({ type: "RESPONSE" })
    console.log("SET_CUSTOMER_INFO", cart)
  }

  // Update cart shipping info (including InPost selection)
  const handleUpdateShippingAddress = async (
    adress1,
    address2,
    city,
    zip,
    country,
    inPostMachineNo
  ) => {
    dispatchHttp({ type: "SEND" })
    const cart = await swell.cart.update({
      shipping: {
        address1: adress1,
        address2: `${address2 || ""}`,
        city: city,
        zip: zip,
        country: country,
      },
      metadata: {
        inPost: {
          machineNo: `${inPostMachineNo || ""}`,
        },
      },
    })

    dispatchCart({ type: "SET_SHIPPING_ADDRESS", cart: cart })
    dispatchHttp({ type: "RESPONSE" })
    console.log("SET_SHIPPING_ADRESS", cart)
  }

  useEffect(() => {
    fetchCart()
  }, [])

  const value = useMemo(
    () => ({
      cart: cart.cart,
      isLoading: httpState.loading,
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
      // handleUpadateCountry,
      handleGetShipping,
      shippingMethods,
      handleSetShipping,
      handleUpdateShippingAddress,
      handleUpdatCustomerInfo,
    }),
    [
      cart,
      httpState,
      shippingMethods,
      couponMessage,
      commentMessage,
      cartVisible,
    ]
  )

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}

export default CartContextProvider
