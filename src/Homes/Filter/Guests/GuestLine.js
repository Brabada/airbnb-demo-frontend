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
  display: ${props => (props.guestInfo ? "inline-block" : "none")};
  font-size: 16px;
  font-family: "Circular Air", "Arial", sans-serif;
  color: #383838;
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
  margin: 0 11px;
`;

export default function Guest(props) {
  return (
    <Wrapper>
      <Type>
        <Title>{props.guestType}</Title>
        <Age guestInfo={props.guestInfo}>{props.guestInfo}</Age>
      </Type>
      <Quantity>
        <MinusButton />
        <Total>0</Total>
        <PlusButton />
      </Quantity>
    </Wrapper>
  );
}
