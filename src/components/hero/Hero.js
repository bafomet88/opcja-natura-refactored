import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import { getImage } from "gatsby-plugin-image"
import styled from "styled-components"
import { BgImage } from "gbimage-bridge"

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
              formats: [AUTO, WEBP]
              placeholder: BLURRED
              quality: 90
            )
          }
        }
      }
    `
  )
  const pluginImage = getImage(placeholderImage)

  // Use like this:
  /*   const bgImage = convertToBgImage(image) */

  const StyledBanner = styled(BgImage)`
    height: 95vh;
    position: relative;
    margin-top: -10rem;
    display: grid;
  `

  return (
    <StyledBanner Tag="section" image={pluginImage}>
      {children}}
    </StyledBanner>
  )
}
export default GbiBridged
