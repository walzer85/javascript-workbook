import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

//I need to make the squares for the Xs and Os to be held
//I need to allow the square to be clicked so you can add the X or O
const Square = (props) => {
  return (
    <button className="square" onClick={() => props.onClick()}>
    {props.value}
    </button>
  );
}

//I need to make a board consisting of the squares I created above
//I have to render a square on the page
class Board extends React.Component {
  renderSquare(i) {
    return <Square />
  }

//I have to render the the entire rows by calling the renderSquare I made earlier for each spot
  render() {
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

  //I need to
}

export default Board;
