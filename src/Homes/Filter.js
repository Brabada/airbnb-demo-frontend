import React from "react";
import styled from "styled-components";

//Components
import { Button } from "./Filter/Button";

//styled-components
const Filter = styled.div`
  padding: 12px 0;
  border-bottom: 1px solid rgba(72, 72, 72, 0.3);
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
export default function() {
  return (
    <Filter>
      <div className="container">
        <FilterBar>
          <Button title="Dates" />
          <Button title="Guests" />

          <Visible>
            <Button title="Room type" />
            <Button title="Price" />
            <Button title="Instant book" />
          </Visible>

          <Button title="More filters" />
        </FilterBar>
      </div>
    </Filter>
  );
}