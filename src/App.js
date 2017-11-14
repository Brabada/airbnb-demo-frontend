import React, { Component } from "react";
import styled from "styled-components";
import "./App.css";
import "./index.css";
import "./fonts.css";

//components
import Header from "./Header";
import ExploreAirbnb from "./ExploreAirbnb";
import Experiences from "./Experiences";
import Homes from "./Homes";
import PopularReserve from "./PopularReserve";
import FeaturedDestinations from "./FeaturedDestinations";
import Footer from "./Footer";

//styled-components
const Main = styled.main``;

//app starting
class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Main>
          <div className="container">
            <ExploreAirbnb />
            <Experiences />
            <Homes />
            <PopularReserve />
            <FeaturedDestinations />
          </div>
        </Main>
        <Footer />
      </div>
    );
  }
}

export default App;
