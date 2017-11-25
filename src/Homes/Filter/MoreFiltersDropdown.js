import React from "react";
import styled from "styled-components";
import { FiltButton } from "./Button";
import close from "./close.svg";

//styled-components
const MoreFilterWrapper = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: #fff;
  overflow-y: scroll;

  @media (min-width: 768px) {
    position: fixed;
    top: 134px;
  }

  @media (min-width: 991px) {
    right: 30%;
  }
`;

const ContentWrapper = styled.div`
  width: 100%;
  height: 100%;
  @media (min-width: 991px) {
    box-sizing: border-box;
    width: 100%;
    height: 100%;
    padding-left: calc(5%);
    background-color: #fff;
  }
`;

const Button = styled(FiltButton)`
  background-color: ${props => (props.isOpen ? "#008489" : "#fff")};
  color: ${props => (props.isOpen ? "#fff" : "#383838")};
  display: block;

  @media screen and (min-width: 991px) {
    display: flex;
  }
`;

const Close = styled.img`
  width: 16px;
  height: 16px;
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
  color: #383838;
  font-size: 18px;
  margin-right: 16px;
`;

const Apply = styled.a`
  background-color: #008489;
  border: none;
  font-family: "Circular Air", "Arial", sans-serif;
  font-weight: bold;
  color: #fff;
  text-align: center;
  font-size: 18px;
  border-radius: 4px;
  padding: 16px 24px;
  margin-bottom: 8px;
`;

const Title = styled.div`
  display: inline-block;
  font-size: 14px;
  font-family: "Circular Air Book", "Arial", sans-serif;
  color: #383838;
`;

const Actions = styled.div`
  display: none;
  @media (min-width: 768px) {
    display: flex;
    margin-top: 40px;
    justify-content: center;
    align-items: center;
  }
  @media (min-width: 991px) {
    margin-top: 32px;
    justify-content: flex-end;
    align-items: center;
  }
`;

const ActionBar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 16px 8px 40px 8px;
  @media (min-width: 767px) {
    display: none;
  }
`;

const CloseButton = styled.button`
  border: none;
  background-color: inherit;
`;

const MobileFooter = styled.footer`
  display: block;
  border-top: 1px solid rgba(72, 72, 72, 0.2);

  right: 0;
  bottom: 0;
  left: 0;
  @media (min-width: 768px) {
    display: none;
  }
`;

const SeeHomes = styled.a`
  display: block;
  background-color: #ff5a5f;
  border: none;
  border-radius: 4px;
  font-family: "Circular Air", "Arial", sans-serif;
  font-weight: bold;
  font-size: 18px;
  color: #fff;
  text-align: center;

  moz-box-sizing: border-box;
  box-sizing: border-box;
  width: 100%;

  padding-top: 16px;
  padding-bottom: 16px;
  margin: 8px 0;
`;

export function MoreFiltersDropdown(props) {
  const openFilter = function() {
    return props.handleOpen(props.id);
  };

  return (
    <div>
      {props.isOpen ? (
        <Button onClick={openFilter} isOpen showLg={props.showLg}>
          {props.labelOpen}
        </Button>
      ) : (
        <Button onClick={openFilter} showLg={props.showLg}>
          {props.label}
        </Button>
      )}

      {props.isOpen && (
        <MoreFilterWrapper>
          <ContentWrapper>
            <div className="container">
              <ActionBar>
                <CloseButton onClick={openFilter}>
                  <Close src={close} />
                </CloseButton>
                <Title>All filters(0)</Title>
                <Reset>Clear All</Reset>
              </ActionBar>

              <div>{props.children}</div>

              <Actions>
                <Cancel onClick={openFilter}>Cancel</Cancel>
                <Apply>See homes</Apply>
              </Actions>

              <MobileFooter>
                <div className="container">
                  <SeeHomes>See homes</SeeHomes>
                </div>
              </MobileFooter>
            </div>
          </ContentWrapper>
        </MoreFilterWrapper>
      )}
    </div>
  );
}
