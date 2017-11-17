import React from "react";
import styled from "styled-components";
import {
  DateRangePicker,
  SingleDatePicker,
  DayPickerRangeController
} from "react-dates";

import "react-dates/lib/css/_datepicker.css";

import { DayPicker } from "react-dates";
import { FiltButton } from "./Button";

const Button = styled(FiltButton)`
  background-color: ${props => (props.isOpen ? "#008489" : "#fff")};
  color: ${props => (props.isOpen ? "#fff" : "#383838")};
`;

const CalendarWrapper = styled.div`
  position: absolute;
  top: 130px;
`;

const DateFilter = styled.div``;

export class Dates extends React.Component {
  state = {
    isOpen: false
  };
  toggleOpen = () => {
    if (this.state.isOpen) {
      this.setState({ isOpen: false });
    } else {
      this.setState({ isOpen: true });
    }
  };

  render() {
    return (
      <div>
        {this.state.isOpen ? (
          <Button onClick={this.toggleOpen} isOpen>
            Check in — Check out
          </Button>
        ) : (
          <Button onClick={this.toggleOpen}>Dates</Button>
        )}
        {this.state.isOpen && (
          <CalendarWrapper>
            <DateFilter>
              <DayPicker />
            </DateFilter>
          </CalendarWrapper>
        )}
      </div>
    );
  }
}
