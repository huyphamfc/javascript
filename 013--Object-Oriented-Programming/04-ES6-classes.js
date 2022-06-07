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

const huy = new Person('Huy', 2002);
console.log(huy); // Person { firstName: 'Huy', birthYear: 2002 }
huy.calculateAge(); // 20

console.log(huy.__proto__ === Person.prototype); // true