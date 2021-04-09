import React, { useContext, useState, useRef, useEffect } from "react"
import MenuLinks from "./MenuLinks"
import styled, { css } from "styled-components"
import Icons from "./Icons"
import MainLogo from "../icons/MainLogo"
import UserIcon from "../icons/UserIcon"

import useScroll from "../../utils/hooks/useScroll"

const Navigation = styled.header`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  ${({ path }) =>
    path === "/"
      ? css`
          color: #fff;
          fill: #fff;
          border-bottom: 1px solid #fff;
          padding: ${({ theme }) => theme.spaces.padding.big};
        `
      : css`
          background-color: #fff;
          color: #9a6b50;
          fill: #9a6b50;
          border-bottom: 1px solid
            ${({ theme }) => theme.colors.primary_opacity};
          padding: 0.4em ${({ theme }) => theme.spaces.padding.big};
        `};
  ${({ visible, path }) =>
    visible &&
    path === "/" &&
    css`
      background-color: #fff;
      fill: #9a6b50;
      color: #9a6b50;
      border-bottom: 1px solid ${({ theme }) => theme.colors.primary_opacity};
      padding: 0.4em ${({ theme }) => theme.spaces.padding.big};
    `};
  position: sticky;
  top: 0px;
  align-items: center;
  text-transform: uppercase;
  transition: all 0.5s ease-out;
  margin-bottom: ${({ theme }) => theme.spaces.margin.xxl};
  z-index: 10;

  nav {
    align-self: center;
  }
`

const MenuItems = styled.ul`
  color: inherit;
  display: flex;
  height: 100%;
  align-items: center;

  @media (max-width: 1100px) {
    color: #000;
    flex-direction: column;
    align-items: flex-start;
    position: fixed;
    top: 0;
    padding-top: 50px;
    width: 40vw;
    background-color: #fff;
    transition: all 0.4s ease-in;
    left: ${props => (props.open ? "-100vw" : "0")};
    border-right: 1px solid ${({ theme }) => theme.colors.primary_opacity};
  }

  @media (max-width: 650px) {
    width: 50vw;
  }

  @media (max-width: 550px) {
    width: 70vw;
  }

  .user-button {
    display: none;
    @media (max-width: 550px) {
      display: block;
      margin-right: 1.5em;
      margin-left: auto;
      margin-top: -3em;
    }
  }
`

const Toggle = styled.div`
  display: none;
  height: 100%;
  cursor: pointer;
  padding: 0 1vw;

  @media (max-width: 1100px) {
    display: flex;
    z-index: 10;
  }
`

const Hamburger = styled.div`
  ${({ path }) =>
    path === "/"
      ? css`
          background-color: #fff;
        `
      : css`
          background-color: #9a6b50;
        `};
  ${({ visible, path }) =>
    visible &&
    path === "/" &&
    css`
      background-color: #9a6b50;
    `};
  width: 20px;
  height: 2px;
  transition: all 0.3s linear;
  align-self: center;
  position: relative;
  transform: ${props => (props.open ? "rotate(-45deg)" : "inherit")};
  z-index: 20;

  ::before,
  ::after {
    width: 20px;
    height: 2px;
    background-color: inherit;
    content: "";
    position: absolute;
    transition: all 0.3s linear;
  }

  ::before {
    transform: ${props =>
      props.open ? "rotate(-90deg) translate(-7px, 0px)" : "rotate(0deg)"};
    top: -7px;
  }

  ::after {
    opacity: ${props => (props.open ? "0" : "1")};
    transform: ${props => (props.open ? "rotate(90deg) " : "rotate(0deg)")};
    top: 7px;
  }
`

const Navbar = ({ path }) => {
  const [navbarOpen, setNavbarOpen] = useState(false)
  const node = useRef()

  const handleToggle = () => {
    navbarOpen ? setNavbarOpen(false) : setNavbarOpen(true)
  }

  useEffect(() => {
    const handleClickOutside = e => {
      if (node.current.contains(e.target)) {
        return
      }
      // outside click
      setNavbarOpen(false)
    }

    if (navbarOpen) {
      document.addEventListener("mousedown", handleClickOutside)
      document.addEventListener("touchstart", handleClickOutside)
    } else {
      document.removeEventListener("mousedown", handleClickOutside)
      document.removeEventListener("touchstart", handleClickOutside)
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
      document.removeEventListener("touchstart", handleClickOutside)
    }
  }, [navbarOpen])

  const scroll = useScroll()

  return (
    <Navigation visible={scroll} path={path}>
      <nav>
        <Toggle navbarOpen={navbarOpen} type="button" onClick={handleToggle}>
          {navbarOpen ? (
            <Hamburger open path={!path} />
          ) : (
            <Hamburger visible={scroll} path={path} />
          )}
        </Toggle>
        {navbarOpen ? (
          <MenuItems visible={scroll} ref={node}>
            <UserIcon />
            <MenuLinks />
          </MenuItems>
        ) : (
          <MenuItems open visible={scroll}>
            <MenuLinks />
          </MenuItems>
        )}
      </nav>
      <MainLogo />

      <Icons />
    </Navigation>
  )
}

export default Navbar
