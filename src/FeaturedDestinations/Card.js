import React from "react";
import styled from "styled-components";
import "normalize.css";
import "flexboxgrid2";

//styled-components
const CityCard = styled.a`display: block;`;
const Img = styled.img`
  margin-bottom: 8px;
  width: 100%;
  height: 100%;
  @media (min-width: 768px) {
    width: 176px;
    height: 264px;
  }
  @media (min-width: 991px) {
    width: 147px;
    height: 220px;
  }
`;
const Name = styled.a`
  display: block;
  font-weight: bold;
  font-size: 12px;
  @media (min-width: 768px) {
    font-size: 15px;
  }
`;

export function Card(props) {
  return (
    <div className="col-xs-4 col-md-3 col-lg-2">
      <CityCard>
        <Img src={props.url} />
        <Name>{props.name}</Name>
      </CityCard>
    </div>
  );
}
