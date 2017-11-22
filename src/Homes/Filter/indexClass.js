import React from "react";
import styled from "styled-components";

//Components
import { Button } from "./Button";
import { Dates } from "./Date/index";
import { Guests } from "./Guests/index";
import Dropdown from "./Dropdown";

//styled-components
const Filters = styled.div`
  padding: 12px 0;
  border-bottom: 0.5px solid rgba(72, 72, 72, 0.2);
  background-color: #fff;
`;

const FilterBar = styled.div`display: flex;`;

const Visible = styled.div`
  display: none;

  @media (min-width: 992px) {
    display: inline-block;
  }
`;

//filter bar
export default class Filter extends React.Component {
  state = {
    isOpen: false,
    openedFilter: ""
  };
  openFilter = key => {
    this.setState({ openedFilter: key });
  };

  toggleOpen = e => {
    // if (this.state.isOpen) {
    //   this.setState({ isOpen: false });
    // } else {
    //   this.setState({ isOpen: true });
    // }
    // if (e.target.this.state.openedFilter)
  };

  render() {
    return (
      <Filters>
        <div className="container">
          <FilterBar>
            <Dropdown
              handleOpen={openFilter}
              label="Dates"
              isOpen={this.state.isOpen && this.state.openedFilter === "dates"}
            >
              <Dates />
            </Dropdown>

            <Guests />

            <Visible>
              <Button title="Room type" />
              <Button title="Price" />
              <Button title="Instant book" />
            </Visible>

            <Button title="More filters" />
          </FilterBar>
        </div>
      </Filters>
    );
  }
}
