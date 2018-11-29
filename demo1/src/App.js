import React, { Component } from 'react';
import PropTypes from "prop-types";
import './App.css';
import Header from "./app/Header";
import Body from "./app/body";
import ListOfTenThings from "./app/tenNums";
class App extends Component {
  constructor(){
    super();
    this.state = {
      refreshing:false
    }
  }
  refresh(){
    this.setState({
      refreshing:true
    })
  }
  onRefreshing(){
    this.setState({
      refreshing:false
    })
  }

  render() {
    return (
      <div>
        <Header />
        <Body
          refresh = {this.refresh.bind(this)}
          onRefreshing = {this.onRefreshing}
        >{'bobo'}</Body>
        <ListOfTenThings />
      </div>
    );
  }
}

export default App;
