import { createGlobalStyle } from "styled-components"

const GlobalStyle = createGlobalStyle`
  :root {
    box-sizing: border-box;
  }

  *,
  *::before,
  *::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    -webkit-touch-callout:none;   
    -webkit-tap-highlight-color: transparent;
  }

  html {
    font-family: "Lato", sans-serif;
    font-size: ${({ theme }) => theme.fonts.fontSize.base};
    font-weight: ${({ theme }) => theme.fonts.fontWeight.normal};
    line-height: 1.5;
  
    @media (max-width: 650px) {
      font-size: ${({ theme }) => theme.fonts.fontSize.xs};
    }
  }

  p,
  span {
    letter-spacing: 0.02em;
    color: ${({ theme }) => theme.colors.font};
    font-weight: ${({ theme }) => theme.fonts.fontWeight.light};
    line-height: 1.6;
  } 

h1,
h2,
h3,
h4,
h5 {
  letter-spacing: 0.1rem;
  line-height: 1.25;
  margin-bottom: 0.75em;
  font-weight: ${({ theme }) => theme.fonts.fontWeight.normal};
  color: ${({ theme }) => theme.colors.titles}


}

h1 {
  font-size: ${({ theme }) => theme.fonts.fontSize["4xl"]};
  
 
  @media (max-width: 650px) {
      font-size: ${({ theme }) => theme.fonts.fontSize["3xl"]};
    }
}
h2 {
  font-size: ${({ theme }) => theme.fonts.fontSize["3xl"]};

  @media (max-width: 650px) {
      font-size: ${({ theme }) => theme.fonts.fontSize["2xl"]};
    }
}
h3 {
  font-size: ${({ theme }) => theme.fonts.fontSize["2xl"]};

  @media (max-width: 650px) {
      font-size: ${({ theme }) => theme.fonts.fontSize.xxl};
    }
}
h4 {
  font-size: ${({ theme }) => theme.fonts.fontSize.xxl};

  @media (max-width: 650px) {
      font-size: ${({ theme }) => theme.fonts.fontSize.xl};
    }
}

h5 {
  font-size: ${({ theme }) => theme.fonts.fontSize.xl};

@media (max-width: 650px) {
    font-size: ${({ theme }) => theme.fonts.fontSize.lg};
  }
}

  ol,
  ul {
    list-style: none;
  }

  img {
    width: 100%;
    display: block;
  }

  a {
  color: inherit; 
  text-decoration: inherit; 
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  -webkit-tap-highlight-color: transparent;

  :active,
  :focus {
   outline: 0;
}
}


button {
  background-color: transparent;
  font-family: "Lato", sans-serif;
  cursor: pointer;
  border: transparent;

  :focus {
    border: none;
    outline: none;
  }
}

.product-title {
  letter-spacing: 4px;
    text-transform: uppercase;
    font-weight: ${({ theme }) => theme.fonts.fontWeight.light};
    font-size: ${({ theme }) => theme.fonts.fontSize.xxl};

    @media (min-width: 980px) {
   font-size: ${({ theme }) => theme.fonts.fontSize["2xl"]};

  } 
}

.product-title-span {
  color: ${({ theme }) => theme.colors.secondary};
    margin-top: -0.5em;
    text-transform: uppercase;

    @media (min-width: 980px) {
      font-size: ${({ theme }) => theme.fonts.fontSize.xl};
  }
}

.product-price-text {
    color: ${({ theme }) => theme.colors.secondary};
  }

  .product-info {
    display: flex;
    align-items: center;
    margin: ${({ theme }) => theme.spaces.margin.large} 0;
    font-weight: ${({ theme }) => theme.fonts.fontWeight.light};
    color: ${({ theme }) => theme.colors.font};
    font-size: ${({ theme }) => theme.fonts.fontSize.xl};
    white-space: pre-wrap;

    @media (min-width: 980px) {
      margin-right: ${({ theme }) => theme.spaces.margin.xxl};
    }
  }

  .product-capacity {
    color: ${({ theme }) => theme.colors.font};
  }

  .product-price-text {
    color: ${({ theme }) => theme.colors.secondary};
  }

  .point-wrapper > p{
    color: #fff;
  }


/* change dependencies styles 
  .swiper-button-next,
  .swiper-button-prev {
    color: rgba(109, 105, 105, 0.2);
  }

  .swiper-button-disabled {
    color: rgba(109, 105, 105, 0.15);
  }

  .snipcart-cart-button--highlight {
  background: linear-gradient(
    345deg,
    rgba(136, 66, 46, 1) 0%,
    rgba(252, 199, 155, 1) 50%,
    rgba(136, 66, 46, 1) 100%
  ) !important;
}

.snipcart__box--badge-highlight,
.snipcart-form-radio:checked + label::before {
  background: linear-gradient(
    331deg,
    rgba(136, 66, 46, 1) 0%,
    rgba(252, 199, 155, 1) 50%,
    rgba(136, 66, 46, 1) 100%
  ) !important;
}

.snipcart-checkbox:checked + label::before {
  border: 1px solid #9a6b50 !important;
  background-color: #9a6b50 !important;
  box-shadow: 0 2px 3px rgba(154, 107, 80, 0.3) !important;
}

.snipcart-modal__close-title {
  display: inline !important;
}

@media (min-width: 1000px) {
  .snipcart-modal__close-title {
    font-size: 1.5em !important;
    letter-spacing: 1px;
    height: unset !important;
    position: relative !important;
  }
}

.snipcart__actions--link,
.snipcart-signin__register-link,
.snipcart-signin__forgot-password {
  color: #9a6b50 !important;
}

.snipcart__icon--blue-dark path,
.snipcart-cart-button--secondary .snipcart__icon path {
  fill: #9a6b50 !important;
}

.snipcart__icon--blue-light path {
  fill: #9a6b50 !important;
}

.snipcart-hidden.snipcart-input {
  display: none;
}

.snipcart-cart-button--secondary {
  background: transparent !important;
  border: 1px solid #6e6a6a !important;
}

.snipcart-cart-button--secondary:hover {
  background-color: #fbb0a4 !important;
  border: 1px solid #fbb0a4 !important;
  transition: all 0.3s ease-in !important;
}

.snipcart__locker-button {
  margin-left: 50px !important;
  text-transform: uppercase !important;
  color: #9a6b50 !important;
  cursor: pointer;
}

.snipcart-cart-summary-fees__custom {
  margin-top: 1em !important;
}
.snipcart-shipping-rates-list-item--highlight {
  border: none !important;
  border-left: 2px solid #9a6b50 !important;
}

.snipcart-shipping-adress--locker {
  font-weight: lighter !important;
  line-height: 1.2em !important;
}

.shipping-note {
  font-weight: lighter !important;
  line-height: 1.5em !important;
  padding-top: 10px !important;
  letter-spacing: 0.01em !important;
  font-size: smaller !important;
}

.shipping-note-link {
  white-space: nowrap;
  text-align: right;
  padding-top: 10px !important;
}

.snipcart-delivery-note {
  padding: 1em 0 !important;
  font-weight: lighter !important;
}
*/
`

export default GlobalStyle
