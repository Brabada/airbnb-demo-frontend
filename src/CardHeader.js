import React from "react";
import styled from "styled-components";
import "normalize.css";
// import "flexboxgrid2";
import "./flexgrid.css";

//sources
import righticon from "./CardHeader/iconright.svg";

// styled-components
const SeeAll = styled.a`
color: rgba(56, 56, 56, 1);
font-size: 12px;
  @media (min-width: 768px) {font-size: 14px;}
   /* visibility: ${props =>
     props.on ? "collapse" : "visible"}; /*not working*/ 
`;

const RightIcon = styled.img`
  width: 5px;
  height: 10px;
`;

//Create h2 header w/ See all button
export function CardHeader(props) {
  return (
    <div className="row-nowrap middle-xs between-xs">
      <div className="col-xs-10 col-sm-11 col-md-11">
        <h2>{props.title}</h2>
      </div>
      <div className="col-xs-3 col-sm-2 col-md-2">
        <SeeAll>
          See all <RightIcon src={righticon} alt="Right Icon" />
        </SeeAll>
      </div>
    </div>
  );
}
