import React from "react"
import styled from "styled-components"
import Frame from "../images/Frame-v3.jpg"

const Container = styled.div`
  max-width: 1024px;
  margin: 0 auto;
`

const ScrollBlock = styled.div`
  background: #b0b0b0;
  overflow-x: scroll;
  overflow-y: hidden;
  white-space: nowrap;
  height: 480px;

  &::-webkit-scrollbar {
    display: none;
  }
`

const Image = styled.img`
  display: inline-block;
  margin-bottom: 0;
`

const Scroll = () => {
  return (
    <Container>
      <ScrollBlock>
        <Image src={Frame} />
        <Image src={Frame} />
        <Image src={Frame} />
        <Image src={Frame} />
        <Image src={Frame} />
        <Image src={Frame} />
        <Image src={Frame} />
      </ScrollBlock>
    </Container>
  )
}

export default Scroll
