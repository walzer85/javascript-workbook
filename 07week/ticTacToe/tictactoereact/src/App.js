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
  };
}

//I need to create how the game actually works now.  This includes changing turns, placing Xs and Os based on clicks, and checking for a winner
class Game extends React.Component {
  //I didn't previously understand much of when to use constructor and not, but now I understand that if I am setting a new state within React.Component
  constructor(props) {
    super(props);
    //This will fill each square with an empty value ready to be filled with either X or O, set the game to the furst turn, and set the player turn as X.
    this.state = {
      history: [
        {squares: Array(9).fill(null)}
      ],
      turnNumber: 0,
      xFirst: true
    };
  }

  //I need to set what happens when a player clicks
  handleclci(i) {
    //history checks which turn you are on and readys the next one
    const history = this.state.history.slice(0, this.state.turnNumber + 1);
  }
}

export default Board;
