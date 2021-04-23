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

export const form = css`
  /* form starting stylings ------------------------------- */
  .group {
    position: relative;
    margin-bottom: 45px;
    margin-right: 10px;
  }
  input {
    font-size: 1em;
    padding: 10px 10px 10px 5px;
    display: block;
    width: 120px;
    border: none;
    border-bottom: 1px solid #757575;
  }
  input:focus {
    outline: none;
  }

  /* LABEL ======================================= */
  label {
    color: #999;
    font-size: 1em;
    font-weight: normal;
    position: absolute;
    pointer-events: none;
    left: 5px;
    top: 10px;
    transition: 0.2s ease all;
  }

  /* active state */
  input:focus ~ label,
  input:valid ~ label {
    top: -20px;
    font-size: 14px;
    color: #5264ae;
  }

  /* BOTTOM BARS ================================= */
  .bar {
    position: relative;
    display: block;
    width: 120px;
  }
  .bar:before,
  .bar:after {
    content: "";
    height: 2px;
    width: 0;
    bottom: 1px;
    position: absolute;
    background: #5264ae;
    transition: 0.2s ease all;
  }
  .bar:before {
    left: 50%;
  }
  .bar:after {
    right: 50%;
  }

  /* active state */
  input:focus ~ .bar:before,
  input:focus ~ .bar:after {
    width: 50%;
  }

  /* HIGHLIGHTER ================================== */
  .highlight {
    position: absolute;
    height: 60%;
    width: 100px;
    top: 25%;
    left: 0;
    pointer-events: none;
    opacity: 0.5;
  }

  /* active state */
  input:focus ~ .highlight {
    animation: inputHighlighter 0.3s ease;
  }

  /* ANIMATIONS ================ */
  @-webkit-keyframes inputHighlighter {
    from {
      background: #5264ae;
    }
    to {
      width: 0;
      background: transparent;
    }
  }
  @-moz-keyframes inputHighlighter {
    from {
      background: #5264ae;
    }
    to {
      width: 0;
      background: transparent;
    }
  }
  @keyframes inputHighlighter {
    from {
      background: #5264ae;
    }
    to {
      width: 0;
      background: transparent;
    }
  }
`
