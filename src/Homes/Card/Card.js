import React from "react";
import styled from "styled-components";

//components
import Star from "../Star";
import { Price } from "../Price";
import { CardRating } from "../CardRating";

//styled-components
const HomeCard = styled.a`
  display: block;
  margin-bottom: 40px;
`;

const Title = styled.div`
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
`;

const Img = styled.img`
  width: 100%;
  height: 100%;

  @media (min-width: 768px) {
    width: 100%;
    height: 242px;
  }

  @media (min-width: 991px) {
    width: 100%;
    height: 204px;
  }
`;

const Name = styled.a`
  font-size: 13px;
  font-weight: bold;
  display: span;

  @media (min-width: 768px) {
    font-size: 15px;
  }
`;

const RentInfo = styled.div``;

const Type = styled.div`
  font-size: 13px;
  display: inline-block;

  @media (min-width: 768px) {
    font-size: 15px;
  }
`;

const NumBed = styled.div`
  font-size: 13px;
  display: inline-block;
  font-weight: 300;

  @media (min-width: 768px) {
    font-size: 15px;
  }
`;

const CardRatingCounter = styled.div`
  margin-top: 7px;
  display: inline-block;
  font-size: 12px;
`;

const Divider = styled.span``;

const HostType = styled.div`
  display: inline-block;
  font-size: 12px;
`;

// Generating single Card for Homes Section
export function Card(props) {
  return (
    <div className="col-xs-12 col-md-6 col-lg-6">
      <HomeCard>
        <Img src={props.img} />
        <Title>
          <Price>${props.price}</Price>
          <Name>{props.name}</Name>
        </Title>
        <RentInfo>
          <Type>{props.rentType}</Type>
          <Divider> · </Divider>
          <NumBed>{props.numBeds} beds</NumBed>
        </RentInfo>
        <div>
          <CardRating>
            <Star />
            <Star />
            <Star />
            <Star />
            <Star />
          </CardRating>
          <CardRatingCounter>{props.rateNum}</CardRatingCounter>
          <Divider> · </Divider>
          <HostType>{props.hostType}</HostType>
        </div>
      </HomeCard>
    </div>
  );
}
