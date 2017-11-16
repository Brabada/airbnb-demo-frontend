import React from "react";
import styled from "styled-components";

//components
import ExploreAirbnb from "./ExploreAirbnb";
import Experiences from "./Experiences";
import Homes from "./Homes";
import PopularReserve from "./PopularReserve";
import FeaturedDestinations from "./FeaturedDestinations";

//Main
export default function() {
  return (
    <div className="container">
      <ExploreAirbnb />
      <Experiences />
      <Homes />
      <PopularReserve />
      <FeaturedDestinations />
    </div>
  );
}
