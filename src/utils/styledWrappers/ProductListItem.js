import styled from "styled-components"
/* import { GatsbyImage } from "gatsby-plugin-image" */
import FadeIn from "./FadeIn"

/* export const ProductImage = styled(GatsbyImage)`
  animation: ${FadeIn} ease 2s;
  max-width: 95%;
  margin: 0 auto;
` */

export const ProductLstWrapper = styled.article`
  animation: ${FadeIn} ease 2s;
  display: grid;
  grid-template-rows: 0.7fr auto auto auto auto;
  grid-gap: ${({ theme }) => theme.spaces.padding.base};
  align-content: space-between;
  margin-top: ${({ theme }) => theme.spaces.margin.xxl};

  .bottom-product {
    display: grid;
    align-items: space-evenly;
  }

  h3 {
    justify-self: center;
    align-self: center;
    text-align: center;
    letter-spacing: 3px;
    text-transform: uppercase;
    font-weight: ${({ theme }) => theme.fonts.fontWeight.thin};
    font-size: ${({ theme }) => theme.fonts.fontSize.xxl};
    color: ${({ theme }) => theme.colors.font};
  }

  span {
    margin-top: -2em;
    letter-spacing: 1px;
    color: ${({ theme }) => theme.colors.secondary};
    align-self: end;
    text-align: center;
  }

  .buy-section {
    justify-self: center;
  }

  .price-text {
    font-weight: ${({ theme }) => theme.fonts.fontWeight.light};
    color: ${({ theme }) => theme.colors.secondary};
    font-size: ${({ theme }) => theme.fonts.fontSize.xl};
    text-align: center;
  }
`

export const BuyButton = styled.button`
  background-color: ${({ theme }) => theme.colors.white};
  padding: 0.8em 1.2em;
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.primary};
  letter-spacing: 0.1em;
  vertical-align: middle;
  border: 1px solid #9a6b50;
  transform: perspective(1px) translateZ(0);
  box-shadow: 0 0 1px rgba(0, 0, 0, 0);
  position: relative;
  transition-property: color;
  transition-duration: 0.3s;

  @media (min-width: 800px) {
    padding: 0.9em 1.4em;
  }
  :before {
    content: "";
    position: absolute;
    z-index: -1;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: #9a6b50;
    transform: scaleX(0);
    transform-origin: 0 50%;
    transition: transform;
    transition-duration: 0.3s;
    transition-timing-function: ease-out;
  }

  :focus {
    border: 1px solid #fff;
  }

  :hover,
  :active {
    color: #fff;
  }

  :hover:before,
  :active:before {
    transform: scaleX(1);
  }
`
