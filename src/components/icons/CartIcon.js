import React, { useContext } from "react"
import styled from "styled-components"
import IconBusket from "../../assets/icons/IconBusket"

const StyledButton = styled.button`
  position: relative;

  .items-count-container {
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
    bottom: -6px;
    right: -6px;
    background: linear-gradient(
      345deg,
      rgba(136, 66, 46, 1) 0%,
      rgba(252, 199, 155, 1) 50%,
      rgba(136, 66, 46, 1) 100%
    );
    border-radius: 50%;
    height: 15px;
    width: 15px;
  }

  .items-count {
    font-size: ${({ theme }) => theme.fonts.fontSize.base};
    color: ${({ theme }) => theme.colors.white};
  }
`

const CartIcon = () => {
  return (
    <StyledButton className="checkout_button snipcart-checkout">
      <IconBusket className="navbar_icon" />
      <div className="items-count-container">
        <span className="items-count">2</span>
      </div>
    </StyledButton>
  )
}

export default CartIcon
