import React, {Component} from "react"
import PropTypes from "prop-types"

import {connect} from "../connect"
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
  // componentWillMount(){
  //   // const {store} = this.context
  //   // this._updateHeaderTheme()
  //   // // debugger
  //   // store.subscribe(()=>this._updateHeaderTheme())
  // }


  // _updateHeaderTheme (){
  //   const {store} = this.context
  //   const state =  store.getstate() //获取仓库中的数据
  //   this.setState({themeColor:state.themeColor})
  // }
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
Header = connect(mapStateProps)(Header)
export default Header
