import React from "react";
import styled from "styled-components";

//Components

//styled-components
export const FiltButton = styled.button`
  font-size: 14px;
  color: #383838;
  font-family: "Circular Air Book", "Arial", sans-serif;

  padding: 7px 16px;

  border: 1px solid rgba(72, 72, 72, 0.2);
  border-radius: 4px;
  background-color: inherit;

  margin-right: 12px;
`;

//create single button for filter
export function Button(props) {
  return <FiltButton>{props.title}</FiltButton>;
}
