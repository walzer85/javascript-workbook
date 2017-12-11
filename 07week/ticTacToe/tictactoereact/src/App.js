import React, { Component } from 'react';
import './App.css';

//I need to make the squares for the Xs and Os to be held
//I need to allow the square to be clicked so you can add the X or O
const Square = (props) => {
  return (
    <button className="square" onClick={props.onClick}>
    {props.value}
    </button>
  );
}

//I need to make a board consisting of the squares I created above
//I have to render a square on the page
class Board extends Component {
  renderSquare(i) {
    return (
      <Square value={this.props.squares[i]} onClick={() => this.props.onClick(i)} />
    );
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
class Game extends Component {
  //I didn't previously understand much of when to use constructor and not, but now I understand that if I am setting a new state within React.Component
  constructor(props) {
    super(props);
    //This will fill each square with an empty value ready to be filled with either X or O, set the game to the furst turn, and set the player turn as X.
    this.state = {
      history: [
        {squares: Array(9).fill(null)}
      ],
      turnNumber: 0,
      xIsNext: true
    };
  }

  //I need to set what happens when a player clicks
  handleclick(i) {
    //history
    const history = this.state.history.slice(0, this.state.turnNumber + 1);
    //current moves to the current turn
    const current = history[history.length - 1];
    //squares makes sure the square you're clicking is empty
    const squares = current.squares.slice();
    //if there is something in the square you click or someone has one, don't add anything into the square.
    if (winState(squares) || squares[i]) {
      return;
    }
    //if xIsNext equals X continue on, otherwise its Os turn
    squares[i] = this.state.xIsNext ? 'X' : 'O';
    //this sets however the squares are filled and makes that the current history
    this.setState({
      history: history.concat([
        {
          squares
        }
      ]),
      //this tells you how many turns you've done and then whos turn it is
      turnNumber: history.length,
      xIsNext: !this.state.xIsNext
    });
  }

  //changes the state to the correct turn number and player turn
  goTo(turn) {
    this.setState({
      turnNumber: turn,
      xIsNext: (turn % 2) === 0
    });
  }

  //This shows the button that lets you return to a previous state
  render() {
    const history = this.state.history;
    const current = history[this.state.turnNumber]
    const winner = winState(current.squares);
    const moves = history.map((step, move) => {
      const desc = move ?
        'Go to move #' + move : 'Go to game start';
      return (
        <li key={move}>
          <button onClick={() => this.goTo(move)}>{desc}</button>
        </li>
      )
    });

    //Checks if there is a win, otherwise moves to the next player's turn
    let status;
    if (winner) {
      status = `Winner: ${winner}`;
    } else {
      status = `Next player: ${this.state.xIsNext ? 'X' : 'O'}`;
    }

    //Prints out on the screen the board, who's turn it is/who won, and the list of buttons to return to previous moves
    return (
      <div className='game'>
        <div className='game-board'>
          <Board squares={current.squares} onClick={i => this.handleclick(i)} />
        </div>
        <div className='game-info'>
          <div>{status}</div>
          <ol>{moves}</ol>
        </div>
      </div>
    );
  }
}

//Checks through an array with all possible solutions to see if any of those sets are filled with the same value
const winState = (squares) => {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ];

  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}

export default Game;
