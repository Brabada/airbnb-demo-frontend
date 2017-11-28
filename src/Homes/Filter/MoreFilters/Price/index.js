import React from "react";
import styled from "styled-components";

import "./slider.css";
import Rheostat from "rheostat";

//sources
import gistogram from "./gistogram.svg";

//styled-components
const Wrapper = styled.div`
  display: block;
  border-bottom: 0.5px solid rgba(72, 72, 72, 0.3);
  width: 100%;
  margin-top: 32px;

  @media (min-width: 991px) {
    display: none;
  }
`;

const Range = styled.div`
  font-size: 16px;
  font-family: "Circular Air", "Arial", sans-serif;
  color: #383838;
  margin-bottom: 8px;
`;

const AveragePrice = styled.div`
  font-size: 12px;
  font-family: "Circular Air", "Arial", sans-serif;
  color: #383838;
  margin-bottom: 32px;
`;

const Graph = styled.div`
  position: relative;
  padding: 64px 16px 32px;
  margin-bottom: 32px;

  @media screen and (min-width: 768px) {
    padding-left: 40px;
    padding-right: 40px;
  }
`;

const Gistogram = styled.img`
  position: absolute;
  width: 144px;
  height: auto;
  top: calc(50% - 50px);
  left: 25px;

  @media (min-width: 768px) {
    width: 384px;
    height: 79px;
  }
`;

const Title = styled.h3`
  font-family: "Circular Air Book", "Arial", sans-serif;
  font-size: 18px;
  color: #383838;
  padding: 0;
  margin: 0;
  margin-bottom: 24px;

  @media (min-width: 768px) {
    font-size: 20px;
  }
`;

export default class Price extends React.Component {
  state = {
    values: { min: 10, max: 1000 }
  };

  updateValue = () => {
    this.setState({
      values: this.props.values
    });
  };

  render() {
    return (
      <Wrapper>
        <Title>Price range</Title>
        <Range>$10 — $1000+</Range>
        <AveragePrice>The average nightly price is $75.</AveragePrice>
        <Graph>
          <Gistogram src={gistogram} />
          <Rheostat min={1} max={100} values={[0, 100]} />
        </Graph>
      </Wrapper>
    );
  }
}
