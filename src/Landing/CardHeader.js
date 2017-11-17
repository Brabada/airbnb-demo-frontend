import React from "react";
import styled from "styled-components";
import "./flexgrid.css";
// import { Link } from "react-router-dom";
//sources
import righticon from "./CardHeader/iconright.svg";

// styled-components
const Wrapper = styled.div`
  margin-bottom: 16px;
  margin-top: 42px;

  @media (min-width: 768px) {
    margin-bottom: 24px;
    margin-top: 48px;
  }
`;

const SeeAll = styled.div`
  display: inline-block;
  color: rgba(56, 56, 56, 1);
  font-size: 10px;
  padding-right: 8px;
  font-family: "Circular Air Book", sans-serif;

  @media (min-width: 768px) {
    font-size: 14px;
  }
`;

const RightIcon = styled.img`
  width: 5px;
  height: 10px;
`;

const H2 = styled.h2`
  margin-top: 0;
  margin-bottom: 0;
`;

//Create h2 header w/ See all button
export function CardHeader(props) {
  return (
    <Wrapper>
      <div className="row-nowrap middle-xs between-xs ">
        <div className="col-xs-10 col-md-10">
          <H2>{props.title}</H2>
        </div>
        <div className="col-xs-2  col-md-2">
          <div className="row end-xs">
            {/* <Link to={props.link}> */}
            <SeeAll>
              See all <RightIcon src={righticon} alt="Right Icon" />
            </SeeAll>
            {/* </Link> */}
          </div>
        </div>
      </div>
    </Wrapper>
  );
}
