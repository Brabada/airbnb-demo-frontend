import React from "react";
import styled from "styled-components";

//styled-components
const CardBody = styled.div`
  border: 1px solid rgba(72, 72, 72, 0.2);
  border-radius: 4px;
  box-sizing: border-box;
`;
const Img = styled.img`
  width: 100%;
  height: 100%;
  vertical-align: bottom;

  @media (min-width: 768px) {
    width: 96px;
    height: 72px;
    margin-right: 24px;
    vertical-align: bottom;
  }
`;

const Text = styled.div`
  display: block;
  font-weight: bold;
  font-size: 12px;

  padding-left: 12px;
  padding-bottom: 15px;
  padding-top: 15px;

  @media (min-width: 768px) {
    font-size: 17px;
    display: inline-block;
    padding-bottom: 27px;
  }
`;

export function Card(props) {
  return (
    <div className="col-xs-6 col-md-5 col-lg-4">
      <a href="">
        <CardBody>
          <Img alt={props.type} src={props.img} />
          <Text>{props.type}</Text>
        </CardBody>
      </a>
    </div>
  );
}
