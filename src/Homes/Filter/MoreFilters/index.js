import React from "react";
import styled from "styled-components";

//components
import RoomsBeds from "./RoomsBeds/index";
import MoreOptions from "./MoreOptions/index";
import Amenities from "./Amenities/index";
import Facilities from "./Facilities/index";
import { RoomType } from "./RoomType/index";
import Price from "./Price/index";

//styled-components

const Wrapper = styled.div`
  background-color: #fff;
`;

export default class MoreFilters extends React.Component {
  render() {
    return (
      <Wrapper>
        <RoomType />
        <Price />
        <RoomsBeds />
        <MoreOptions />
        <Amenities />
        <Facilities />
      </Wrapper>
    );
  }
}
