import React from "react"
import styled from "styled-components"
import Frame from "../images/Frame-v3.jpg"

const Container = styled.div`
  max-width: 1024px;
  margin: 0 auto;
`

const ScrollBlock = styled.div`
  overflow-x: scroll;
  overflow-y: hidden;
  white-space: nowrap;
`

const Image = styled.img`
  display: inline-block;
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
