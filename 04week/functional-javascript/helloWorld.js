'use strict'

//# 1
function upperCaser(input) {
    return input.toUpperCase();
};

module.exports = upperCaser

//# 2
//Looked up how to make a recusive function.  Plugged the argument names into function
function repeat(operation, num) {
  if (num === 0) {
  return operation
}
return repeat(num — 1, num * operation)
}
    }

// Do not remove the line below
module.exports = repeat

//# 3
var numbers = [1, 5, 10, 15];
var doubles = numbers.map(function(x) {
    return x * 2;
};

//# 4
function getShortMessages(messages) {
      // SOLUTION GOES HERE
    }

    module.exports = getShortMessages

//# 5

//goodUsers, a list of valid users
var goodUsers = [
    { id: 1 },
    { id: 2 },
    { id: 3 }
]

// `checkUsersValid` is the function you'll define
var testAllValid = checkUsersValid(goodUsers)

const checkUsersValid = (goodUsers) => {
    if (!testAllValid.same(goodusers)) {
      console.log('None correct.');
    } else if {
      (testAllValid.same(goodusers) === true {
      testAllValid.every(goodusers) {
        if true {
          console.log ('All correct!');
        } else {
          console.log('At least one user wrong.');
        }
      }
    }
  }
};

//Given an Array of strings, use Array#reduce to create an object that contains the number of times each string occured in the array. Return the object directly (no need to console.log).

function countWords(inputWords) {
    var result = numbers.reduce(function(accumulator, currentValue) {
      return accumulator + currentValue;
   }
}

//
