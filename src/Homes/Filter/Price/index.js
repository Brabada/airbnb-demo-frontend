import React from "react";
import styled from "styled-components";

import "./slider.css";
import Rheostat from "rheostat";

//sources
import gistogram from "./gistogram.svg";

//styled-components
const Wrapper = styled.div`
  display: none;
  @media (min-width: 991px) {
    display: block;
    margin: 24px 16px 56px 16px;
    width: 294px;
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
  padding: 0px 16px;
  padding-top: 80px;
`;

const Gistogram = styled.img`
  position: absolute;
  width: 144px;
  height: auto;
  top: 12px;
  left: 25px;
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
        <Range>$10 — $1000+</Range>
        <AveragePrice>The average nightly price is $75.</AveragePrice>
        <Graph>
          <Gistogram src={gistogram} />
          <Rheostat
            onValuesUpdated={this.updateValue}
            min={1}
            max={100}
            values={[0, 100]}
          />
        </Graph>
      </Wrapper>
    );
  }
}
