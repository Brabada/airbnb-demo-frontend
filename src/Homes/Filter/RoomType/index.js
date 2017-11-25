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
  margin: 24px 16px 38px 16px;
`;

export function RoomType() {
  return (
    <MediaQuery minWidth="991px">
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
    </MediaQuery>
  );
}
