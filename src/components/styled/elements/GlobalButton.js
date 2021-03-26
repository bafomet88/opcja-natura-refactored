import React from "react"
import styled from "styled-components"
import PropTypes from "prop-types"

const StyledButton = styled.button`
  background-color: ${({ theme }) => theme.colors.white};
  padding: ${props => props.padding || "1em 2em"};
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.primary};
  letter-spacing: 0.1em;
  vertical-align: middle;
  border: 1px solid ${props => props.color || "#9a6b50"};
  transform: perspective(1px) translateZ(0);
  box-shadow: 0 0 1px rgba(0, 0, 0, 0);
  position: relative;
  transition-property: color;
  transition-duration: 0.3s;

  :before {
    content: "";
    position: absolute;
    z-index: -1;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(
      345deg,
      rgba(136, 66, 46, 1) 0%,
      rgba(252, 199, 155, 1) 50%,
      rgba(136, 66, 46, 1) 100%
    );
    transform: scaleX(0);
    transform-origin: 0 50%;
    transition-property: transform;
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

const Button = ({ text, color, padding }) => {
  return (
    <StyledButton color={color} padding={padding}>
      {text}
    </StyledButton>
  )
}

Button.defaultProps = {
  text: "czytaj więcej",
}

Button.propTypes = {
  text: PropTypes.string,
}

export default Button
