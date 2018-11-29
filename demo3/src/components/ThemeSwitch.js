import React, {Component} from "react"
import PropTypes from "prop-types"
import {connect} from "react-redux"
class ThemeSwitch extends Component{

  static contextTypes = {
    store: PropTypes.object
  }
  // componentWillMount(){
  //   const {store} = this.context
  //   this._udpateBtntheme();
  //   store.subscribe(()=>this._udpateBtntheme())
  // }
  // _udpateBtntheme(){
  //   const {store} = this.context
  //   const state = store.getstate()
  //   this.setState({themeColor:state.themeColor})
  // }

  handleColorChange(color){
    //如果父级有onSwitchColor存在
    console.log(color)
    if(this.props.onSwitchColor){
      console.log("props")
        this.props.onSwitchColor(color)
    }
  }
  //style后跟着{{}}
  render(){
    return(
      <div>
        <button style={{ color: this.props.themeColor,backgroundColor:"white"}}
        onClick={this.handleColorChange.bind(this,"blue")}>blue</button>
        <button style={{ color: this.props.themeColor,backgroundColor:"white"}}
        onClick={this.handleColorChange.bind(this,"red")}>red</button>
      </div>
    )
  }
}

export default ThemeSwitch
