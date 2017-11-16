import React from "react";
import styled from "styled-components";

//components
import Star from "../Star";
import { Price } from "../Price";
import { CardRating } from "../CardRating";

// styled-components
const ExperienceCard = styled.a`display: block;`;
const Img = styled.img`
  width: 100%;
  height: 100%;
  @media (min-width: 768px) {
    height: 346px;
  }
`;
const Title = styled.a`display: block;`;

const Name = styled.a`
  font-size: 15px;
  display: span;
`;

const CardReviewCounter = styled.div`
  display: inline-block;
  font-size: 12px;
`;

// Generating single Card for Experience Section
export function Card(props) {
  return (
    <div className="col-xs-6 col-md-4 col-lg-3">
      <ExperienceCard>
        <Img src={props.img} />
        <Title>
          <Price>${props.price}</Price>
          <Name>{props.name}</Name>
        </Title>
        {/*  to do StarCounter feature that return stars from numStars */}
        <CardRating>
          <Star />
          <Star />
          <Star />
          <Star />
          <Star />
        </CardRating>
        <CardReviewCounter>{props.reviewNum} reviews</CardReviewCounter>
      </ExperienceCard>
    </div>
  );
}
