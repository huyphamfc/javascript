/*
    - new {} is created
    - function is called, this = {}
    - {} linked to prototype
    - function automatically return {}
*/

'use strict'

const Person = function (firstName, birthYear) {
    // instance properties
    this.firstName = firstName;
    this.birthYear = birthYear;
}

const huy = new Person('Huy', 2002);
console.log(huy); // Person { firstName: 'Huy', birthYear: 2002 }
console.log(huy instanceof Person); // true