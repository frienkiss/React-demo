import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import PropTypes from "prop-types"
import registerServiceWorker from './registerServiceWorker';

import {Provide} from "./connect"
//{Provide} 和Provide有什么区别吗
var themeReducer = (state, action)=>{
  if(!state){
    return{
        themeColor:"red"
    }

  }

  switch (action.type) {
    case "CHANGE_COLOR":
        return {
          ...state,
          themeColor:action.themeColor
        }
    default: return state
  }
}
var createStore = (reducer)=>{
  let state= null
  var listeners = []
  var subscribe = (listener)=> listeners.push(listener)
  var getstate = ()=> state
  var dispatch = (action)=>{
    state = reducer(state, action)
    listeners.forEach((listener)=>
      listener()
    )
  }

  //初始化
  dispatch({})
  return {subscribe,getstate,dispatch}
}


var store = createStore(themeReducer)


ReactDOM.render(
  <Provide store={store}>
    <App />
    </Provide>, document.getElementById('root'));
registerServiceWorker();
