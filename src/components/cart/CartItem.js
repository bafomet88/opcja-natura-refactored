import React, { useContext } from "react"
import styled from "styled-components"
import { StaticImage } from "gatsby-plugin-image"
import { BsPlus as Plus } from "react-icons/bs"
import { BiMinus as Minus } from "react-icons/bi"

import { financial } from "../../utils/functions/financial"

import { CartContext } from "../../context/cartContext"

const Wrapper = styled.ul`
  position: relative;
`

const ItemWrapper = styled.li`
  margin-top: 4em;
  display: grid;
  grid-template-rows: repeat(2);
  grid-template-columns: repeat(2);
`

const ItemHeader = styled.div`
  grid-column: 2 / end;
  grid-row: 1/2;
  width: 160px;
  margin-bottom: 3em;

  .cart-item-title {
    max-width: 98%;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    margin-bottom: 0.3em;
    font-weight: 400;
    color: ${({ theme }) => theme.colors.secondary};
  }

  .cart-item-price {
    font-size: ${({ theme }) => theme.fonts.fontSize.base};
  }
`

const ItemImage = styled.img`
  grid-column: 1/ 2;
  grid-row: 1/4;
  width: 130px;
  align-self: center;
`

const ItemFooter = styled.div`
  grid-column: 2 / end;
  grid-row: 3 / 4;
  display: flex;
  align-items: center;
  justify-content: space-between;

  span {
    text-transform: uppercase;
    letter-spacing: 1px;
    font-weight: 300;
  }
`

const QuantitySelector = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 2px;
  width: 100px;
  height: 40px;
  border: 1px solid ${({ theme }) => theme.colors.secondary_opacity};

  .icon {
    cursor: pointer;
    color: ${({ theme }) => theme.colors.secondary};
    width: 30px;
    height: 20px;
  }
`

const StyledMinus = styled(Minus)`
  visibility: ${props => (props.active === "true" ? "visible" : "hidden")};
`

const CartItem = item => {
  const { handleUpdateItem, handleRemoveItem } = useContext(CartContext)

  console.log("RENDER CART ITEM")

  return (
    <ItemWrapper key={item.id}>
      <ItemHeader>
        <h5 className="cart-item-title">{item.product.name}</h5>
        <span className="cart-item-price">{financial(item.price, "PLN")}</span>
      </ItemHeader>
      <ItemImage src={item.product.images[0].file.url} />
      <ItemFooter>
        <QuantitySelector>
          <StyledMinus
            className="icon"
            role="button"
            onClick={() => handleUpdateItem(item.product_id, -1)}
            active={item.quantity >= 2 ? "true" : undefined}
          />
          <p>{item.quantity}</p>
          <Plus
            className="icon"
            role="button"
            onClick={() => handleUpdateItem(item.product_id, 1)}
            active="true"
          />
        </QuantitySelector>
        <span role="button" onClick={() => handleRemoveItem(item.id)}>
          usuń
        </span>
      </ItemFooter>
    </ItemWrapper>
  )
}

export default CartItem
