import React from "react";
import styled from "styled-components";
import MediaQuery from "react-responsive";

//components
import GuestLine from "./GuestLine";

//styled-components

// const Header = styled.header`
//   border-bottom: 1px solid rgba(72, 72, 72, 0.2);
//   margin-bottom: 40px;
// `;

const GuestSection = styled.section`
  margin-bottom: 24px;

  @media (min-width: 768px) {
    margin: 32px 16px 38px 24px;
  }
`;

const Footer = styled.footer`
  border-top: 1px solid rgba(72, 72, 72, 0.2);
  position: absolute;
  right: 0;
  bottom: 0;
  left: 0;
  padding: 0 8px;
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

  cursor: pointer;
`;

export default function Guests() {
  return (
    <div>
      <MediaQuery minWidth="768px">
        <GuestSection>
          <GuestLine guestType="Adults" />
          <GuestLine guestType="Children" guestInfo="Ages 2 — 12" />
          <GuestLine guestType="Infants" guestInfo="Under 2" />
        </GuestSection>
      </MediaQuery>

      <MediaQuery maxWidth="766px">
        <div className="container">
          <GuestSection>
            <GuestLine guestType="Adults" />
            <GuestLine guestType="Children" guestInfo="Ages 2 — 12" />
            <GuestLine guestType="Infants" guestInfo="Under 2" />
          </GuestSection>
        </div>
        <Footer>
          <SaveButton>Save</SaveButton>
        </Footer>
      </MediaQuery>
    </div>
  );
}
