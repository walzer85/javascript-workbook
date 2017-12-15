import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {

  state = {
    stacks : {
      a: [4, 3, 2, 1],
      b: [],
      c: []
    },
    stackColorObj : {
      4: 'Green',
      3: 'Blue',
      2: 'Yellow',
      1: 'Purple'
    },
    startStack: null,
    error: '',
  };

  const isLegal = (endStack) => {
    const endValue = this.state.stacks[endStack][this.state.stacks[endStack].length - 1];
    console.log(this.state.stacks[endStack][this.state.stacks[endStack].length - 1]);
    const startValue = this.state.stacks[this.state.startStack][this.state.stacks[this.state.startStack].length-1]

//the first if should check if there is anything in your starting stack
//else if - there is nothing in the ending stack, its legal
//else if - the ending stack has a larger value than the starting stack, its legal
    if (!endValue || endValue > startValue) {
      return true;
    } else {
      return false;
    }
  };

  const movePuck = (endStack) => {
    const stacks = {...this.state.stacks};
    const valueToMove = stacks[this.state.startStack].pop();
    stacks[endStack].push(valueToMove)
    this.setState({stacks: stacks, startStack: null})
  }

  const handleStackClick = (stack) => {
    //if no startStack, assign startStack, else attempt to move last puck and clear startStack
    if(!this.state.startStack){
      this.setState({startStack: stack})
    } else {
      //check to see if move isLegal
        //check if endStack is empty
        //check if last item in endStack is larger than last item in this.state.startStack
        this.isLegal
    }
  };

  const checkForWin = (stack) => {
    console.log(stack);
    //needs to check if stack c has 4, 3, 2, 1 in that order
    //check the length of state.stacks.c - 1
    //if the length - 1 is 3, say the player won
    if (this.state.stacks.c.length -1 === 3) {
      return
    }
  }

  const renderStacks = () => {
      return Object.keys(this.state.stacks).map((stack) => {
        return (
        <div style={{height: 300, width: 60, display: 'flex', alignItems: 'flex-end', margin: 30, border: '4px solid green'}} key={key}>
          <div style={{display: 'flex', flexDirection: 'column-reverse'}}>
          {this.state.stacks[stack].map((puck, i) => {

          })
        }
        </div>
      </div>
      );
    }
  }
};


export default App;
