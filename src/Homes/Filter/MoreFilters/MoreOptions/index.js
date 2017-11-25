import React from "react";
import styled from "styled-components";

//sources
import sliderButtonOn from "./sliderButtonOn.svg";
import sliderButtonOff from "./sliderButtonOff.svg";

//styled-components
const Wrapper = styled.section`
  border-bottom: 0.5px solid rgba(72, 72, 72, 0.3);
`;

const SuperHost = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-right: 261px;
  margin-bottom: 40px;
`;

const InstantBook = styled(SuperHost)`
  margin-bottom: 32px;
  @media (min-width: 991px) {
    display: none;
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

const Type = styled.div`
  display: flex;
  flex-direction: column;
  margin-right: 32px;
  width: 196px;
`;

const TypeTitle = styled.div`
  display: inline-block;
  font-size: 18px;
  font-family: "Circular Air", "Arial", sans-serif;
  color: #383838;
`;

const TypeInfo = styled.div`
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

export default class MoreOptions extends React.Component {
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
      <Wrapper>
        <Title>More options</Title>
        <InstantBook>
          <Type>
            <TypeTitle>Instant Book</TypeTitle>
            <TypeInfo>Secure a reservation instantly.</TypeInfo>
            <MoreInfo>Learn more</MoreInfo>
          </Type>
          <SliderButton onClick={this.changeCheck}>
            {this.state.isChecked ? (
              <SliderImg src={sliderButtonOn} />
            ) : (
              <SliderImg src={sliderButtonOff} />
            )}
          </SliderButton>
        </InstantBook>
        <SuperHost>
          <Type>
            <TypeTitle>Superhost</TypeTitle>
            <TypeInfo>Stay with recognized hosts.</TypeInfo>
            <MoreInfo>Learn more</MoreInfo>
          </Type>
          <SliderButton onClick={this.changeCheck}>
            {this.state.isChecked ? (
              <SliderImg src={sliderButtonOn} />
            ) : (
              <SliderImg src={sliderButtonOff} />
            )}
          </SliderButton>
        </SuperHost>
      </Wrapper>
    );
  }
}
