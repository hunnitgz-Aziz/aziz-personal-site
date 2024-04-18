import React from "react";
import styled from "styled-components";
import PlayerAvi from "../images/player-profile.jpeg"

const Container = styled.div`
  background-color: black;
  margin-left: -1.5rem;
  margin-right: -1.5rem;
  padding: 1.5rem 1.5rem 0;
`

const PlayerInfo = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 767px) {
    flex-direction: column;
  }
`

const PlayerData = styled.div`
  color: #FFF;

  @media (max-width: 767px) {
    text-align: center;
  }
`

const PlayerName = styled.h2`
  margin: 0;
`

const PlayerImage = styled.img`
  width: 360px;
  height: 360px;
  object-fit: cover;
  margin-bottom: 0;
`


export const PlayerCard = () => {
  return (
    <Container>
      <PlayerInfo>
        <PlayerData>
          <PlayerName>Aziz Ramos</PlayerName>
          <p style={{ color: "#888" }}>Designer • Queens, New York<br></br>Rutgers, The State University of New Jersey<br></br>11yrs experience</p>
        </PlayerData>
        <PlayerImage src={PlayerAvi} alt="Aziz Ramos"/>
      </PlayerInfo>
    </Container>
  )
}