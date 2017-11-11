import React from "react";
import styled from "styled-components";
import "normalize.css";
import "flexboxgrid2";

//styled-components
const RestaurantCard = styled.a`display: block;`;
const Img = styled.img`
  margin-bottom: 12px;
  width: 100%;
  @media (min-width: 768px) {
    width: 100%;
    height: 100%;
  }
  @media (min-width: 992px) {
    width: 229px;
    height: 164px;
  }
`;
const Type = styled.div`
  font-size: 8px;
  font-weight: bold;
  margin-bottom: 2px;
  @media (min-width: 768px) {
    font-size: 1.2em;
  }
`;
const Name = styled.a`
  font-weight: bold;
  font-size: 14px;
  margin-bottom: 4px;
  @media (min-width: 768px) {
    font-size: 1.2em;
  }
`;
const AverageCheck = styled.div`
  font-size: 14px;
  font-weight: 300;
  color: rgba(56, 56, 56, 0.8);
  @media (min-width: 768px) {
    font-size: 1.3em;
  }
`;

// Generating single Card for PopularReserve Section
export function Card(props) {
  return (
    <div className="col-xs-6 col-md-5 col-lg-3">
      <RestaurantCard>
        <Img src={props.url} />

        <Type>{props.type}</Type>
        <Name>{props.name}</Name>

        <AverageCheck>About ${props.check} per person</AverageCheck>
      </RestaurantCard>
    </div>
  );
}
