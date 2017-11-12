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
//                 "customerCity":"Burmingham",
//                 "customerState":"AL",
//                 "product":"Sandwiches",
//                 "productPrice": 7.99
//             }
//         },
// ];

Class Customer {
  constructor(id, customerName, customerCity, customerState, product, productPrice){
    this.id = id,
    this.customerName = customerName;
    this.customerCity = customerCity;
    this.customerState = customerState;
    this.product = product;
    this.productPrice = productPrice;
  }
  statement(){
    console.log(this.customerName + ' paid ' + this.productPrice + ' for ' + this.product + ' in ' + this.customerCity + ', ' + this.customerState + '.');
  }
};

let marilyn = new Customer (1, 'Marilyn Monroe', 'New York City')
