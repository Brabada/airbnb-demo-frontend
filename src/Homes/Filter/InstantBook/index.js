import React from "react";
import styled from "styled-components";
import MediaQuery from "react-responsive";

//sources
import sliderButtonOn from "./sliderButtonOn.svg";
import sliderButtonOff from "./sliderButtonOff.svg";

//styled-components
const Wrapper = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;

  margin: 24px 16px 38px 16px;
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
  font-family: "Circular Air Book", "Arial", sans-serif;
  color: #383838;
`;

const TypeInfo = styled.div`
  display: inline-block;
  font-size: 14px;
  font-family: "Circular Air", "Arial", sans-serif;
  color: #383838;
  margin-top: 8px;
`;

const SliderButton = styled.button`
  border: none;
  background-color: inherit;
  padding-left: 0;
  padding-right: 0;
`;

const SliderImg = styled.img`
  height: 40px;
  width: 64px;
`;

export default class InstantBook extends React.Component {
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
      <MediaQuery minWidth="991px">
        <Wrapper>
          <Type>
            <Title>Instant Book</Title>
            <TypeInfo>
              Listings you can book without waiting for host approval.
            </TypeInfo>
          </Type>
          <SliderButton onClick={this.changeCheck}>
            {this.state.isChecked ? (
              <SliderImg src={sliderButtonOn} />
            ) : (
              <SliderImg src={sliderButtonOff} />
            )}
          </SliderButton>
        </Wrapper>
      </MediaQuery>
    );
  }
}
