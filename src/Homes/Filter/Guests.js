import React from "react";
import styled from "styled-components";

//sources
import plus from "./plus.svg";
import minus from "./minus.svg";

//components
import { FiltButton } from "./Button";

//styled-components
const Wrapper = styled.div`
  position: absolute;
  top: 130px;
  width: 326px;
  height: 291px;
  background-color: #fff;
  border: 1px solid rgba(72, 72, 72, 0.3);
  border-radius: 4px;
`;

const Adults = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 30px 15px 0px 24px;
`;

const Children = styled(Adults)`margin: 18px 15px 0px 24px;`;

const Infants = styled(Adults)`margin: 25px 15px 16px 24px;`;

const Type = styled.div`
  display: flex;
  flex-direction: column;
`;

const Title = styled.div`
  display: inline-block;
  font-size: 20px;
  font-family: "Circular Air Book", "Arial", sans-serif;
  color: #383838;
`;

const Age = styled.div`
  display: inline-block;
  font-size: 16px;
  font-family: "Circular Air", "Arial", sans-serif;
  color: #383838;
  margin-top: 7px;
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

const Actions = styled(Adults)`margin: 40px 20px 15px 24px;`;

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
            <Adults>
              <Type>
                <Title>Adults</Title>
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
            </Adults>

            <Children>
              <Type>
                <Title>Children</Title>
                <Age>Ages 2 — 12</Age>
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
            </Children>

            <Infants>
              <Type>
                <Title>Infants</Title>
                <Age>Under 2</Age>
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
            </Infants>

            <Actions>
              <Cancel>Cancel</Cancel>
              <Apply>Apply</Apply>
            </Actions>
          </Wrapper>
        )}
      </div>
    );
  }
}
