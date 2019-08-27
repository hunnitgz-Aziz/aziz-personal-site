import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import styled from "styled-components"
import { Link } from "gatsby"
import Poster from "../images/404-bg.jpg"
import "../components/eyes.css"

const Wrapper = styled.div`
  position: relative;
`

const Shades = styled.div`
  position: absolute;
  top: 18%;
  right: 34%;
`

const Eye = styled.div`
  display: inline-block;
  margin: 0.1rem;
  position: relative;
  height: 28px;
  width: 31px;
`

const Ball = styled.div`
  height: 10px;
  width: 10px;
  background-color: #000;
  border-radius: 50%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`

const Content = styled.div`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  max-width: 640px;
  padding: 1rem;
  padding-left: 3rem;
`

const Background = styled.img``

function moveEye() {
  var balls = document.getElementsByClassName("ball")
  document.onmousemove = function(event) {
    var x = (event.clientX * 100) / window.innerWidth + "%"
    var y = (event.clientY * 100) / window.innerHeight + "%"

    for (var i = 0; i < 2; i++) {
      balls[i].style.left = x
      balls[i].style.top = y
      balls[i].style.transform = "translate(-" + x + ",- " + y + ")"
    }
  }
}

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <Wrapper>
      <Content>
        <h1>404</h1>
        <p>
          You've entered the deep corners of Aziz's boring thoughts. Hopefully
          this sparks some creativity for you.
        </p>
        <Link to="/">Return home</Link>
      </Content>
      <Background src={Poster} />
      <Shades>
        <Eye className="left-eye">
          <Ball onMouseOver={moveEye} className="ball"></Ball>
        </Eye>
        <Eye className="right-eye">
          <Ball onMouseOver={moveEye} className="ball"></Ball>
        </Eye>
      </Shades>
    </Wrapper>
  </Layout>
)

export default NotFoundPage
