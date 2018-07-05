import React, { Component } from "react";
import "./App.css";
import Jumbotron from "./components/Jumbotron";
import MainGameContainer from "./components/MainGameContainer";

//App component - Renders Jumbotron and MainGameContainer 
class App extends Component {
  render() {
    return (
      <div>
        <Jumbotron/>
        <MainGameContainer/>
      </div>
    );
  }
};

export default App;
