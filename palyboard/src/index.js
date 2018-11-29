import React,{Component} from "react"
import ReactDOM from 'react-dom'
import "./index.css"
// class Square extends React.Component {
//   // constructor(){
//   //   super();
//   //   this.state={
//   //     value:null
//   //   }
//   // }
//   render() {
//
//     return (
//       <button className="square" onClick = {this.props.onClick
//       }>
//         {this.props.value}
//       </button>
//     );
//   }
// }

//函数定义组件=》针对只有render()方法的组件
function Square(props){
  return (
    <button className="square" onClick = {props.onClick
         }>
           {props.value}
         </button>
  )
}
class Board extends React.Component {

  renderSquare(i) {
    return( <Square value={this.props.history.squares[i]}
      onClick = {()=>this.props.handleClick(i)}
      />);
  }
  render() {

  var winner = this.calculateWinner(this.state.squares)
    //为什么要加()??
    return (
      <div>

        <div className="board-row">
          {this.renderSquare(0)}
          {this.renderSquare(1)}
          {this.renderSquare(2)}
        </div>
        <div className="board-row">
          {this.renderSquare(3)}
          {this.renderSquare(4)}
          {this.renderSquare(5)}
        </div>
        <div className="board-row">
          {this.renderSquare(6)}
          {this.renderSquare(7)}
          {this.renderSquare(8)}
        </div>
      </div>
    );
  }
}

class Game extends React.Component {
  constructor(){
    super();
    this.state={
      history:[{
          squares:Array(9).fill(null)
      }],
      stepNum:0,
      isXNext:true
    }
  }
  //判断是谁获胜
  calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}
  handleClick(i){
    const squares = this.state.squares.slice();
    if(squares[i] || this.calculateWinner(squares)){
      return;
    }
    squares[i] = this.state.isXNext? "X":"O";

    this.setState({
      squares : squares,
      isXNext: !this.state.isXNext
    })
  }
  render() {
    const history = this.state.history;
    const current =  history[history.length-1];
    const winner = calculateWinner(current.squares);

    let status;
    if(winner){
      status = 'Winner is: '+winner;

    }else{
      status = 'Next player: '+(this.status.isXNext?"X":"O");
    }

    return (
      <div className="game">
        <div className="game-board">
          <Board onClick = {(i)=> this.handleClick(i)}/>
        </div>
        <div className="game-info">
          <div>{status}</div>
          <ol>{/* TODO */}</ol>
        </div>
      </div>
    );
  }
}

// ========================================

ReactDOM.render(
  <Game />,
  document.getElementById('root')
);