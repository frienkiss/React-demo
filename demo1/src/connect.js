import React,{Component} from "react"
import PropTypes from "prop-types"

export const connect = (mapStateProps, mapDispatch) => (WrapperComponent) => {
  class Connect extends Component{
    static contextTypes={
      store:PropTypes.object
    }
    constructor(){
      super()
      this.state = {
        allstateprops:''
      }
    }
    componentWillMount(){
      const {store} = this.context
      console.log(store.getstate())
      this._updateProps();
      store.subscribe(()=>this._updateProps())
    }
    _updateProps(){
      const {store} = this.context
      let stateprops = mapStateProps ? mapStateProps(store.getstate(),this.props) :{}
      let dispatchs = mapDispatch ? mapDispatch(store.dispatch,this.props) : {}

      console.log(stateprops)
      this.setState({
        allstateprops:{
          ...stateprops,
          ...this.props,
          ...dispatchs
        }
      })
    }

    render(){

      return <WrapperComponent {...this.state.allstateprops}/>
    }
  }
  return Connect
}

export
  class Provide extends Component{
    static propTypes = {
      store: PropTypes.object,
      children:PropTypes.any
    }
    static childContextTypes = {
      store:PropTypes.object
    }

    //返回对象
    getChildContext(){
      return {
        store:this.props.store
      }
    }
    render(){
      return(
        <div>{this.props.children}</div>
      )
    }
  }
