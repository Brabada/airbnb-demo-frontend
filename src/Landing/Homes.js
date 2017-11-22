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
import NextPage from "./Homes/NextPage";

//styled-components
const Homes = styled.section`
  position: relative;
  margin-bottom: 38px;
`;
const Wrapper = styled.div`
  position: relative;
  padding-bottom: 1px;
`;

// Home's card row
export default function() {
  return (
    <Homes>
      <CardHeader link="/homes" title="Homes" />
      <CardWrapper>
        <Wrapper>
          <div className="row-nowrap">
            <Card
              img={home1}
              price="82"
              name="La Salentina, see, nature & relax"
              rentType="Entire house"
              numBeds="9"
              rateNum="97"
              hostType="Superhost"
            />

            <Card
              img={home2}
              price="82"
              name="Your private 3 bedrooms riad and exclusive"
              rentType="Entire house"
              numBeds="5"
              rateNum="191"
              hostType="Superhost"
            />

            <Card
              img={home3}
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

      <NextPage />
    </Homes>
  );
}
