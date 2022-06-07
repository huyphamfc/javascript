'use strict'

const account = {
    owner: 'huy',
    movements: [200, 550, 120, 300],

    get latest() {
        return this.movements.slice(-1).pop();
    },

    set latest(mov) {
        this.movements.push(mov);
    }
}

class Person {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName
    }

    set newName(newName) {
        this.firstName = newName;
    }
}

console.log(account.latest); // 300
account.latest = 999;
console.log(account.movements); // [ 200, 550, 120, 300, 999 ]

const js = new Person('JavaScript', 'Programming Language');
js.newName = 'Python';
console.log(js.firstName); // Python