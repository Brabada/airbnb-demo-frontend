import React from "react";
import styled from "styled-components";
import {
  DateRangePicker,
  SingleDatePicker,
  DayPickerRangeController
} from "react-dates";

import "react-dates/lib/css/_datepicker.css";
import moment from "moment";
import MediaQuery from "react-responsive";
import "./_datepicker.css";

import { FiltButton } from "./Button";

//sources
import rightarrow from "./arrowright.svg";
import close from "./close.svg";

//styled-components

const CloseButton = styled.button`
  border: none;
  background-color: inherit;
`;

const Close = styled.img`
  width: 16px;
  height: 16px;
`;

const Title = styled.div`
  display: inline-block;
  font-size: 14px;
  font-family: "Circular Air Book", "Arial", sans-serif;
  color: #383838;
`;

const Reset = styled.button`
  font-size: 14px;
  font-family: "Circular Air Book", "Arial", sans-serif;
  color: #0f7276;
  border: none;
  background-color: inherit;
`;

const Button = styled(FiltButton)`
  background-color: ${props => (props.isOpen ? "#008489" : "#fff")};
  color: ${props => (props.isOpen ? "#fff" : "#383838")};
`;

const CalendarWrapper = styled.div`
  @media (max-width: 767px) {
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
  }

  @media (min-width: 768px) {
    position: absolute;
    top: 133px;
  }
`;

const SmallCalendar = styled.div`
  width: 100%;
  height: 100%; 
  background-color: #fff;
  border: 1px solid rgba(72, 72, 72, 0.2);
  border-radius: 4px;
  }
`;

const MediumCalendar = styled.div`
  width: 100%;
  height: 100%;
  background-color: #fff;
  border: 1px solid rgba(72, 72, 72, 0.2);
  border-radius: 4px;
  }
`;

const LargeCalendar = styled.div`
  width: 100%;
  height: 100%;
  background-color: #fff;
  border: 1px solid rgba(72, 72, 72, 0.2);
  border-radius: 4px;
`;

const Actions = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 10px 20px 20px 24px;
`;

const ActionBar = styled(Actions)`margin: 16px 8px 40px 8px;`;

const DateInputContainer = styled(Actions)`
  justify-content: start;
  margin: 0;
`;

const CheckIn = styled.input`
  display: inline-block;
  background: inherit;
  border: none;
  text-decoration: underline solid #0f7276;
  font-family: "Circular Air", "Arial", sans-serif;
  color: #0f7276;
  font-size: 18px;
`;

const CheckOut = styled.input`
  background: inherit;
  border: none;
  color: #636363;
  display: inline-block;
  font-size: 18px;
  font-family: "Circular Air", "Arial", sans-serif;
`;

const RightArrow = styled.img`
  display: inline-block;
  width: 18px;
  height: 10px;
`;

const ImgWrapper = styled.div`display: inline-block;`;

const Cancel = styled.button`
  background-color: inherit;
  border: none;
  font-family: "Circular Air Book", "Arial", sans-serif;
  color: #636363;
  font-size: 16px;
`;

const Apply = styled(Cancel)`
  margin-right: 10px;
  color: #008489;
`;

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

  // onOutsideClick = () => {
  //   if (this.state.isOpen) {
  //     this.setState({ isOpen: false });
  //   }
  // };

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
            <MediaQuery minWidth={"992px"}>
              <LargeCalendar>
                <DayPickerRangeController
                  isDayBlocked={day => day.isBefore(moment(), "day")}
                  numberOfMonths={2}
                  orientation={"horizontal"}
                  monthFormat={"MMMM YYYY"}
                  hideKeyboardShortcutsPanel
                />
                <Actions>
                  <Cancel>Cancel</Cancel>
                  <Apply>Apply</Apply>
                </Actions>
              </LargeCalendar>
            </MediaQuery>

            <MediaQuery minWidth={"768px"} maxWidth={"991px"}>
              <MediumCalendar>
                <DayPickerRangeController
                  isDayBlocked={day => day.isBefore(moment(), "day")}
                  numberOfMonths={1}
                  orientation={"horizontal"}
                  monthFormat={"MMMM YYYY"}
                  hideKeyboardShortcutsPanel
                />
                <Actions>
                  <Cancel>Cancel</Cancel>
                  <Apply>Apply</Apply>
                </Actions>
              </MediumCalendar>
            </MediaQuery>

            <MediaQuery maxWidth={"766px"}>
              <SmallCalendar>
                <ActionBar>
                  <CloseButton>
                    <Close src={close} />
                  </CloseButton>
                  <Title>When</Title>
                  <Reset>Reset</Reset>
                </ActionBar>
                <DateInputContainer>
                  {/* <DateRangePicker /> */}
                  <CheckIn placeholder="Check-in" />
                  <ImgWrapper>
                    <RightArrow src={rightarrow} />
                  </ImgWrapper>
                  <CheckOut placeholder="Check-out" />
                </DateInputContainer>
                <DayPickerRangeController
                  isDayBlocked={day => day.isBefore(moment(), "day")}
                  numberOfMonths={2}
                  orientation={"vertical"}
                  monthFormat={"MMMM YYYY"}
                  hideKeyboardShortcutsPanel
                />
              </SmallCalendar>
            </MediaQuery>
          </CalendarWrapper>
        )}
      </div>
    );
  }
}
