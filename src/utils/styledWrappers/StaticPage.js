/* import styled from "styled-components"
import Image from "gatsby-image"

export const Wrapper = styled.section`
  margin: ${({ theme }) => theme.spaces.margin.base} auto;
  width: 80%;

  @media (min-width: 800px) {
    background-color: ${({ theme }) => theme.colors.white};
    margin-top: -5em;
    z-index: 10;
    padding: ${({ theme }) => theme.spaces.padding.big};
  }

  @media (min-width: 1100px) {
    width: 60%;
  }

  @media (min-width: 1300px) {
    width: 40%;
  }

  .center {
    display: grid;
    justify-content: center;
    text-align: center;

    p {
      text-align: center;
    }
  }

  .bold {
    font-weight: ${({ theme }) => theme.fonts.fontWeight.normal};
    letter-spacing: 0.05em;
    text-transform: uppercase;
  }

  .info {
    margin: 1.5em 0;
  }
`

export const Title = styled.header`
  text-align: center;

  span {
    text-transform: uppercase;
    color: ${({ theme }) => theme.colors.secondary};
  }

  h1 {
    margin-top: ${({ theme }) => theme.spaces.margin.xxl};
    text-align: center;
    letter-spacing: 2px;
    font-weight: ${({ theme }) => theme.fonts.fontWeight.light};
  }
`

export const StyledImage = styled(Image)`
  max-height: 500px;
  margin: ${({ theme }) => theme.spaces.margin.xxl} auto;
`

export const Content = styled.article`
  h4 {
    text-transform: uppercase;
    padding: 0.5em 0;
    margin-top: 2em;
  }

  .border__in-menu {
    color: ${({ theme }) => theme.colors.primary};
    text-transform: uppercase;
    letter-spacing: 1px;
    cursor: pointer;
  }

  h1 {
    margin-top: ${({ theme }) => theme.spaces.margin.xxl};
    text-align: center;
    letter-spacing: 2px;
    font-weight: ${({ theme }) => theme.fonts.fontWeight.light};
  }

  p {
    text-align: justify;
    text-justify: inter-word;
    line-height: 1.8;
    margin-top: 0.6em;
  }

  blockquote {
    color: ${({ theme }) => theme.colors.secondary};
    font-size: ${({ theme }) => theme.fonts.fontSize.xl};
    padding-left: 0.4em;
    text-align: justify;
    text-justify: inter-word;
    margin-top: 2em;
    line-height: 1.8;
    font-style: italic;
  }

  .caption {
    padding-left: 20%;
    font-size: ${({ theme }) => theme.fonts.fontSize.xxl};
    letter-spacing: 1px;
  }
`
 */
