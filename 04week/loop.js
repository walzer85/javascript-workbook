'use strict'

//Problem One
//create a variable with several car makers
const carsInReverse['toyota', 'honda', 'chevrolet', 'puegot']

//using forEach, console log the items inside the array carsInReverse
carsInReverse.forEach((item) => {
  console.log(item);
});

carsInReverse;

//Problem 2
//create an object with the personal information from assignment
const personalInfo = {
  firstName: "Jane",
  lastName: "Doe",
  birthDate: "Jan 5, 1925",
  gender: "female";
}

//create a for...in loop that prints out the contents of personalInfo
for (const prop in personalInfo) {
  console.log(`${prop} = ${personalInfo[prop]}`);
}

//Problem 3
//use the same personalInfo in a for...in loop to show only birthDate
for (const prop in personalInfo) {
  console.log(`${birthDate} = ${personalInfo[birthDate]}`);
}

//Problem 4
//create a variable that is assigned a number value of zero
let numBeginning = 1;

//I want to print every number between 1 and 1000 using a while loop
while (numBeginning <= 1000) {
  console.log(numBeginning);
  numBeginning ++;
}

//Problem 5
//create a variable to act as the iterator
let i = 1;

//use a do...while loop to increase the iterator
do {
   i += 1;
   console.log(i + ' ');
} while (i < 1000);
