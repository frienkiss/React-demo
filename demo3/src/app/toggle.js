import React, {Component} from "react"
import PropTypes from "prop-types"

class Toggle extends Component{
  constructor(){
    super()
    this.state={
      isOnToggle:false
    }
  }

  //setState中参数 ：对象和函数的区别
  handleToggleClick(){
    this.setState(
      preState=>({
              isOnToggle:!preState.isOnToggle
      })
      )
  }
  render(){
    return(
      <button onClick = {this.handleToggleClick.bind(this)}>
        {this.state.isOnToggle ? "OFF" : "ON"}
      </button>
    )
  }
}
export default Toggle
