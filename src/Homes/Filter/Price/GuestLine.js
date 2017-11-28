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
  flex-direction: column;
  margin-right: 86px;
`;

const Age = styled.div`
  if ({props.guestInfo}) {
    display: inline-block;
    font-size: 16px;
    font-family: "Circular Air", "Arial", sans-serif;
    color: #383838;
  }
  else: hidden;
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
  ${"" /* background-color: inherit;
  border: 1px solid #008489;
  border-radius: 50%;
  color: #008489; */} background-color: inherit;
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

export function GuestLine(props) {
  return (
    <Wrapper>
      <Type>
        <Title>{props.guestType}</Title>
        <Age>{props.guestInfo}</Age>
      </Type>
      <Quantity>
        <MinusButton>
          <Minus src={minus} />
        </MinusButton>
        {/* <MinusButton>-</MinusButton> */}
        <Total>0</Total>
        <PlusButton>
          <Plus src={plus} />
        </PlusButton>
      </Quantity>
    </Wrapper>
  );
}
