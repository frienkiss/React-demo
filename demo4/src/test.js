import React,{Component} from 'react'
import PropTypes from 'prop-types'
import ReactDOM from 'react-dom'
class FilterInName extends Component{
  constructor() {
    super();
    this.onInput = this.onInput.bind(this)
  }
  onInput(e){
    this.props.onHandleInput(e.target.value)
  }
  onCheck(e){
    this.props.onHandleCheck(e.target.checked)
  }
  //this.onCheck 还是 this.onCheck()
  render(){
    return (
      <div>
        <input type="input" value = {this.props.inputText} onChange = {this.onInput} placeholder="please input..."/>
        <input type="checkbox"
        checked = {this.props.showStock}
        onChange = {this.onCheck.bind(this)}/>
        only show products in stock
      </div>
    )
  }
}
/*
import classes form './myCss.css'
{JSX 中的注释方式}

调用.css 文件中的css属性, mycss 为css文件中的类}
<div className={classes['mycss']}></div>

<div style={{width:20px;height=30px}}></div>
*/
class ProductCategory extends Component{
  constructor() {
    super();
  }
  render(){
    return(
      <tr>
        <td><span style={{color:'orange'}}>{this.props.category}</span></td>
      </tr>
    )
  }
}
class ProductRow extends Component{
  constructor() {
    super();
  }

  render(){
    var name = this.props.product.stocked?this.props.product.name:
    <span style={{color:"red"}}>{this.props.product.name}</span>;

    return (
      <tr>
        <td>{name}</td>
        <td>{this.props.product.price}</td>
      </tr>
    )
  }

}
class ProductTable extends Component{
  constructor() {
    super();
  }

  render(){
    var rows = [];
    var lastCategory = null;
    this.props.products.forEach((product)=>{
      // if(product.stocked && this.props.showStock){
      //   return; //进入下一遍历
      // }
      if(product.category !== lastCategory){
        rows.push(<ProductCategory category = {product.category}
          key = {product.category}/>)
      }
      console.log(this.props.inputText)
      if(product.name.indexOf(this.props.inputText)!=-1
        || this.props.inputText == product.price||
        this.props.inputText == ""){
          console.log("fff")
          rows.push(<ProductRow product = {product} key = {product.name}/>)
      }

      lastCategory = product.category;
    })
    return (

      <table>
        <thead>
          <tr><th>Name</th><th>Price</th></tr>
        </thead>
        <tbody>{rows}</tbody>
      </table>
    )
  }
}

class FilterProductTable extends Component{
  constructor() {
    super();
    this.state ={
      inputText:'',
      showStock:false
    }
  }  //顶级不需要super？？？？？？？？？？？
  onHandleCheck(){
    this.setState({
      showStock:!this.state.showStock
    })
  }
  onHandleInput(text){
    this.setState({
      inputText:text
    })
  }
  render(){
    var PRODUCTS = [
      {category: 'Sporting Goods', price: '$49.99', stocked: true, name: 'Football'},
      {category: 'Sporting Goods', price: '$9.99', stocked: true, name: 'Baseball'},
      {category: 'Sporting Goods', price: '$29.99', stocked: false, name: 'Basketball'},
      {category: 'Electronics', price: '$99.99', stocked: true, name: 'iPod Touch'},
      {category: 'Electronics', price: '$399.99', stocked: false, name: 'iPhone 5'},
      {category: 'Electronics', price: '$199.99', stocked: true, name: 'Nexus 7'}
    ];
    return (
      <div>

      <FilterInName onHandleInput = {this.onHandleInput.bind(this)} onHandleCheck = {this.onHandleCheck.bind(this)} showStock = {this.state.showStock}/>
      <ProductTable products = {PRODUCTS} inputText = {this.state.inputText} showStock = {this.state.showStock}/>
      </div>
    )
  }

}

// ReactDOM.render(<FilterProductTable products = {PRODUCTS}/>,
//       document.getElementById("root"))

    export default FilterProductTable;
