export const financial = (price, currency) => {
  return `${Number.parseFloat(price).toFixed(2)} ${currency}`
}
