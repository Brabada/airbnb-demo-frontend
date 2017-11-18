import React from "react";
import styled from "styled-components";
import "normalize.css";
import "./flexgrid.css";

//sources
import home1 from "./Card/home1.svg";
import home2 from "./Card/home2.svg";
import home3 from "./Card/home3.svg";
import home4 from "./Card/home4.svg";
import home5 from "./Card/home5.svg";
import home6 from "./Card/home6.svg";

//Components
import Footer from "./Footer";
import { Card } from "./Card/Card";
import { PageBar } from "./PageBar";
import GoogleMap from "./Map";

//styled-components
const Homes = styled.section`margin-top: 24px;`;

const Wrapper = styled.div`padding-bottom: 1px;`;

// Home's card row
export default function() {
  return (
    <Homes>
      <Wrapper>
        <div className="row">
          <div className="col-xs-12 col-lg-8">
            <div className="row">
              <Card
                img={home1}
                price={110}
                name="La Salentina, see, nature & relax"
                rentType="Entire apartment"
                numBeds={1}
                rateNum={369}
                hostType="Superhost"
              />
              <Card
                img={home2}
                price={82}
                name="Your private 3 bedroom riad and exclusive"
                rentType="Entire house"
                numBeds={5}
                rateNum={161}
                hostType="Superhost"
              />

              <Card
                img={home3}
                price={200}
                name="Dreamy Tropical Tree House"
                rentType="Entire tree"
                numBeds={1}
                rateNum={364}
                hostType="Superhost"
              />

              <Card
                img={home4}
                price={110}
                name="Best location old town luxury loft"
                rentType="Entire apartment"
                numBeds={1}
                rateNum={369}
                hostType="Superhost"
              />

              <Card
                img={home5}
                price={83}
                name="Lussuoso. Vista incantevole."
                rentType="Entire apartment"
                numBeds={6}
                rateNum={105}
                hostType="Superhost"
              />

              <Card
                img={home6}
                price={72}
                name="In the historical center of Lecce"
                rentType="Entire apartment"
                numBeds={3}
                rateNum={221}
                hostType="Superhost"
              />
            </div>

            <PageBar rangeFirst={1} rangeLast={18} />

            <Footer />
          </div>
          <div className="hidden-xs hidden-sm hidden-md col-lg-4">
            <GoogleMap />
          </div>
        </div>
      </Wrapper>
    </Homes>
  );
}
