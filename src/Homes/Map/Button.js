import React from "react";
import styled from "styled-components";

//source
import location from "./location.svg";

const Button = styled.button`
  border: 1px solid rgba(72, 72, 72, 0.2);
  border-radius: 50%;
  box-shadow: 0px 2px 3px rgba(72, 72, 72, 0.3);

  opacity: 0.8;
  background-color: #ffffff;
  background-image: url(${location});
  background-repeat: no-repeat;
  background-size: 15px 19px;
  background-position: center center;

  padding: 20px;

  position: absolute;
  left: calc(100% - 44px);
  bottom: 15px;

  @media (min-width: 768px) {
    left: calc(100% - 44px);
    bottom: 25px;
  }

  @media (min-width: 992px) {
    display: none;
  }
`;

export default function() {
  return <Button />;
}
