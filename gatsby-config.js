require("dotenv").config({
  path: `.env.${
    process.env.FORCE_NODE_ENV || process.env.NODE_ENV || "development"
  }`,
})

module.exports = {
  /* Your site config here */
  plugins: [
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/assets/images/`,
      },
    },
    {
      resolve: "gatsby-source-swell",
      options: {
        storeId: "opcja-natura",
        secretKey: process.env.GATSBY_SWELL_SECRET_KEY,
        dataTypes: ["category", "product"],
      },
    },
  ],
}
