import React from "react";
import styled from "styled-components";

export class Dropdown extends React.Component {
  render() {
    return <div> {this.props.children} </div>;
  }
}
