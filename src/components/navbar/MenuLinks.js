import React from "react"
import { Link } from "gatsby"
import ShopCategoriesMenu from "../shop/ShopCategoriesMenu"
import styled from "styled-components"
import { linkBorderIn } from "../styled/mixins/mixins"
import { staticLinks } from "../../utils/constants/staticLinks"
/* import { dataLayerLinkPush } from "../utils/functions/dataLayer "*/

const NavItem = styled.li`
  text-decoration: none;
  margin-right: 3.5em;
  letter-spacing: 4px;
  font-weight: ${({ theme }) => theme.fonts.fontWeight.normal};
  font-size: ${({ theme }) => theme.fonts.fontSize.xl};
  ${linkBorderIn}

  @media (max-width: 1710px) {
    margin-right: 2.5em;
    font-size: ${({ theme }) => theme.fonts.fontSize.lg};
  }

  @media (max-width: 1300px) {
    margin-right: 1.5em;
    letter-spacing: 3px;
  }

  @media (max-width: 1100px) {
    padding: ${({ theme }) => theme.spaces.padding.large};
    font-size: ${({ theme }) => theme.fonts.fontSize.xl};
    text-align: left;
    z-index: 6;

    .border {
      display: block;
    }
    :after {
      content: "";
      display: block;
      position: absolute;
      width: 60%;
      bottom: 0;
      left: 0;
      height: 1px;
      border-bottom: 1px solid ${({ theme }) => theme.colors.primary_opacity};
    }
  }

  .active {
    :after {
      content: "";
      position: absolute;
      width: 100%;
      z-index: -1;
      left: 0;
      right: 100%;
      bottom: 0;
      background: #9a6b50;
      height: 1px;
    }
  }
`

const Categories = styled.ul`
  display: none;
  font-weight: ${({ theme }) => theme.fonts.fontWeight.thin};

  @media (max-width: 1000px) {
    display: flex;
    flex-direction: column;
    margin: ${({ theme }) => theme.spaces.margin.large} 0;
  }

  li {
    padding-left: 4em;
    padding-bottom: ${({ theme }) => theme.spaces.padding.big};
    text-transform: uppercase;
    letter-spacing: 2px;
  }

  .activeMobile {
    font-weight: bolder;
    color: ${({ theme }) => theme.colors.black};
  }
`

const MenuLinks = () => {
  const {
    pages: {
      staticPages: { blog, sklep, oNas, warsztaty },
    },
  } = staticLinks
  return (
    <>
      <NavItem>
        <Link
          to={sklep}
          activeClassName="active"
          /* onClick={() =>
            dataLayerLinkPush("view_items_list", "shop", "main-shop-page")
          } */
        >
          sklep
        </Link>
      </NavItem>
      <Categories>
        <ShopCategoriesMenu />
      </Categories>
      <NavItem className="border">
        <Link to={blog} activeClassName="active">
          blog
        </Link>
      </NavItem>
      <NavItem className="border">
        <Link to={oNas} activeClassName="active">
          o nas
        </Link>
      </NavItem>
      <NavItem className="border">
        <Link to={warsztaty} activeClassName="active">
          warsztaty
        </Link>
      </NavItem>
    </>
  )
}

export default MenuLinks
