import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class Puck extends Component {
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
    }
  };

  isLegal(endStack){
    const endValue = this.state.stacks[endStack][this.state.stacks[endStack].length - 1];
    console.log(this.state.stacks[endStack][this.state.stacks[endStack].length - 1]);
    const startValue = this.state.startStack

    return !endValue || endValue > startValue

  };

  movePuck (endStack) {
    const stacks = {...this.state.stacks};
    const valueToMove = stacks[this.state.startStack].pop();
    stacks[endStack].push(valueToMove)
    this.setState({stacks: stacks, startStack: null})
  }

  handleStackClick(stack){
    console.log(stack)
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

  renderStacks() {
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
  };
};

export default Puck;
