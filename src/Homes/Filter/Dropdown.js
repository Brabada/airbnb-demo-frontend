import React from "react";
import styled from "styled-components";

import { FiltButton } from "./Button";
import MediaQuery from "react-responsive";
import close from "./close.svg";

//styled-components
const CalendarWrapper = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;

  @media (min-width: 768px) {
    position: absolute;
    top: 55px;
    bottom: auto;
    left: auto;
    right: auto;
  }
`;

const LargeCalendar = styled.div`
  width: 100%;
  height: 100%;
  background-color: #fff;
  border: 1px solid rgba(72, 72, 72, 0.2);
  border-radius: 4px;
`;

const Button = styled(FiltButton)`
  background-color: ${props => (props.isOpen ? "#008489" : "#fff")};
  color: ${props => (props.isOpen ? "#fff" : "#383838")};
  display: ${props => (props.showLg ? "none" : "block")};

  @media screen and (min-width: 991px) {
    display: flex;
  }
`;

const Actions = styled.div`
  display: ${props => (props.showLg ? "none" : "flex")};
  justify-content: space-between;
  align-items: center;
  margin: 24px 20px 20px 20px;
  @media screen and (min-width: 991px) {
    display: flex;
  }
`;

const ActionBar = styled(Actions)`
  margin: 16px 8px 40px 8px;
`;

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

export default class Dropdown extends React.Component {
  openFilter = () => {
    return this.props.handleOpen(this.props.id);
  };

  render() {
    return (
      <div>
        {this.props.isOpen ? (
          <Button onClick={this.openFilter} isOpen showLg={this.props.showLg}>
            {this.props.labelOpen}
          </Button>
        ) : (
          <Button onClick={this.openFilter} showLg={this.props.showLg}>
            {this.props.label}
          </Button>
        )}

        {this.props.isOpen && (
          <CalendarWrapper>
            <LargeCalendar>
              <MediaQuery maxWidth="766px">
                <ActionBar>
                  <CloseButton onClick={this.openFilter}>
                    <Close src={close} />
                  </CloseButton>
                  {this.props.id === "dates" && <Title>When</Title>}
                  {this.props.id !== "dates" && (
                    <Title>{this.props.label}</Title>
                  )}

                  <Reset>Reset</Reset>
                </ActionBar>
              </MediaQuery>
              <div>{this.props.children}</div>
              <MediaQuery minWidth="768px">
                <Actions showLg={this.props.showLg}>
                  <Cancel onClick={this.openFilter}>Cancel</Cancel>
                  <Apply>Apply</Apply>
                </Actions>
              </MediaQuery>
            </LargeCalendar>
          </CalendarWrapper>
        )}
      </div>
    );
  }
}
