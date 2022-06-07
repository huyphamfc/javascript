'use strict'

const Person = function (firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
}

Person.prototype.calculateAge = function () {
    return 2022 - this.birthYear;
}


const Student = function (firstName, birthYear, course) {
    Person.call(this, firstName, birthYear);
    this.course = course;
}

// Linking prototypes
Student.prototype = Object.create(Person.prototype);

Student.prototype.introduce = function () {
    console.log(`My name is ${this.firstName} and I study ${this.course}.`);
}


const huy = new Student('Huy', 2002, 'JavaScript');
huy.introduce(); // My name is Huy and I study JavaScript.
console.log(huy.calculateAge()); // 20

console.log(huy instanceof Student); // true
console.log(huy instanceof Person); // true
console.log(huy instanceof Object); // true