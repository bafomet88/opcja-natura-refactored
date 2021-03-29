import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import ShopCategoriesMenu from "./ShopCategoriesMenu"
/* import { dataLayerLinkPush } from "../utils/functions/dataLayer" */

const Wrapper = styled.nav`
  padding-left: ${({ theme }) => theme.spaces.padding.base};
  position: sticky;
  top: 10em;
  h5 {
    font-weight: ${({ theme }) => theme.fonts.fontWeight.normal};
    text-transform: uppercase;
    letter-spacing: 3px;
  }
`

const CategoriesLinks = styled.ul`
  padding-left: ${({ theme }) => theme.spaces.padding.base};
  font-weight: ${({ theme }) => theme.fonts.fontWeight.thin};
  line-height: 4em;

  li {
    color: ${({ theme }) => theme.colors.secondary};
    letter-spacing: 1px;
  }

  .activeMobile {
    font-weight: ${({ theme }) => theme.fonts.fontWeight.normal};
    color: ${({ theme }) => theme.colors.black};
  }
`

const ShopMenu = () => {
  return (
    <Wrapper>
      <Link to="/">
        <h5>Sklep</h5>
      </Link>

      <CategoriesLinks>
        <ShopCategoriesMenu />
      </CategoriesLinks>
    </Wrapper>
  )
}

export default ShopMenu
