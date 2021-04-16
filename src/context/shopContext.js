import React, { useState, useEffect } from "react"
import swell from "swell-js"

//this is unused for now!!

export const ShopContext = React.createContext()

const ShopContextProvider = ({ children }) => {
  const [adminSettings, setAdminSettings] = useState({})

  const getAdminSettings = async () => {
    const response = await swell.settings.get()

    setAdminSettings(response)
    console.log("SET ADMIN SETTINGS", response)
  }

  useEffect(() => {
    getAdminSettings()
  }, [])

  return (
    <ShopContext.Provider
      value={{
        adminSettings,
      }}
    >
      {children}
    </ShopContext.Provider>
  )
}

export default ShopContextProvider
