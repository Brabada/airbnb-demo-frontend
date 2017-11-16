import React, { Component } from "react";
//react-router
import { BrowserRouter as Router, Route } from "react-router-dom";
import { render } from "react-dom";

import styled from "styled-components";
import "./App.css";

//components
import Landing from "./Landing/index";
import Homes from "./Homes/index";

//styled-components

//app starting
class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Route path="/" exact component={Landing} />
          <Route path="/homes" component={Homes} />
        </div>
      </Router>
    );
  }
}

export default App;
