import React from "react";
import styled from "styled-components";
import "normalize.css";
import "flexboxgrid2";
import { Card } from "./ExploreAirbnb/Card.js";

import homes from "./ExploreAirbnb/Homes.svg";
import experiences from "./ExploreAirbnb/Experiences.svg";
import restaurants from "./ExploreAirbnb/Restaurants.svg";

const ExploreAirbnb = styled.section`margin-bottom: 48px;`;

export default function() {
  return (
    <ExploreAirbnb>
      <h1>Explore Airbnb</h1>

      <div className="row">
        <Card type="Homes" url={homes} />
        <Card type="Experiences" url={experiences} />
        <Card type="Restaurants" url={restaurants} />
      </div>
    </ExploreAirbnb>
  );
}
