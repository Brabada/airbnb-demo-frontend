import React from "react";
import styled from "styled-components";
import "normalize.css";
import "./flexgrid.css";
// import "flexboxgrid2";

//sources
import city1 from "./FeaturedDestinations/destination1.svg";
import city2 from "./FeaturedDestinations/destination2.svg";
import city3 from "./FeaturedDestinations/destination3.svg";
import city4 from "./FeaturedDestinations/destination4.svg";
import city5 from "./FeaturedDestinations/destination5.svg";
import city6 from "./FeaturedDestinations/destination6.svg";

//components
import { Card } from "./FeaturedDestinations/Card";
import { CardWrapper } from "./CardWrapper";

//styled-components
const FeaturedDestinations = styled.section`margin-bottom: 64px;`;

// Featured destinations card row
export default function() {
  return (
    <FeaturedDestinations>
      <h2>Featured destinations</h2>
      <CardWrapper>
        <div className="row-nowrap">
          <Card url={city1} name="Paris" />
          <Card url={city2} name="Miami" />
          <Card url={city3} name="Tokyo" />
          <Card url={city4} name="Cape town" />
          <Card url={city5} name="Seoul" />
          <Card url={city6} name="Los Angeles" />
        </div>
      </CardWrapper>
    </FeaturedDestinations>
  );
}
