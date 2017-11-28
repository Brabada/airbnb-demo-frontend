import React from "react";
import styled from "styled-components";

import SliderLine from "./SliderLine";

//styled-components
const Wrapper = styled.section`
  border-bottom: 0.5px solid rgba(72, 72, 72, 0.3);
`;

const Title = styled.h3`
  font-family: "Circular Air Book", "Arial", sans-serif;
  font-size: 18px;
  color: #383838;
  padding: 0;
  margin: 0;
  margin-bottom: 24px;
  @media (min-width: 768px) {
    font-size: 20px;
  }
`;

export default class MoreOptions extends React.Component {
  state = {
    isChecked: false
  };

  changeCheck = () => {
    if (this.state.isChecked) {
      this.setState({ isChecked: false });
    } else {
      this.setState({ isChecked: true });
    }
  };

  render() {
    return (
      <Wrapper>
        <Title>More options</Title>
        <SliderLine
          title="Instant Book"
          description="Secure a reservation instantly."
        />

        <SliderLine
          title="Superhost"
          description="Stay with recognized hosts."
          showLg
        />
      </Wrapper>
    );
  }
}
