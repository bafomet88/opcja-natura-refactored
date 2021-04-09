import { css } from "styled-components"

export const borderBefore = css`
  position: relative;

  ::before {
    content: "";
    width: 100%;
    position: absolute;
    top: 0;
    height: 1px;
    opacity: 0.9;
    color: ${({ theme }) => theme.colors.secondary};
    border: 1px solid ${({ theme }) => theme.colors.secondary_opacity};
  }
`

export const borderAfter = css`
  position: relative;

  ::after {
    content: "";
    width: 100%;
    position: absolute;
    bottom: 0;
    height: 1px;
    opacity: 0.9;
    color: ${({ theme }) => theme.colors.secondary};
    border: 1px solid ${({ theme }) => theme.colors.secondary_opacity};
  }
`
export const linkBorderOut = css`
  display: inline-block;
  color: #000;
  text-decoration: none;

  :after {
    content: "";
    display: block;
    width: 100%;
    height: 1px;
    background: #0b0a0a;
    transition: width 0.3s;
  }
  :hover::after {
    width: 0%;
  }
`

export const linkBorderIn = css`
  transition: all 200ms ease-in;
  position: relative;
  box-shadow: 0 0 1px rgba(0, 0, 0, 0);
  position: relative;
  overflow: hidden;

  :before {
    content: "";
    position: absolute;
    z-index: -1;
    left: 0;
    right: 100%;
    bottom: 0;
    background: #9a6b50;
    height: 1px;
    transition-property: right;
    transition-duration: 0.3s;
    transition-timing-function: ease-out;
  }
  :hover:before,
  :focus:before,
  :active:before {
    right: 0;
  }
`
