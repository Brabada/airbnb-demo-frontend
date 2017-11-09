import React from "react";
import styled from "styled-components";
import "normalize.css";
import "flexboxgrid2";
import arrow from "./NextPage/rightArrow.svg";

export const NextPage = styled.button`
  border: 1px solid rgba(72, 72, 72, 0.2);
  background-color: #ffffff;
  opacity: 0.8;
  border-radius: 50%;
`;

const Arrow = styled.img`
  width: 10px;
  height: 18px;
  padding: 8px;
`;
export default function() {
  return (
    <NextPage>
      <Arrow src={arrow} />
    </NextPage>
  );
}
