import React from "react";
import styled from "styled-components";
import "normalize.css";
import "flexboxgrid2";

// sources
import arrow from "./NextPage/rightArrow.svg";

// Next page button for card row
const Aside = styled.aside`
  display: none;
  @media (min-width: 992px) {
    display: block;
    position: absolute;
    right: 0px;
    top: 250px;
  }
`;
const NextPage = styled.button`
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

//Need fix in design
export default function() {
  return (
    <Aside>
      <NextPage>
        <Arrow src={arrow} />
      </NextPage>
    </Aside>
  );
}
