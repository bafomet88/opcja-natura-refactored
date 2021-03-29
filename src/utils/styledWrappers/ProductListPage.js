import React from "react"
import styled, { css } from "styled-components"

const ShopTitle = styled.header`
  display: grid;
  place-items: center;
  margin: ${({ theme }) => theme.spaces.margin.vertical} 0;
  ${({ before }) =>
    before &&
    css`
      padding-top: ${({ theme }) => theme.spaces.padding.big};
      position: relative;
      ::before {
        content: "";
        width: 100%;
        position: absolute;
        top: 0;
        height: 1px;
        opacity: 0.7;
        color: ${({ theme }) => theme.colors.secondary};
        border: 1px solid ${({ theme }) => theme.colors.secondary_opacity};
      }
    `};

  h1 {
    text-transform: uppercase;
    letter-spacing: 5px;
    font-weight: ${({ theme }) => theme.fonts.fontWeight.light};
    color: ${({ theme }) => theme.colors.primary};
  }

  p {
    text-align: center;
    line-height: 1.9;
    padding: 0 5%;

    @media (min-width: 800px) {
      padding: 0 20%;
    }

    @media (min-width: 1100px) {
      padding: 0 30%;
    }
  }
`

export const ShopHeader = ({ children, before }) => {
  return <ShopTitle before={before}> {children} </ShopTitle>
}

export const ShopWrapper = styled.section`
  display: grid;

  grid-template-columns: 1fr;
  grid-template-rows: auto;
  justify-content: space-evenly;
  grid-template-areas: "product ";
  grid-gap: ${({ theme }) => theme.spaces.margin.medium};

  @media (min-width: 1000px) {
    grid-template-columns: 0.2fr 1fr;
    grid-template-rows: auto;
    grid-template-areas: "sidebar product";
  }
  @media (min-width: 1150px) {
    margin: 0 ${({ theme }) => theme.spaces.margin.horizontal_small};
  }

  nav {
    display: none;

    @media (min-width: 1000px) {
      display: block;
      position: relative;
      grid-area: sidebar;
    }
  }

  .product-list {
    grid-area: product;
    display: grid;
    grid-template-columns: 1fr;
    grid-gap: ${({ theme }) => theme.spaces.margin.large};

    @media (min-width: 650px) {
      grid-template-columns: repeat(2, 1fr);
      grid-gap: ${({ theme }) => theme.spaces.margin.big};
    }

    @media (min-width: 1200px) {
      grid-template-columns: repeat(3, 1fr);
      grid-gap: ${({ theme }) => theme.spaces.margin.xxl};
    }
  }
`
