import React from "react";
import styled from "styled-components";
import { FiltButton } from "./Button";
import close from "./close.svg";

//styled-components

export const Overflow = styled.div`
  position: absolute;
  top: 100%;
  left: 0;
  right: 0;
  height: 100vh;
  background-color: rgba(255, 255, 255, 0.8);
`;

const MoreFilterWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #fff;
  overflow: auto;

  @media screen and (min-width: 768px) {
    top: 136px;
  }

  @media screen and (min-width: 991px) {
    right: calc(50% - 220px);
    left: auto;
    background-color: #fff;
    padding-left: 16px;
    display: inline-block;
    border-radius: 4px;
  }
`;

const ContentWrapper = styled.div`
  box-sizing: border-box;
  margin-left: auto;
  margin-right: auto;
  padding-right: 8px;
  padding-left: 8px;

  @media only screen and (min-width: 576px) {
    width: 560px;
    max-width: 100%;
  }

  @media only screen and (min-width: 768px) {
    width: 752px;
    max-width: 100%;
  }
  @media (min-width: 991px) {
    width: 100%;
    margin: auto;
    padding: auto;
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
  cursor: pointer;
`;

const Cancel = styled.button`
  background-color: inherit;
  border: none;
  font-family: "Circular Air Book", "Arial", sans-serif;
  color: #383838;
  font-size: 18px;

  padding: 0;
  margin-right: 16px;

  cursor: pointer;
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
  cursor: pointer;
`;

const Footer = styled.footer`
  display: block;
  border-top: 1px solid rgba(72, 72, 72, 0.2);
  padding: 0 8px;

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
        <div>
          <Overflow />
          <MoreFilterWrapper>
            <ContentWrapper>
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

              <Footer>
                <SeeHomes>See homes</SeeHomes>
              </Footer>
            </ContentWrapper>
          </MoreFilterWrapper>
        </div>
      )}
    </div>
  );
}
