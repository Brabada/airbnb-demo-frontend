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
const ExploreAirbnb = styled.section`margin-bottom: 48px;`;

// Explore Airbnb row
export default function() {
  return (
    <ExploreAirbnb>
      <h1>Explore Airbnb</h1>
      <CardWrapper>
        <div className="row-nowrap">
          <Card type="Homes" img={homes} />
          <Card type="Experiences" img={experiences} />
          <Card type="Restaurants" img={restaurants} />
        </div>
      </CardWrapper>
    </ExploreAirbnb>
  );
}
