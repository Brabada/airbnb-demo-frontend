import React from "react";
import styled from "styled-components";

//sources
import plus from "./plus.svg";
import minus from "./minus.svg";

//styled-components
const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: ${props => (props.last ? "32px" : "24px")};
`;

const Type = styled.div`
  display: flex;
  margin-right: 86px;
`;

const Title = styled.div`
  display: inline-block;
  font-size: 16px;
  font-family: "Circular Air", "Arial", sans-serif;
  color: #383838;

  @media (min-width: 768px) {
    font-size: 18px;
  }
`;

const Quantity = styled.div`
  display: flex;
  align-items: center;
`;

const MinusButton = styled.button`
  border: none;
  cursor: pointer;

  background-color: transparent;
  background-image: url(${minus});
  background-repeat: no-repeat;
  background-size: 100%;
  padding: 5px;

  width: 32px;
  height: 32px;
`;

const PlusButton = styled.button`
  border: none;
  cursor: pointer;

  background-color: transparent;
  background-image: url(${plus});
  background-repeat: no-repeat;
  background-size: 100%;
  padding: 5px;

  width: 32px;
  height: 32px;
`;

const Total = styled.div`
  display: inline-block;
  font-size: 18px;
  font-family: "Circular Air", "Arial", sans-serif;
  margin: 0 16px;
`;

export function RoomLine(props) {
  return (
    <Wrapper>
      <Type>
        <Title>{props.roomType}</Title>
      </Type>
      <Quantity>
        <MinusButton />
        <Total>0+</Total>
        <PlusButton />
      </Quantity>
    </Wrapper>
  );
}
