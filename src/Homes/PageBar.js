import React from "react";
import styled from "styled-components";

//sources
import arrow from "./PageBar/rightArrow.svg";

const Bar = styled.div`
  width: 100%;
  text-align: center;
  margin-bottom: 40px;
`;
const Nav = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 15px;
`;

const Page = styled.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  align-items: center;
  justify-content: center;
  text-decoration: none;

  color: rgba(15, 114, 118, 1);
  font-family: "Circular Air Book", "Arial", sans-serif;
  font-size: 16px;
  margin-right: 38px;
`;

const FirstPage = styled(Page)`
  box-sizing: border-box;
  width: 32px;
  height: 32px;
  border-radius: 50%;
  border: 1px solid rgba(15, 114, 118, 1);
  background-color: rgba(15, 114, 118, 1);
  color: #fff;
`;

const LastPage = styled(Page)`
  box-sizing: border-box;
  padding: 14px;
  border-radius: 50%;
  border: 1px solid rgba(15, 114, 118, 1);
  background-color: #ffffff;
  background-image: url(${arrow});
  background-repeat: no-repeat;
  background-size: 7px 10px;
  background-position: 11px center;
  margin-right: 0;
`;

const PageRange = styled.section`
  font-family: "Circular Air Book", "Arial", sans-serif;
  color: #383838;
  font-size: 16px;
`;

//  rangeFirst={1} rangeLast={18}
export function PageBar(props) {
  return (
    <Bar>
      <Nav>
        <FirstPage>{props.rangeFirst}</FirstPage>
        <Page>{props.rangeFirst + 1}</Page>
        <Page>{props.rangeFirst + 2}</Page>
        <Page>...</Page>
        <Page>{props.rangeLast}</Page>
        <LastPage />
      </Nav>
      <PageRange>1 – 18 of 300+ Rentals</PageRange>
    </Bar>
  );
}
