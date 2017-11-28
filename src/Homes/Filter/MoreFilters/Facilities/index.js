import React from "react";
import styled from "styled-components";

import CheckPoint from "./Checkpoint";

//sources
import arrowDown from "./arrowDown.svg";

//styled-components
const Wrapper = styled.section`
  border-bottom: 0.5px solid rgba(72, 72, 72, 0.3);
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (min-width: 768px) {
    display: block;
    padding-bottom: 32px;
  }
`;

const Title = styled.h3`
  font-family: "Circular Air Book", "Arial", sans-serif;
  font-size: 18px;
  color: #383838;
  padding: 0;
  margin: 32px 0;

  @media (min-width: 768px) {
    font-size: 20px;
    margin: 24px 0;
  }
`;
const CheckSection = styled.section`
  display: none;
  @media (min-width: 768px) {
    display: block;
    margin-bottom: 24px;
  }
`;

const SeeAll = styled.button`
  display: ${props => (props.showXs ? "inline-block" : "none")};
  border: none;
  background-color: inherit;
  font-family: "Circular Air Book", "Arial", sans-serif;
  font-size: 16px;
  color: #0f7276;
  padding: 0;
  margin: 32px 0;
  cursor: pointer;

  @media (min-width: 768px) {
    display: ${props => (props.showXs ? "none" : "block")};
    margin: 0;
  }
`;

const ArrowDown = styled.img`
  width: 11px;
  height: 6px;
`;

export default function Facilities() {
  return (
    <Wrapper>
      <Title>Facilities</Title>
      <SeeAll showXs>
        See all <ArrowDown src={arrowDown} />
      </SeeAll>
      <CheckSection>
        <div className="row">
          <CheckPoint title="Elevator" /> {/*EBIN :======DDDDD*/}
          <CheckPoint title="Free parking on premises" />
          <CheckPoint title="Pool" />
          <CheckPoint title="Wheelchair accessible" />
        </div>
      </CheckSection>
      <SeeAll>
        See all facilities <ArrowDown src={arrowDown} />
      </SeeAll>
    </Wrapper>
  );
}
