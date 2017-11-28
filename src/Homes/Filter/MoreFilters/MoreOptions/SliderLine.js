import React from "react";
import styled from "styled-components";

//sources
import sliderButtonOn from "./sliderButtonOn.svg";
import sliderButtonOff from "./sliderButtonOff.svg";

//styled-components

const Option = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-right: 261px;
  margin-bottom: 32px;

  @media (min-width: 991px) {
    display: ${props => (props.showLg ? "flex" : "none")};
  }
`;

const Type = styled.div`
  display: flex;
  flex-direction: column;
  margin-right: 32px;
  width: 196px;
`;

const Title = styled.div`
  display: inline-block;
  font-size: 18px;
  font-family: "Circular Air", "Arial", sans-serif;
  color: #383838;
`;

const Info = styled.div`
  display: inline-block;
  font-size: 16px;
  font-family: "Circular Air", "Arial", sans-serif;
  color: #383838;
  margin-top: 8px;
`;

const MoreInfo = styled.a`
  margin-top: 8px;
  font-size: 16px;
  font-family: "Circular Air", "Arial", sans-serif;
  color: #0f7276;
`;

const Slider = styled.button`
  border: none;
  background-color: inherit;
  padding-left: 0;
  padding-right: 0;
  cursor: pointer;
`;

const Img = styled.img`
  height: 40px;
  width: 64px;
  display: block;
`;

export default class SliderLine extends React.Component {
  state = {
    isChecked: false
  };

  changeCheck = () => {
    if (this.state.isChecked) {
      this.setState({ isChecked: false });
    } else {
      this.setState({ isChecked: true });
    }
  };

  render() {
    return (
      <Option showLg={this.props.showLg}>
        <Type>
          <Title>{this.props.title}</Title>
          <Info>{this.props.description}</Info>
          <MoreInfo>Learn more</MoreInfo>
        </Type>
        <Slider onClick={this.changeCheck}>
          {this.state.isChecked ? (
            <Img src={sliderButtonOn} />
          ) : (
            <Img src={sliderButtonOff} />
          )}
        </Slider>
      </Option>
    );
  }
}
