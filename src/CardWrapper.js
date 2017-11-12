import React from "react";
import styled from "styled-components";

// Styles for Card's Wrapper
export const CardWrapper = styled.div`
  overflow-x: scroll;
  padding-bottom: 2px;
  ${"" /* overflow-y: hidden; */} @media (min-width: 992px) {
    overflow-x: hidden;
  }
`;
