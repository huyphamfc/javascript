'use strict'

const Person = {
    init(firstName, birthYear) {
        this.firstName = firstName;
        this.birthYear = birthYear;
    },

    calculateAge() {
        console.log(2022 - this.birthYear);
    }
}


const Student = Object.create(Person);
Student.init = function (firstName, birthYear, course) {
    Person.init.call(this, firstName, birthYear);
    this.course = course;
}
Student.introduce = function () {
    console.log(`My name is ${this.firstName} and I study ${this.course}.`);
}

const javascript = Object.create(Student);
javascript.init('JS', 1995, 'Computer Science');
javascript.introduce();
javascript.calculateAge();