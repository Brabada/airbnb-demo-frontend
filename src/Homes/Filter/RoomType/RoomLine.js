import React from "react";
import styled from "styled-components";

//sources
import checkboxChecked from "./checkedCheckBox.svg";
import checkboxEmpty from "./emptyCheckBox.svg";

//styled-components
const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 24px;
`;

const CheckboxWrapper = styled.div`
  display: flex;
  justify-content: start;
  align-items: flex-start;
`;

const Type = styled.div`
  display: flex;
  flex-direction: column;
  margin-right: 32px;
  width: 196px;
  cursor: pointer;
`;

const TypeInfo = styled.div`
  display: inline-block;
  font-size: 12px;
  font-family: "Circular Air", "Arial", sans-serif;
  color: #383838;
  margin-top: 8px;
`;

const Title = styled.div`
  display: inline-block;
  font-size: 16px;
  font-family: "Circular Air", "Arial", sans-serif;
  color: #383838;
`;

const RoomPicture = styled.img`
  display: inline-block;
  width: 32px;
  height: 32px;
`;

const Checkbox = styled.button`
  display: inline-block;
  border: none;
  background-color: inherit;
  padding: 0;
  margin-right: 8px;
  cursor: pointer;
`;

const CheckboxImg = styled.img`
  height: 24px;
  width: 24px;
  display: block;
`;

export default class RoomLine extends React.Component {
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
        <CheckboxWrapper onClick={this.changeCheck}>
          <Checkbox>
            {this.state.isChecked ? (
              <CheckboxImg src={checkboxChecked} />
            ) : (
              <CheckboxImg src={checkboxEmpty} />
            )}
          </Checkbox>

          <Type>
            <Title>{this.props.roomType}</Title>
            <TypeInfo>{this.props.roomInfo}</TypeInfo>
          </Type>
        </CheckboxWrapper>
        <RoomPicture src={this.props.img} />
      </Wrapper>
    );
  }
}
