import React from "react";
import styled from "styled-components";

//styled-components
const RestaurantCard = styled.a`display: block;`;

const Img = styled.img`
  width: 100%;
  margin-bottom: 7px;

  @media (min-width: 768px) {
    margin-bottom: 12px;
    width: 100%;
    height: 100%;
  }

  @media (min-width: 992px) {
    width: 229px;
    height: 164px;
  }
`;

const Type = styled.div`
  font-family: "Circular Air", "Arial", sans-serif;
  font-size: 8px;
  font-weight: bold;
  margin-bottom: 2px;

  @media (min-width: 768px) {
    font-size: 10px;
  }
`;

const Name = styled.a`
  font-family: "Circular Air", "Arial", sans-serif;
  font-weight: bold;
  font-size: 14px;

  @media (min-width: 768px) {
    font-size: 18px;
  }
`;

const AverageCheck = styled.div`
  font-size: 14px;
  font-family: "Circular Air", "Arial", sans-serif;
  color: rgba(56, 56, 56, 0.8);
  margin-top: 5px;

  @media (min-width: 768px) {
    font-size: 18px;
  }
`;

// Generating single Card for PopularReserve Section
export function Card(props) {
  return (
    <div className="col-xs-6 col-md-5 col-lg-3">
      <RestaurantCard>
        <Img src={props.img} />
        <Type>{props.type}</Type>
        <Name>{props.name}</Name>
        <AverageCheck>About ${props.check} per person</AverageCheck>
      </RestaurantCard>
    </div>
  );
}
