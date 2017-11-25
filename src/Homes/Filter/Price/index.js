import React from "react";
import styled from "styled-components";
import MediaQuery from "react-responsive";

import "./slider.css";
import Rheostat from "rheostat";

//styled-components
const Wrapper = styled.div`
  margin: 24px 16px 38px 16px;
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
  width: 292px;
  height: 120px;
  ${"" /* margin: 10% auto;
  height: 50%;
  width: 50%; */} box-sizing: border-box;
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
      <div>
        <MediaQuery minWidth="992px">
          <Wrapper>
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
        </MediaQuery>
      </div>
    );
  }
}
