import React from "react";
import styled from "styled-components";
import "./flexgrid.css";

//components
import NextPage from "./Experiences/NextPage";
import { CardHeader } from "./CardHeader";
import { Card } from "./Experiences/Card";
import { CardWrapper } from "./CardWrapper";

// sources
import experience1 from "./Experiences/experience1.svg";
import experience2 from "./Experiences/experience2.svg";
import experience3 from "./Experiences/experience3.svg";
import experience4 from "./Experiences/experience4.svg";

// styled-components
const Experiences = styled.section`
  margin-bottom: 38px;
  position: relative;
`;

// Experience card row
export default function() {
  return (
    <Experiences>
      <CardHeader title="Experiences" />
      <CardWrapper>
        <div className="row-nowrap">
          <Card
            img={experience1}
            price="29"
            name="Forest therapy"
            reviewNum="44"
          />

          <Card
            img={experience2}
            price="69"
            name="Whale Watching"
            reviewNum="46"
          />

          <Card
            img={experience3}
            price="69"
            name="Table Mountain Summit, Cable Car Down"
            reviewNum="44"
          />

          <Card
            img={experience4}
            price="50"
            name="Salsa Night"
            reviewNum="44"
          />
        </div>
      </CardWrapper>
      <NextPage />
    </Experiences>
  );
}
