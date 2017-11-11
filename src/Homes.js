import React from "react";
import styled from "styled-components";
import "normalize.css";
import "./flexgrid.css";
// import "flexboxgrid2";

//sources
import home1 from "./Homes/home1.svg";
import home2 from "./Homes/home2.svg";
import home3 from "./Homes/home3.svg";

//Components
import { CardHeader } from "./CardHeader";
import { Card } from "./Homes/Card";
import { CardWrapper } from "./CardWrapper";

//styled-components
const Homes = styled.section`margin-bottom: 48px;`;
const Wrapper = styled.div`position: relative;`;

// Home's card row
export default function() {
  return (
    <Homes>
      <CardHeader title="Homes" />
      <CardWrapper>
        <Wrapper>
          <div className="row-nowrap">
            <Card
              url={home1}
              price="82"
              name="La Salentina, see, nature & relax"
              rentType="Entire house"
              numBeds="9"
              rateNum="97"
              hostType="Superhost"
            />

            <Card
              url={home2}
              price="82"
              name="Your private 3 bedrooms riad and exclusive"
              rentType="Entire house"
              numBeds="5"
              rateNum="191"
              hostType="Superhost"
            />

            <Card
              url={home3}
              price="200"
              name="Dreamy Tropical Tree House"
              rentType="Entire treehouse"
              numBeds="1"
              rateNum="364"
              hostType="Superhost"
            />
          </div>
          {/* <NextPage /> //dont work properly */}
        </Wrapper>
      </CardWrapper>
    </Homes>
  );
}
