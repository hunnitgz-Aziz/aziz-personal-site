import React from "react"
import Layout from "../components/layout"

import SEO from "../components/seo"
import styled from "styled-components"
import Poster from "../images/about-page-hero.jpg"

const VideoHero = styled.div`
  position: relative;
  margin-bottom: 2rem;
`

const Video = styled.video`
  width: 100%;
`

const Wrapper = styled.div`
  @media (min-width: 641px) {
    display: flex;
  }
`

const TextContainer = styled.div`
  @media (min-width: 641px) {
    flex: 0 1 50%;
  }
`

const Headline = styled.h4`
  @media (min-width: 641px) {
    flex: 0 1 50%;
  }
`

const About = () => (
  <Layout>
    <SEO title="About" />
    <VideoHero>
      <Video
        loop
        muted
        autoPlay
        poster={Poster}
        className="fullscreen-bg-video"
      >
        <source
          src="https://not-ansari.s3.us-east-2.amazonaws.com/video-assets/about-page-hero.mp4"
          type="video/mp4"
        />
        <source
          src="https://not-ansari.s3.us-east-2.amazonaws.com/video-assets/about-page-hero.webm"
          type="video/webm"
        />
      </Video>
    </VideoHero>
    <Wrapper>
      <Headline>Howdy</Headline>
      <TextContainer>
        <p>
          Aziz Ramos is an artist, designer and front-end developer with a
          passion in making viable products and just about anything from start
          to finish.
        </p>
        <p>
          He is currently working at Universal Music Group as a web designer and
          previously worked at Major League Hacking as the creative director.
        </p>
        <p>
          He's either spending time working with his good friends at{" "}
          <a href="http://museache.com" target="_blank">
            Museache
          </a>{" "}
          [his PR/creative agency], in the gym putting shots up on{" "}
          <a href="https://dribbble.com/azizramos" target="_blank">
            Dribbble
          </a>
          , or making some furniture and stuff in the garage.
        </p>
        <p>
          No matter what, Aziz always needs something to do so don't hesitate to
          send over that million dollar idea via{" "}
          <a href="mailto:azizramos00@gmail.com">email.</a>
        </p>
      </TextContainer>
    </Wrapper>
  </Layout>
)

export default About
