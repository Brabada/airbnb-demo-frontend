import React from "react";
import styled from "styled-components";

//Components
import { Button } from "./Button";
import { Dates } from "./Date/index";
import Guests from "./Guests/index";
import { RoomType } from "./RoomType/index";
import Price from "./Price/index";
import Dropdown from "./Dropdown";
import InstantBook from "./InstantBook/index";
import { MoreFiltersDropdown } from "./MoreFiltersDropdown";
import MoreFilters from "./MoreFilters/index";

//styled-components
const Filters = styled.div`
  padding: 12px 0;
  border-bottom: 0.5px solid rgba(72, 72, 72, 0.2);
  background-color: #fff;
  position: relative;
`;

const FilterBar = styled.div`
  display: flex;
`;

//filter bar
export default class Filter extends React.Component {
  state = {
    isOpen: false,
    openedFilter: ""
  };

  openFilter = key => {
    if (this.state.openedFilter !== key) {
      this.setState({ openedFilter: key });
      this.setState({ isOpen: true });
    } else {
      this.state.isOpen
        ? this.setState({ isOpen: false })
        : this.setState({ isOpen: true });
    }
  };

  render() {
    return (
      <Filters>
        <div className="container">
          <FilterBar>
            <Dropdown
              id="dates"
              handleOpen={this.openFilter}
              label="Dates"
              isOpen={this.state.isOpen && this.state.openedFilter === "dates"}
              labelOpen="Check in — Check out"
            >
              <Dates />
            </Dropdown>

            <Dropdown
              id="guests"
              handleOpen={this.openFilter}
              label="Guests"
              isOpen={this.state.isOpen && this.state.openedFilter === "guests"}
              labelOpen="Guests"
            >
              <Guests />
            </Dropdown>

            <Dropdown
              id="roomType"
              handleOpen={this.openFilter}
              label="Room type"
              isOpen={
                this.state.isOpen && this.state.openedFilter === "roomType"
              }
              labelOpen="Room type"
              showLg
            >
              <RoomType />
            </Dropdown>

            <Dropdown
              id="price"
              handleOpen={this.openFilter}
              label="Price"
              isOpen={this.state.isOpen && this.state.openedFilter === "price"}
              labelOpen="Price"
              showLg
            >
              <Price />
            </Dropdown>

            <Dropdown
              id="instantBook"
              handleOpen={this.openFilter}
              label="Instant book"
              isOpen={
                this.state.isOpen && this.state.openedFilter === "instantBook"
              }
              labelOpen="Instant book"
              showLg
            >
              <InstantBook />
            </Dropdown>
            <MoreFiltersDropdown
              id="moreFilters"
              handleOpen={this.openFilter}
              label="More filters"
              isOpen={
                this.state.isOpen && this.state.openedFilter === "moreFilters"
              }
              labelOpen="More filters"
            >
              <MoreFilters />
            </MoreFiltersDropdown>
          </FilterBar>
        </div>
      </Filters>
    );
  }
}
