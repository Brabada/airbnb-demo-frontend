import React from "react";
import styled from "styled-components";
import GoogleMap from "google-map-react";

//components

const Wrapper = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: calc(50% + 170px);
`;

export default function() {
  return (
    <Wrapper>
      <GoogleMap
        bootstrapURLKeys={{
          key: process.env.REACT_APP_MAP_KEY,
          language: "en"
        }}
        defaultZoom={8}
        defaultCenter={{ lat: -41.718108, lng: 147.108374 }}
      />
    </Wrapper>
  );
}
