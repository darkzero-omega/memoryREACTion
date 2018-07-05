import React from "react";
import "./Jumbotron.css";
import logo from "../../USFIV_logo_trans.png";


//Jumbotron function - Heading for the app
const Jumbotron = () => (
<div className="jumbotron jumbotron-fluid">
  <div className="container text-center">
  <img src={logo} className="App-logo" alt="logo"/>
  	<br/>
  	<br/>
    <h1>Memory Game</h1>
    <br/>
    <p className="lead">Click on any image to earn points.  
    Clicking on the same image will result in the game resetting.  Good luck!</p>
    <br/>
  </div>
</div>
);

export default Jumbotron;