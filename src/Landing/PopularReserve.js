import React from "react";
import styled from "styled-components";
import "./flexgrid.css";

//souces
import restaurant1 from "./PopularReserve/restaurant1.svg";
import restaurant2 from "./PopularReserve/restaurant2.svg";
import restaurant3 from "./PopularReserve/restaurant3.svg";
import restaurant4 from "./PopularReserve/restaurant4.svg";

//components
import { CardHeader } from "./CardHeader";
import NextPage from "./PopularReserve/NextPage";
import { Card } from "./PopularReserve/Card";
import { CardWrapper } from "./CardWrapper";

//styled-components
const PopularReserve = styled.section`
  position: relative;
  margin-bottom: 48px;
`;

// Popular reserves card row
export default function() {
  return (
    <PopularReserve>
      <CardHeader title="Popular reservations around the world" />
      <CardWrapper>
        <div className="row-nowrap">
          <Card
            img={restaurant1}
            type="SPEAKEASY"
            name="Chumley’s"
            check="60"
          />

          <Card
            img={restaurant2}
            type="KOREAN GASTROPUB"
            name="Hanjan"
            check="50"
          />

          <Card
            img={restaurant3}
            type="GERMAN AMERICAN"
            name="Prime Meats"
            check="55"
          />

          <Card
            img={restaurant4}
            type="FINE SEAFOOD"
            name="Seaprice"
            check="70"
          />
        </div>
      </CardWrapper>

      <NextPage />
    </PopularReserve>
  );
}
