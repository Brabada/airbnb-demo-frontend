import React from "react";
import styled from "styled-components";

//sources
import checkboxChecked from "./checkedCheckBox.svg";
import checkboxEmpty from "./emptyCheckBox.svg";

const CheckboxWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin-bottom: 16px;
`;

const Checkbox = styled.button`
  border: none;
  background-color: inherit;
  padding: 0;
  margin-right: 16px;
  cursor: pointer;
`;

const CheckboxImg = styled.img`
  height: 24px;
  width: 24px;
  display: block;
`;

const Title = styled.div`
  display: inline-block;
  font-family: "Circular Air", "Arial", sans-serif;
  font-size: 18px;
  color: #383838;
  cursor: pointer;
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
      <div className="xs-hidden col-md-6">
        <CheckboxWrapper onClick={this.changeCheck}>
          <Checkbox>
            {this.state.isChecked ? (
              <CheckboxImg src={checkboxChecked} />
            ) : (
              <CheckboxImg src={checkboxEmpty} />
            )}
          </Checkbox>

          <Title>{this.props.title}</Title>
        </CheckboxWrapper>
      </div>
    );
  }
}
