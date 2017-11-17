import React from "react";
import styled from "styled-components";
import "./flexgrid.css";

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
import NextPage from "./FeaturedDestinations/NextPage";

//styled-components
const FeaturedDestinations = styled.section`
  position: relative;
  margin-bottom: 64px;
`;
const H2 = styled.h2`
  margin-top: 42;
  margin-bottom: 16px;

  @media (min-width: 768px) {
    margin-bottom: 24px;
    margin-top: 48px;
  }
`;

// Featured destinations card row
export default function() {
  return (
    <FeaturedDestinations>
      <H2>Featured destinations</H2>
      <CardWrapper>
        <div className="row-nowrap">
          <Card img={city1} name="Paris" />
          <Card img={city2} name="Miami" />
          <Card img={city3} name="Tokyo" />
          <Card img={city4} name="Cape town" />
          <Card img={city5} name="Seoul" />
          <Card img={city6} name="Los Angeles" />
        </div>
      </CardWrapper>
      <NextPage />
    </FeaturedDestinations>
  );
}
