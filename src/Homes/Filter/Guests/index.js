import React from "react";
import styled from "styled-components";
import MediaQuery from "react-responsive";

//components
import { FiltButton } from "../Button";
import { GuestLine } from "./GuestLine";

//sources
import close from "./close.svg";

//styled-components
const Wrapper = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;

  width: 100%;
  height: 100%;

  background-color: #fff;

  border: 1px solid rgba(72, 72, 72, 0.2);
  border-radius: 4px;

  @media (min-width: 768px) {
    position: absolute;
    top: 137px;
    bottom: auto;
    left: auto;
    right: auto;

    width: 326px;
    height: 291px;
  }
`;

const Header = styled.header`
  border-bottom: 1px solid rgba(72, 72, 72, 0.2);
  margin-bottom: 40px;
`;

const GuestSection = styled.section`
  margin-bottom: 24px;

  @media (min-width: 768px) {
    margin: 32px 16px 18px 24px;
  }
`;

const Footer = styled.footer`
  border-top: 1px solid rgba(72, 72, 72, 0.2);
  position: absolute;
  right: 0;
  bottom: 0;
  left: 0;
`;

const Actions = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 48px 20px 15px 24px;
`;

const ActionBar = styled(Actions)`
  margin: 16px 8px 0px 8px;
  padding-bottom: 16px;
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

const Button = styled(FiltButton)`
  background-color: ${props => (props.isOpen ? "#008489" : "#fff")};
  color: ${props => (props.isOpen ? "#fff" : "#383838")};
`;

const SaveButton = styled.button`
  display: block;
  background-color: #ff5a5f;
  border: none;
  border-radius: 4px;
  font-family: "Circular Air", "Arial", sans-serif;
  font-weight: bold;
  font-size: 18px;
  color: #fff;

  moz-box-sizing: border-box;
  box-sizing: border-box;
  width: 100%;

  padding-top: 16px;
  padding-bottom: 16px;
  margin: 8px 0;
`;

export class Guests extends React.Component {
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
            Guests
          </Button>
        ) : (
          <Button onClick={this.toggleOpen}>Guests</Button>
        )}
        {this.state.isOpen && (
          <Wrapper>
            <MediaQuery minWidth="768px">
              <GuestSection>
                <GuestLine guestType="Adults" />
                <GuestLine guestType="Children" guestInfo="Ages 2 — 12" />
                <GuestLine guestType="Infants" guestInfo="Under 2" />
              </GuestSection>
              <Actions>
                <Cancel onClick={this.toggleOpen}>Cancel</Cancel>
                <Apply>Apply</Apply>
              </Actions>
            </MediaQuery>
            <MediaQuery maxWidth="766px">
              <Header>
                <ActionBar>
                  <CloseButton onClick={this.toggleOpen}>
                    <Close src={close} />
                  </CloseButton>
                  <Title>Guests</Title>
                  <Reset>Reset</Reset>
                </ActionBar>
              </Header>
              <div className="container">
                <GuestSection>
                  <GuestLine guestType="Adults" />
                  <GuestLine guestType="Children" guestInfo="Ages 2 — 12" />
                  <GuestLine guestType="Infants" guestInfo="Under 2" />
                </GuestSection>
              </div>
              <Footer>
                <div className="container">
                  <SaveButton>Save</SaveButton>
                </div>
              </Footer>
            </MediaQuery>
          </Wrapper>
        )}
      </div>
    );
  }
}
