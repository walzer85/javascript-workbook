`use strict`

//returns current date and time
//make a today var, which is assigned a new date instance
//make new var to store the today var and toDateString method
//use var today with toTimeString method

var today = new Date();
var readable = today.toString();

//create a var to convert.
//input a number into var convert
//use convert and toString() method to make the number a string

const num = 13
const n = console.log(num.toString)

//set var to a string
//use parseInt() method

const str = `15 Years`
const int = console.log(parseInt(str))

//tells what type of datatype your input is
//create a variable of any main datatype
//use the typeOf method on the variable

const dataType = `words words words`
const result = console.log(typeof(dataType))

//Create two var that can be a string or number, the string must contain a number though
//Create a function with the two var
//Inside the function, add the two var together
//Use parseInt() to take the number out of the string

const numOne = `13`
const numTwo = `17`

function add() {
  return parseInt(numOne) + parseInt(numTwo)
}

add();

//write a function that returns a true if two var are truthy
//if both var are true, show "nope"
//if both var are false, also show "nope"
// if one is false and one is true, show "yep!"

function truest(thingOne, thingTwo) {
    if ((thingOne === true && thingTwo === true) || (thingOne === false && thingTwo === false)){
    return `nope`
  } else {
    return 'yep!'
  }
};

truest();

//write a function that only runs when both var are false
//if both var are false, show a confirmation message

const dumb = dfs
const dumber = aadsadfdfds

function womp() {
  if (dumb === false && dumber === false) {
    return `yes, they're both false`
  }
};

womp()
