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
  max-width: 100%;
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
          Aziz Ramos is an artist, product designer and front-end developer with a
          passion in making digital products that just feel good. He has past experiences in creative direction, branding, product strategy, design systems, and conceptual development which solved creative challenges in health, politics, academics, gaming, and music spaces.
        </p>
        <p><a href="https://docs.google.com/document/d/1AYMUuDntgBi7BEvsn0SK21ZspywiZDtLK4ab-C8JI7E/edit?usp=sharing" target="_blank">view resume</a></p>
        <h5>Background</h5>
        <p>Atlantic Health System, Senior Product Designer<br/>Morristown, NJ, 2021</p>
        <p>Pariah Interactive, Frontend Engineer<br/>Brooklyn, NY, 2021</p>
        <p>Reach, UX Designer<br/>New York, NY, 2021</p>
        <p>Gerry, UI/UX Designer & Frontend Engineer<br/>New York, NY, 2019-2021</p>
        <p>Universal Music Group, Web Designer & Developer<br/>New York, NY, 2017-2019</p>
        <p>Major League Hacking, Creative Director<br/>New York, NY, 2014-2017</p>
      </TextContainer>
    </Wrapper>
  </Layout>
)

export default About
