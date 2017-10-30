'use strict';

const assert = require('assert');
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let stacks = {
  a: [4, 3, 2, 1],
  b: [],
  c: []
};

function printStacks() {
  console.log("a: " + stacks.a);
  console.log("b: " + stacks.b);
  console.log("c: " + stacks.c);
}

function movePiece() {
    endStack.push(startstack.lastindexof)
    startstack.lastindexof.slice
  }

const isLegal=()=> {
  if(startstack.lastindexof > endStack.lastindexof) {
    movePiece
  } else {
    return 'Not a legal move.';
  }
}

function checkForWin() {
  if (stacks === [a: [], b: [1], c:[4, 3, 2, 1]]) {
    return 
  }

}

function towersOfHanoi(startStack, endStack) {
  // Your code here

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
