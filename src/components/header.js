import { Link } from "gatsby"
import PropTypes from "prop-types"
import React, { useState } from "react"
import styled from "styled-components"
import LogoImage from "../images/ar-logo-white.png"

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
  background: #000000;

  @media (max-width: 480px) {
    padding: 1rem;
  }
`

const Logo = styled.div`
  margin: 0;
  font-weight: 700;

  @media (max-width: 480px) {
    font-size: 1em;
  }
`

const LogoImageContainer = styled.img`
  width: 50px;
  height: 50px;
  margin-bottom: 0;
`

const LogoLink = styled(props => <Link {...props} />)`
  color: #FFFFFF;
  text-decoration: none;
  box-shadow: none;

  &:hover {
  }
`

const RouteContainer = styled.div`
  position: fixed;
  height: 100vh;
  width: 100%;
  background: #000000;
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
  text-align: center;
`

const RouteListItem = styled.li`
  display: block;
  margin: 0;
`

const RouteLink = styled(props => <Link {...props} />)`
  color: #FFF;
  text-decoration: none;
  text-transform: lowercase;
  padding-left: 0.75rem;
  box-shadow: none;
  text-align: center;
  font-size: 2rem;
`

const RecruitButton = styled.a`
  background-color: white;
  color: black;
  text-decoration: none;
  margin-left: 0.75rem;
  box-shadow: none;
  border-radius: 999em;
  padding: 0.25rem .75rem;
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
  color: #FFF;
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
    background: white;
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
            <LogoLink to="/"><LogoImageContainer src={LogoImage}/></LogoLink>
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
                <RecruitButton href="mailto:azizramos00@gmail.com">Recruit Me!</RecruitButton>
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
              <RecruitButton href="mailto:aziramos00@gmail.com">Recruit Me!</RecruitButton>
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
