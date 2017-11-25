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
  margin-bottom: 24px;
`;

const Type = styled.div`
  display: flex;
  margin-right: 86px;
`;

const Title = styled.div`
  display: inline-block;
  font-size: 20px;
  font-family: "Circular Air Book", "Arial", sans-serif;
  color: #383838;
  margin-bottom: 7px;
`;

const Quantity = styled.div`
  display: flex;
  align-items: center;
`;

const MinusButton = styled.button`
  background-color: inherit;
  border: none;
`;

const PlusButton = styled.button`
  background-color: inherit;
  border: none;
  padding-right: 0;
`;

const Minus = styled.img`
  height: 32px;
  width: 32px;
`;

const Plus = styled.img`
  height: 32px;
  width: 32px;
`;

const Total = styled.div`
  display: inline-block;
  font-size: 18px;
  font-family: "Circular Air", "Arial", sans-serif;
  margin: 0 11px;
`;

export function RoomLine(props) {
  return (
    <Wrapper>
      <Type>
        <Title>{props.roomType}</Title>
      </Type>
      <Quantity>
        <MinusButton>
          <Minus src={minus} />
        </MinusButton>
        {/* <MinusButton>-</MinusButton> */}
        <Total>0+</Total>
        <PlusButton>
          <Plus src={plus} />
        </PlusButton>
      </Quantity>
    </Wrapper>
  );
}
