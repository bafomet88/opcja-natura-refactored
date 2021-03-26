import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import { getImage } from "gatsby-plugin-image"
import styled from "styled-components"
import { convertToBgImage } from "gbimage-bridge"
import BackgroundImage from "gatsby-background-image"

const GbiBridged = ({ children }) => {
  const { placeholderImage } = useStaticQuery(
    graphql`
      query {
        placeholderImage: file(
          relativePath: { eq: "hero/opcja-natura_hero.jpg" }
        ) {
          childImageSharp {
            gatsbyImageData(
              width: 1920
              placeholder: BLURRED
              formats: [AUTO, WEBP, AVIF]
            )
          }
        }
      }
    `
  )
  const image = getImage(placeholderImage)

  // Use like this:
  const bgImage = convertToBgImage(image)

  const StyledBanner = styled(BackgroundImage)`
    height: 95vh;
    position: relative;
    margin-top: -10rem;
    display: grid;
  `

  return (
    <StyledBanner
      Tag="section"
      // Spread bgImage into BackgroundImage:
      {...bgImage}
      preserveStackingContext
    >
      <div style={{ minHeight: 1000, minWidth: 1000 }}></div>
      {children}}
    </StyledBanner>
  )
}
export default GbiBridged
