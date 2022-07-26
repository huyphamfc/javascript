/*
with bind(), we can borrow a method from an object and then create a new function with "this" keyword set to the provided value
*/


'use strict'


const teacher = {
    firstName: 'Pep',
    lastName: 'Guardiola',
    getName: function () {
        return `${this.firstName} ${this.lastName}`;
    }
}

const student = {
    firstName: 'Lionel',
    lastName: 'Messi'
}

const getName = teacher.getName.bind(student);
console.log(getName()); // Lionel Messi