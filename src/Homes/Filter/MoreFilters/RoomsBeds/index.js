import React from "react";
import styled from "styled-components";

//components
import { RoomLine } from "./RoomLine";

//styled-components
const Wrapper = styled.section`
  margin-top: 32px;
  border-bottom: 0.5px solid rgba(72, 72, 72, 0.3);
  padding-bottom: 8px;
  margin-bottom: 24px;

  @media (min-width: 768px) {
    margin-top: 24px;
    padding-right: 200px;
  }

  @media (min-width: 991px) {
    margin-top: 48px;
  }
`;

const Rooms = styled.section``;
const Title = styled.h3`
  font-family: "Circular Air Book", "Arial", sans-serif;
  font-size: 18px;
  color: #383838;
  padding: 0;
  margin: 0;
  margin-bottom: 24px;
  @media (min-width: 768px) {
    font-size: 20px;
  }
`;

export default function RoomsBeds() {
  return (
    <Wrapper>
      <Title>Rooms and beds</Title>
      <Rooms>
        <RoomLine roomType="Bedrooms" />
        <RoomLine roomType="Beds" />
        <RoomLine last roomType="Bathrooms" />
      </Rooms>
    </Wrapper>
  );
}
