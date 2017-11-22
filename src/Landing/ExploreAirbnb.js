import React from "react";
import styled from "styled-components";
import "./flexgrid.css";

//sources
import homes from "./ExploreAirbnb/Homes.svg";
import experiences from "./ExploreAirbnb/Experiences.svg";
import restaurants from "./ExploreAirbnb/Restaurants.svg";

//Components
import { Card } from "./ExploreAirbnb/Card.js";
import { CardWrapper } from "./CardWrapper";

//styled-components
const ExploreAirbnb = styled.section`margin-bottom: 38px;`;
const H1 = styled.h1`
  margin-top: 0;
  margin-bottom: 16px;

  @media (min-width: 768px) {
    margin-bottom: 24px;
  }
`;

// Explore Airbnb row
export default function() {
  return (
    <ExploreAirbnb>
      <H1>Explore Airbnb</H1>
      <CardWrapper>
        <div className="row-nowrap">
          <Card link="/homes" type="Homes" img={homes} />
          <Card link="#" type="Experiences" img={experiences} />
          <Card link="#" type="Restaurants" img={restaurants} />
        </div>
      </CardWrapper>
    </ExploreAirbnb>
  );
}
