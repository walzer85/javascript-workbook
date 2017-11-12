'use strict'

//Take the following array of objects and console.log each user and their corresponding data in the following form: "user_name paid amount for product in city, state." using map.

// let userArray = [
//     {
//             "customer": {
//                 "id": 1,
//                 "customerName":"Marilyn Monroe",
//                 "customerCity":"New York City",
//                 "customerState":"NY",
//                 "product":"Yellow Chair",
//                 "productPrice": 19.99
//             }
//         },
//         {
//             "customer": {
//                 "id": 2,
//                 "customerName":"Abraham Lincoln",
//                 "customerCity":"Boston",
//                 "customerState":"MA",
//                 "product":"Movie Tickets",
//                 "productPrice": 27.00
//             }
//         },
//                 {
//             "customer": {
//                 "id": 3,
//                 "customerName":"John F. Kennedy",
//                 "customerCity":"Dallas",
//                 "customerState":"TX",
//                 "product":"Mustang Convertible",
//                 "productPrice": 24999.99
//             }
//         },
//                 {
//             "customer": {
//                 "id": 4,
//                 "customerName":"Martin Luther King",
//                 "customerCity":"Birmingham",
//                 "customerState":"AL",
//                 "product":"Sandwiches",
//                 "productPrice": 7.99
//             }
//         },
// ];

//Create a new class called customer.  it is made out of an id number, a name, city, state, product, and price.  Include a statement that prints out the sentence required for the assignment
class Customer {
  constructor(id, customerName, customerCity, customerState, product, productPrice){
    this.id = id;
    this.customerName = customerName;
    this.customerCity = customerCity;
    this.customerState = customerState;
    this.product = product;
    this.productPrice = productPrice;
  }
  statement(){
    return this.customerName + ' paid ' + this.productPrice + ' for ' + this.product + ' in ' + this.customerCity + ', ' + this.customerState + '.';
  }
}

//make new instances of Customer.  Use the keys and values listed in the assignment
let marilyn = new Customer(1, 'Marilyn Monroe', 'New York City', 'NY', 'Yellow Chair', '19.99');
let abe = new Customer(2, 'Abraham Lincoln', 'Boston', 'MA', 'Tickets', 27.00);
let john = new Customer(3, 'John F. Kennedy', 'Dallas', 'TX', 'Mustang Convertible', 2499.99);
let martin = new Customer(4, 'Martin Luther King', 'Birmingham', 'AL', 'Sandwiches', 7.99);

//console log the statements from Customer
console.log(marilyn.statement());
console.log(abe.statement());
console.log(john.statement());
console.log(martin.statement());
