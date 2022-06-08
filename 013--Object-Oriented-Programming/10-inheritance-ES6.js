'use strict'

class Person {
    constructor(firstName, birthYear) {
        this.firstName = firstName;
        this.birthYear = birthYear;
    }

    calculateAge() {
        console.log(2022 - this.birthYear);
    }
}

class Student extends Person {
    constructor(firstName, birthYear, course) {
        super(firstName, birthYear);
        this.course = course;
    }

    introduce() {
        console.log(`My name is ${this.firstName} and I study ${this.course}.`);
    }

    calculateAge() {
        console.log(`I'm ${2022 - this.birthYear} years old.`);
    }
}

const huy = new Student('Huy', 2020, 'Web Development');
huy.calculateAge(); // I'm 2 years old.
huy.introduce(); // My name is Huy and I study Web Development.