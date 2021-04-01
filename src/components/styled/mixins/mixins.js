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
