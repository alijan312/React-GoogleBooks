import React, { Component } from "react";
import logo from "./logo.svg";
import Navbar from './components/Navbar';
import Jumbotron from './components/Jumbotron'

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Navbar />
        <Jumbotron />
      </React.Fragment>
    );
  }
}

export default App;
