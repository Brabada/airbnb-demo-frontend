import React from "react";
import styled from "styled-components";

import "./slider.css";
import Rheostat from "rheostat";

//styled-components
const Wrapper = styled.div`
  display: block;
  border-bottom: 0.5px solid rgba(72, 72, 72, 0.3);

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
  width: 100%;
  height: 120px;
  box-sizing: border-box;
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

  PitComponent = (style, children) => {
    return (
      <div
        style={{
          ...style,
          background: "#a2a2a2",
          width: 6,
          height: children % 10 === 0 ? 12 : 8,
          top: 10
        }}
      />
    );
  };

  render() {
    return (
      <Wrapper>
        <Title>Price range</Title>
        <Range>$10 — $1000+</Range>
        <AveragePrice>The average nightly price is $75.</AveragePrice>
        <Graph>
          <Rheostat
            onValuesUpdated={this.updateValue}
            // pitComponent={this.PitComponent}
            // pitPoints={[0, 55]}
            min={1}
            max={100}
            values={[0, 100]}
          />
        </Graph>
      </Wrapper>
    );
  }
}
