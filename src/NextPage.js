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
    right: -15px;
    top: 50%;
  }
`;
const NextPage = styled.button`
  border: 1px solid rgba(72, 72, 72, 0.2);
  border-radius: 50%;
  box-shadow: 0px 2px 5px rgba(72, 72, 72, 0.3);

  opacity: 0.8;
  background-color: #ffffff;
  background-image: url(${arrow});
  background-repeat: no-repeat;
  background-size: 10px 18px;
  background-position: center center;

  padding: 20px;
`;

//Need fix in design
export default function() {
  return (
    <Aside>
      <NextPage />
    </Aside>
  );
}
