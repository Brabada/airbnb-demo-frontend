import React from "react";
import styled from "styled-components";
import "normalize.css";
import "flexboxgrid2";
import righticon from "./CardHeader/iconright.svg";

const Flex = styled.div`
  display: flex;
  flex-wrap: no-wrap};
  justify-content: space-between;
  align-items: center;
`;

const SeeAll = styled.a`
  font-size: 14px;
  color: rgba(56, 56, 56, 1);
  visibility: ${props => (props.on ? "collapse" : "visible")}; /*not working*/
`;

const RightIcon = styled.img``;

export function CardHeader(props) {
  return (
    <Flex>
      <h2>{props.Title}</h2>
      <SeeAll type={props.SeeAll}>
        See all <RightIcon src={righticon} alt="Right Icon" />
      </SeeAll>
    </Flex>
  );
}
