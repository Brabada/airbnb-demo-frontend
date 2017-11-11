import React from "react";
import styled from "styled-components";
import "normalize.css";
import "./flexgrid.css";
// import "flexboxgrid2";

//souces
import restaurant1 from "./PopularReserve/restaurant1.svg";
import restaurant2 from "./PopularReserve/restaurant2.svg";
import restaurant3 from "./PopularReserve/restaurant3.svg";
import restaurant4 from "./PopularReserve/restaurant4.svg";

//components
import { CardHeader } from "./CardHeader";
import NextPage from "./NextPage";
import { Card } from "./PopularReserve/Card";
import { CardWrapper } from "./CardWrapper";

//styled-components
const PopularReserve = styled.section`margin-bottom: 48px;`;

// Popular reserves card row
export default function() {
  return (
    <PopularReserve>
      <CardHeader title="Popular reservations around the world" />
      <CardWrapper>
        <div className="row-nowrap">
          <Card
            url={restaurant1}
            type="Speakeasy"
            name="Chumley’s"
            check="60"
          />

          <Card
            url={restaurant2}
            type="Korean gastropub"
            name="Hanjan"
            check="50"
          />

          <Card
            url={restaurant3}
            type="German american"
            name="Prime Meats"
            check="55"
          />

          <Card
            url={restaurant4}
            type="Fine seafoo"
            name="Seaprice"
            check="70"
          />
        </div>
      </CardWrapper>
    </PopularReserve>
  );
}
