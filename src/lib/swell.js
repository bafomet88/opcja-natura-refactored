import swell from "swell-js"

export const swellCommerce = swell.init(
  process.env.GATSBY_SWELL_STORE_NAME,
  process.env.GATSBY_SWELL_PUBLIC_KEY
)
