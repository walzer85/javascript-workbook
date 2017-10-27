'use strict';

const assert = require('assert');
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let board = [];
let solution = 'bcdd';
let letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];

function printBoard() {
  for (let i = 0; i < board.length; i++) {
    console.log(board[i]);
  }
}

function generateSolution() {
  for (let i = 0; i < 4; i++) {
    const randomIndex = getRandomInt(0, letters.length);
    solution += letters[randomIndex];
  }
}

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

const generateHint=(solution, guess)=>{
  console.log(solution, guess);
  const solutionArr = solution.split('');
  const guessArr = guess.split('');
  console.log(solutionArr, guessArr);
  let correctLetterLocations = 0;
  let wrongSpotLocations = 0;
  guessArr.forEach((guessLetter, guessIndex)=> {
    const guessLetterInSolutionArr = solutionArr.indexOf(guessLetter);
    if(guessLetterInSolutionArr !== -1){
    if(guessLetterInSolutionArr === guessIndex){
      correctLetterLocations ++;
    }
  }
  });
  return $(correctLetterLocations)
  console.log(correctLetterLocations, 'correct!')
}
function mastermind(guess) {
  solution = 'abcd'; // Comment this out to generate a random solution
  if(guess === solution) {
    return 'You guessed it!'
  } else {
    tryCount ++;
    return generateHint(solution, guess);
  }
}


function getPrompt() {
  rl.question('guess: ', (guess) => {
    mastermind(guess);
    printBoard();
    getPrompt();
  });
}

// Tests

if (typeof describe === 'function') {
  solution = 'abcd';
  describe('#mastermind()', () => {
    it('should register a guess and generate hints', () => {
      mastermind('aabb');
      assert.equal(board.length, 1);
    });
    it('should be able to detect a win', () => {
      assert.equal(mastermind(solution), 'You guessed it!');
    });
  });

  describe('#generateHint()', () => {
    it('should generate hints', () => {
      assert.equal(generateHint('abdc'), '2-2');
    });
    it('should generate hints if solution has duplicates', () => {
      assert.equal(generateHint('aabb'), '1-1');
    });

  });

} else {

  generateSolution();
  getPrompt();
}
