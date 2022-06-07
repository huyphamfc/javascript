'use strict'

const Person = function (firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
}

// Prototype
Person.prototype.calculateAge = function () {
    this.age = 2022 - this.birthYear;
}

const huy = new Person('Huy', 2002);

console.log(huy.__proto__ === Person.prototype); // true
console.log(Person.prototype.isPrototypeOf(huy)); // true
console.log(Person.prototype.isPrototypeOf(Person)); // false


// .prototypeOfLinkedObjects
Person.prototype.species = 'Homo';  // Inherited Property - not its own property
console.log(huy.hasOwnProperty('firstName')); // true
console.log(huy.hasOwnProperty('species')); // false

console.log(huy.__proto__); // { calculateAge: [Function (anonymous)], species: 'Homo' }
console.log(huy.__proto__.__proto__); // [Object: null prototype] {}
console.log(huy.__proto__.__proto__.__proto__); // null

console.dir(Person.prototype.constructor); // [Function: Person]