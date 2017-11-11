import React from "react";
import styled from "styled-components";
import "normalize.css";
import "./flexgrid.css";
// import "flexboxgrid2";

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
          <Card type="Homes" url={homes} />
          <Card type="Experiences" url={experiences} />
          <Card type="Restaurants" url={restaurants} />
        </div>
      </CardWrapper>
    </ExploreAirbnb>
  );
}
