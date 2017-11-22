import React from "react";
import styled from "styled-components";

//components
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";

//styled-components
const Landing = styled.div``;

//Landing
export default function() {
  return (
    <Landing>
      <Header />
      <Main />
      <Footer />
    </Landing>
  );
}
