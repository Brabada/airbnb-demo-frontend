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

//sources
import rightarrow from "./arrowright.svg";

//styled-components

const CalendarWrapper = styled.div`
  position: fixed;
  top: 110px;
  bottom: 0;
  left: 0;
  right: 0;
`;

const DateInputContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: start;
  margin-top: 8px;
  margin-bottom: 8px;
`;
const DayControllerWrapper = styled.div`
  height: calc(100% - 15px);
  width: 100%;
`;

const CheckIn = styled.span`
  display: inline-block;
  background: inherit;
  border-bottom: 1px solid #0f7276;
  font-family: "Circular Air", "Arial", sans-serif;
  color: #0f7276;
  font-size: 18px;
  margin-right: 8px;
  margin-left: 8px;
`;

const CheckOut = styled.span`
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
  margin-right: 8px;
`;

export function Dates(props) {
  return (
    <div>
      <MediaQuery minWidth="992px">
        <DayPickerRangeController
          isDayBlocked={day => day.isBefore(moment(), "day")}
          numberOfMonths={2}
          orientation="horizontal"
          hideKeyboardShortcutsPanel
        />
      </MediaQuery>

      <MediaQuery minWidth="768px" maxWidth="991px">
        <DayPickerRangeController
          isDayBlocked={day => day.isBefore(moment(), "day")}
          numberOfMonths={1}
          orientation="horizontal"
          hideKeyboardShortcutsPanel
        />
      </MediaQuery>

      <MediaQuery maxWidth="766px">
        <DateInputContainer>
          <CheckIn>Check-in</CheckIn>
          <RightArrow src={rightarrow} />
          <CheckOut>Check-out</CheckOut>
        </DateInputContainer>
        <CalendarWrapper>
          <DayControllerWrapper>
            <DayPickerRangeController
              isDayBlocked={day => day.isBefore(moment(), "day")}
              hideKeyboardShortcutsPanel
              orientation="verticalScrollable"
              numberOfMonths={4}
              DayPickerNavigation
            />
          </DayControllerWrapper>
        </CalendarWrapper>
      </MediaQuery>
    </div>
  );
}
