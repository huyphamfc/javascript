'use strict'

const Person = {
    calculateAge() {
        console.log(2022 - this.birthYear);
    }
}

const baby = Object.create(Person);
baby.firstName = 'Baby';
baby.birthYear = 2020;
baby.calculateAge(); // 2

console.log(baby.__proto__ === Person); // true