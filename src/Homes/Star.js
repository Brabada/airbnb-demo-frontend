import React from "react";
import styled from "styled-components";
import "normalize.css";
import "flexboxgrid2";

//sources
import star from "./Star/star.svg";

//styled-components
const Star = styled.img`
  width: 12px;
  height: 12px;
  margin-right: 4px;
`;

// return star image
export default function() {
  return <Star src={star} />;
}
