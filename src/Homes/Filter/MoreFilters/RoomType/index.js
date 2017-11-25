import React from "react";
import styled from "styled-components";
import MediaQuery from "react-responsive";

import RoomLine from "./RoomLine";

//sources
import entire from "./entire.svg";
import privateRoom from "./privat.svg";
import shared from "./shared.svg";

//styled-components
const RoomSection = styled.section`
  margin-bottom: 32px;
`;

const Wrapper = styled.div`
  display: block;
  border-bottom: 0.5px solid rgba(72, 72, 72, 0.3);

  @media (min-width: 991px) {
    display: none;
  }
`;

const Title = styled.h3`
  font-family: "Circular Air Book", "Arial", sans-serif;
  font-size: 18px;
  color: #383838;
  padding: 0;
  margin: 0;
  margin-bottom: 24px;
  margin-top: 40px;
  @media (min-width: 768px) {
    font-size: 20px;
  }
`;

export function RoomType() {
  return (
    <Wrapper>
      <Title>Room Type</Title>
      <RoomSection>
        <RoomLine
          roomType="Entire Home"
          roomInfo="Have a place to yourself"
          img={entire}
        />
        <RoomLine
          roomType="Private room"
          roomInfo="Have your own room and share some common spaces"
          img={privateRoom}
        />
        <RoomLine
          roomType="Shared room"
          roomInfo="Stay in a shared space, like a common room"
          img={shared}
        />
      </RoomSection>
    </Wrapper>
  );
}
