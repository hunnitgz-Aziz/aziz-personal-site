import React from "react"
import styled from "styled-components"
import Poster from "../images/home-hero-desktop.jpg"

const VideoHero = styled.div`
  position: relative;

  @media (min-width: 641px) {
    height: calc(100vh - 174.38px);
    overflow: hidden;
  }
`

const Video = styled.video`
  width: 100%;

  @media (min-width: 641px) {
    object-fit: fill;
    height: 110%;
  }

  @media (max-width: 640px) {
    display: none;
  }
`

const MobileVideo = styled.video`
  width: 100%;
  display: none;

  @media (max-width: 640px) {
    display: block;
  }
`

const HeroCopy = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  text-align: right;
  padding: 1.2rem;
`

const TagLine = styled.small`
  margin: 0;
  display: block;
  line-height: 1.3;
`

const HomeHero = () => (
  <VideoHero>
    <HeroCopy>
      <TagLine>Bored thinker</TagLine>
      <TagLine>Designer</TagLine>
      <TagLine>Creative Developer</TagLine>
    </HeroCopy>
    <Video loop muted autoPlay poster={Poster} className="fullscreen-bg-video">
      <source
        src="https://not-ansari.s3.us-east-2.amazonaws.com/video-assets/home-hero-desktop.mp4"
        type="video/mp4"
      />
      <source
        src="https://not-ansari.s3.us-east-2.amazonaws.com/video-assets/home-hero-desktop.webm"
        type="video/webm"
      />
    </Video>
    <MobileVideo
      loop
      muted
      autoPlay
      poster={Poster}
      className="fullscreen-bg-video"
    >
      <source
        src="https://not-ansari.s3.us-east-2.amazonaws.com/video-assets/home-hero-mobile.mp4"
        type="video/mp4"
      />
      <source
        src="https://not-ansari.s3.us-east-2.amazonaws.com/video-assets/home-hero-mobile.webm"
        type="video/webm"
      />
    </MobileVideo>
  </VideoHero>
)

export default HomeHero
