'use strict';

const assert = require('assert');
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

//This is the initial setting at the beginning of towersOfHanoi.  Part of premade code
let stacks = {
  a: [4, 3, 2, 1],
  b: [],
  c: []
};

//This function prints the stacks on to the screen.  Part of premade code
let printStacks() {
  console.log("a: " + stacks.a);
  console.log("b: " + stacks.b);
  console.log("c: " + stacks.c);
}

//printBeginningStacks, reset the var stacks to its original position, nest stacks inside
const printBeginningStacks=(stacks)=> {}
  let stacks = {
    a: [4, 3, 2, 1],
    b: [],
    c: []
  };
//movePiece(), Moves the last index of the startStack to the last index of the endStack, lastindexof method
const movePiece=(startstack, endStack)=> {
    endStack.push(startstack.lastindexof)
    startstack.lastindexof.slice
  }

//isLegal(), checks to see if the last index of the start stack is less than the end stack last index.  If the value is less, run movePiece.  If the value is greater, deny the move, lastindexof method
const isLegal=(startstack, endStack)=> {
  if((startstack.lastindexof < endStack.lastindexof) || (startstack.lastindexof > 0)) {
    movePiece
  } else {
    return 'Not a legal move.';
  }
}

//checkForWin,
const checkForWin=()=>
  if (stacks === [a: [], b: [1], c:[4, 3, 2, 1]]) {
    return "You win!  Let's play again!";

  } else

}

function towersOfHanoi(startStack, endStack) {
  isLegal
}

function getPrompt() {
  printStacks();
  rl.question('start stack: ', (startStack) => {
    rl.question('end stack: ', (endStack) => {
      towersOfHanoi(startStack, endStack);
      getPrompt();
    });
  });
}

getPrompt();
