import React, {Component} from "react";
import PropTypes from "prop-types"
import ThemeSwitch from "./ThemeSwitch"
import {connect} from "react-redux"
class Body extends Component{
  static contextTypes = {
     store: PropTypes.object
   }
   constructor(){
     super()
     this.state={
       themeColor:''
     }
   }

   // componentWillMount (){
   //   const {store} = this.context
   //   this.updateBodythemes()
   //        // debugger
   //   store.subscribe(()=> this.updateBodythemes())
   // }
   //
   // updateBodythemes (){
   //   console.log('fad')
   //   const {store} = this.context
   //   const state = store.getstate()
   //   console.log(state)
   //   this.setState({themeColor:state.themeColor})
   // }
  render(){
    return (
      <div>
        <h1 style={{color:this.props.themeColor}}>that is bodyStyle</h1>
        <ThemeSwitch />
      </div>
  )
  }
}
const mapStateProps = (state)=>{
  return {
    themeColor:state.themeColor
  }
}

Body = connect(mapStateProps)(Body)
export default Body
