'use strict'


function Animal(name, weight) {
    this.name = name;
    this.weight = weight;
}

function Dog(name, weight, legs) {
    Animal.call(this, name, weight);
    this.legs = legs;
}

const dog = new Dog('Pet', 10, 4);
console.log(dog); // Dog { name: 'Pet', weight: 10, legs: 4 }