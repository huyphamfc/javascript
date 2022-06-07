/*
- Use a constructor function to implement a Car. A car has a make and a speed property. The speed property is the current speed of the car in km/h.
- Implement an 'accelerate' method that will increase the car's speed by 10, and log the new speed to the console.
- Implement a 'brake' method that will decrease the car's speed by 5, and log the new speed to the console.
- Create 2 car objects and experiment with calling 'accelerate' and 'brake' multiple times on each of them.

Data:
    Car 1: 'BMW' going at 120 km/h
    Car 2: 'Mercedes' going at 95 km/h
*/


'use strict'

const Car = function (make, speed) {
    this.make = make;
    this.speed = speed;
}

Car.prototype.accelerate = function () {
    this.speed += 10;
    console.log(`${this.make} going at ${this.speed} km/h`);
}

Car.prototype.brake = function () {
    this.speed -= 5;
    console.log(`${this.make} going at ${this.speed} km/h`);
}


const BMW = new Car('BWM', 120);
BMW.accelerate();
BMW.brake();

const Mercedes = new Car('Mercedes', 95);
Mercedes.accelerate();
Mercedes.brake();