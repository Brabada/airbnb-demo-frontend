import React from "react";
import styled from "styled-components";
import "normalize.css";
import "flexboxgrid2";

const CardBody = styled.div`
  border: 1px solid rgba(72, 72, 72, 0.2);
  border-radius: 4px;
  box-sizing: border-box;
`;
const Img = styled.img`
  width: 96px;
  height: 100%;
  margin-right: 24px;
  vertical-align: bottom;
`;
const Text = styled.div`
  display: inline-block;
  padding-bottom: 27px;
  font-weight: bold;
`;

export function Card(props) {
  return (
    <div className="col-lg-4">
      <a href="">
        <CardBody>
          <Img alt={props.type} src={props.url} />
          <Text>{props.type}</Text>
        </CardBody>
      </a>
    </div>
  );
}
