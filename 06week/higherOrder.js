'use strict';

const assert = require('assert');

function forEach(arr, callback) {
  // create an array with whatever you want in it
  const arrProblemOne = ['Eric', 'Eric', 'Eric', 'I promise I am not vain.  Seriously']

  //make a for loop that runs the number of items in the array amount of times.
  //make a variable that prints a phrase the amount of times defined by the for loop
  for (let i = 0; i < arrProblemOne.length; i++) {
    const printTheArrayLength = () => {
      console.log('Over and over!');
    }
  }
}

function map(arr, callback) {
  // Create an array, put whatever you want in it
  const test = ['1', '2', '3', '4', '5', '6'];

  //doThis(), a function that creates a new array, then does whatever function you want when you call doThis to the original array
  //pushes the result of the called function to the new array
  //print out the new array
  const doThis = (arr, callBackFunction) => {
  const newArr = [];
  arr.forEach((i) => {
    newArr.push(callBackFunction(i));
  });
  console.log(newArr);
};
}

function filter(arr, callback) {
  //create an array with three numbers
  const arrProblemThree = [1, 2, 3];

  //longestWords(), create a function that takes an array and a function
  //the called function affects the called array
  //a new, empty array accepts the results of the function
  const longestWords = (arrTwo, callbackTwo) => {
    const arrResultThree = [];
    if ()
    }
  }
}

function some(arr, callback) {
  // Your code here
}

function every(arr, callback) {
  // Your code here
}

if (typeof describe === 'function') {

  describe('#forEach()', () => {
    it('should call the callback the array.length number of times', () => {
      let count = 0;
      forEach([1, 2, 3], () => {
        count++;
      });
      assert.equal(count, 3);
    });
  });

  describe('#map()', () => {
    const arr = [1, 2, 3];
    const mapped = map(arr, (num) => {
      return num * num;
    });
    it('should return new array with mapped items', () => {
      assert.deepEqual(mapped, [1, 4, 9]);
    });
    it('should not affect the original array', () => {
      assert.deepEqual(arr, [1, 2, 3]);
    })
  });

  describe('#filter()', () => {
    it('should return an array of items that pass the predicate test', () => {
      const filtered = filter([1, 2, 3], (num) => {
        return num % 2 === 0;
      });
      assert.deepEqual(filtered, [2]);
    });
  });

  describe('#some()', () => {
    let count = 0;
    const somed = some([1, 2, 3, 4], (num) => {
      count++;
      return num % 2 === 0;
    });
    it('should return true if at least one item passes the predicate test', () => {
      assert.equal(somed, true);
    });
    it('should stop at the first item that passes the predicate test', () => {
      assert.equal(count, 2);
    });
    it('should return false if no items pass the predicate test', () => {
      const somed = some([1, 3, 5], (num) => {
        return num % 2 === 0;
      });
      assert.equal(somed, false);
    });
  });

  describe('#every()', () => {
    it('should return true if at all passes the predicate test', () => {
      const everied = every([2, 4, 6], (num) => {
        return num % 2 === 0;
      });
      assert.equal(everied, true);
    });
    let count = 0;
    const everied = every([2, 3, 4, 5], (num) => {
      count++;
      return num % 2 === 0;
    });
    it('should return false if any item fails the predicate test', () => {
      assert.equal(everied, false);
    });
    it('should stop at the first item that fails the predicate test', () => {
      assert.equal(count, 2);
    });
  });

} else {

  console.log('Only run the tests on this one!')

}
