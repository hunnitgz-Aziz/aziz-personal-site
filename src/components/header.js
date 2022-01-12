import { Link } from "gatsby"
import PropTypes from "prop-types"
import React, { useState } from "react"
import styled from "styled-components"
import TransitionLink from "gatsby-plugin-transition-link"

const HeaderContainer = styled.header`
  height: 95px;
`

const Wrapper = styled.div`
  position: fixed;
  width: 100%;
  z-index: 1001;
  margin: 0 auto;
  padding: 1rem 1.5rem;
  display: flex;
  align-items: center;
  align-content: center;
  justify-content: space-between;
  background: #d3d3d3;

  @media (max-width: 480px) {
    padding: 1rem;
  }
`

const Logo = styled.h5`
  margin: 0;
  font-weight: 700;

  @media (max-width: 480px) {
    font-size: 1em;
  }
`

const LogoLink = styled(props => <Link {...props} />)`
  color: #222;
  text-decoration: none;
  box-shadow: none;

  &:hover {
  }
`

const RouteContainer = styled.div`
  position: fixed;
  height: 100vh;
  width: 100%;
  background: #d3d3d3;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: transform 300ms;
  transform: ${({nav}) => (nav ? "translateY(0)" : "translateY(-100%)")};
  z-index: 1;
`

const RouteList = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 0;
`

const RouteListItem = styled.li`
  display: block;
  margin: 0;
`

const RouteLink = styled(props => <Link {...props} />)`
  color: #222;
  text-decoration: none;
  text-transform: lowercase;
  padding-left: 0.75rem;
  box-shadow: none;
  text-align: center;
  font-size: 2rem;
`

const DesktopRoute = styled.div`
  display: none;

  @media (min-width: 641px) {
    display: block;
  }
`

const DesktopRouteList = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 0;
`

const DesktopRouteListItem = styled.li`
  display: inline-block;
  margin-bottom: 0;
`

const DesktopRouteLink = styled(props => <Link {...props}/>)`
  color: #222;
  text-decoration: none;
  text-transform: lowercase;
  padding-left: 0.75rem;
  box-shadow: none;
  text-align: right;
 
`

const MenuIcon = styled.button`
  display: none;
  flex-direction: column;
  justify-content: space-around;
  width: 1.5rem;
  height: 1.5rem;
  background: transparent;
  border: none;
  cursor: pointer;

  @media (max-width: 640px) {
    display: flex;
  }

  div {
    width: 1.5rem;
    height: 2px;
    transform-origin: 1px;
    position: relative;
    background: black;
    transition: transform 300ms, opacity 300ms;

    &:first-child {
      transform: ${({nav}) => (nav ? "rotate(45deg)" : "rotate(0)")};
    }

    &:nth-child(2) {
      opacity: ${({nav}) => (nav ? "0" : "1")};
    }

    &:nth-child(3) {
      transform: ${({nav}) => (nav ? "rotate(-45deg)" : "rotate(0)")};
    }
  }
`



const Header = ({ siteTitle }) => {
  const [nav, showNav] = useState(false)
  return (
    <>
      <HeaderContainer>
        <Wrapper>
          <Logo>
            <LogoLink to="/">{siteTitle}</LogoLink>
          </Logo>
          <DesktopRoute>
            <DesktopRouteList>
              <DesktopRouteListItem>
                <DesktopRouteLink to="/work">work</DesktopRouteLink>
              </DesktopRouteListItem>
              <DesktopRouteListItem>
                <DesktopRouteLink to="/art">art</DesktopRouteLink>
              </DesktopRouteListItem>
              <DesktopRouteListItem>
                <DesktopRouteLink to="/services">services</DesktopRouteLink>
              </DesktopRouteListItem>
              <DesktopRouteListItem>
                <DesktopRouteLink to="/about">about</DesktopRouteLink>
              </DesktopRouteListItem>
            </DesktopRouteList>
          </DesktopRoute>
          <MenuIcon nav={nav} onClick={() => showNav(!nav)}>
            <div></div>
            <div></div>
            <div></div>
          </MenuIcon>
        </Wrapper>
        <RouteContainer nav={nav}>
          <RouteList>
            <RouteListItem>
              <RouteLink to="/work">Work</RouteLink>
            </RouteListItem>
            <RouteListItem>
              <RouteLink to="/art">Art</RouteLink>
            </RouteListItem>
            <RouteListItem>
              <RouteLink to="/services">Services</RouteLink>
            </RouteListItem>
            <RouteListItem>
              <RouteLink to="/about">About</RouteLink>
            </RouteListItem>
          </RouteList>
        </RouteContainer>
      </HeaderContainer>
    </>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
