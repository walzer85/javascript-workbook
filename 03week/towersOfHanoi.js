'use strict';

const assert = require('assert');
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

//This is the initial setting at the beginning of towersOfHanoi.  Part of premade code
let Stacks = {
  a: [4, 3, 2, 1],
  b: [],
  c: []
};

//This function prints the stacks on to the screen.  Part of premade code
let printStacks = () => {
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
const movePiece=(startStack, endStack)=> {
    endStack.push(startstack.lastindexof)
  }

//isLegal(), checks to see if anything is in the first stack you choose.  It then checks if the ending stack is empty.  It then checks if the starting stack is smaller than the ending stack.  If it meets all of those the move is legal
const isLegal = (startStack, endStack) => {
  if (stacks[startStack].length === 0) {
    console.log ('Please choose a stack with items in it! This move isn\'t legal!')
    return false;
  } else if( stacks[endStack].length === 0) {
    return true;
  } else if ((stacks[startStack].length - 1) > (stacks[endStack].length - 1)){
    return 'Not a legal move.';
    return false;
  } else {
    return true;
  }
}

//checkForWin, if all of the numbers are in the last stack, run the win sequence, which should reset the object, if statement
const checkForWin = () => {
  if (stacks[c].length === 3) {
    console.log("You win!  Let's play again!");
  } else {
    console.log('Keep trying, you\'ll get there!')
    return false;
  }
}

//towersOfHanoi, only needs to reference the isLegal function to get the list of finctions running
const towersOfHanoi = (startStack, endStack) => {
  if (isLegal(startStack, endStack) {
    movePiece(startStack, endStack);
    checkForWin();
  }
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
