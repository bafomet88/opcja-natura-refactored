import React from "react"
import styled from "styled-components"
import CartIcon from "../icons/CartIcon"
import UserIcon from "../icons/UserIcon"

const Wrapper = styled.div`
  align-self: center;
  justify-self: end;

  .checkout_button {
    margin-left: ${({ theme }) => theme.spaces.margin.vertical};

    @media (min-width: 550px) {
      ${({ theme }) => theme.spaces.margin.big};
    }
  }

  .user-button {
    display: none;
    @media (min-width: 550px) {
      display: inline;
    }
  }
`

const Icons = () => {
  return (
    <Wrapper>
      <UserIcon className="user_navbar" />
      <CartIcon className="checkout_navbar" />
    </Wrapper>
  )
}

export default Icons
