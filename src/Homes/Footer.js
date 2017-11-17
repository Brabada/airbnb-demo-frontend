import React from "react";
import styled from "styled-components";

//components
import MapButton from "./Map/Button";

//styled-components
const Footer = styled.footer`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Warning = styled.h3`
  display: block;
  margin: 0 0 25px 0;
  font-family: "Circular Air Book", "Arial", sans-serif;
  font-size: 16px;
  font-weight: 300;
  color: rgba(99, 99, 99, 1);
`;

const Wrapper = styled.div`
  position: relative;
  display: block;
  width: 100%;
  padding-bottom: 88px;

  @media (min-width: 768px) {
    position: absolute;
  }

  @media (min-width: 992px) {
    display: none;
  }
`;

//footer
export default function() {
  return (
    <Footer>
      <Warning>
        Enter dates to see full pricing. Additional fees apply. Taxes may be
        added.
      </Warning>
      <Wrapper>
        <MapButton />
      </Wrapper>
    </Footer>
  );
}
