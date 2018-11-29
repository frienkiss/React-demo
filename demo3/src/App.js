import React, { Component } from 'react';
import PropTypes from "prop-types";
import './App.css';
import Header from "./containers/Header";
import Body from "./containers/body"
import Toggle from "./app/toggle"
class App extends Component {

  render() {
    return (
      <div>
        <Header />
        <Body />
        <Toggle />
      </div>
    );
  }
}

export default App;
