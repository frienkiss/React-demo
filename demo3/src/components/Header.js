import React, {Component} from "react"
import PropTypes from "prop-types"

import {connect} from "react-redux"
class Header extends Component{
  // static contextTypes = {
  //   store: PropTypes.object
  // }
  static propTypes = {
    themeColor:PropTypes.string
  }
  constructor(){
    super()
    this.state={
      themeColor:''
    }
  }

  render() {
   return  (
    <div>
      <h1 style={{ color: this.props.themeColor }}>shopLISt</h1>
      </div>)
}
}
const mapStateProps = (state)=>{
  return {
    themeColor:state.themeColor
  }
}
export default Header
