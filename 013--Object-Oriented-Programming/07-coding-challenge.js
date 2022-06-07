/*
- Use an ES6 Class to implement a Car. A car has a make and a speed property. The speed property is the current speed of the car in km/h.
- Add a getter called 'speedUS' which returns the current speed in mi/h (divide by 1.6).
- Add a setter called 'speedUS", which sets the current speed in  mi/h (but converts it to km/h before storing the value, by multiplying the input by 1.6).
*/

'use strict'

class Car {
    constructor(make, speed) {
        this.make = make;
        this.speed = speed
    }

    get speedUS() {
        return Math.round(this.speed / 1.6);
    }

    set speedUS(currentSpeed) {
        this.speed = Math.round(currentSpeed * 1.6);
    }
}

const ford = new Car('Ford', 120);
console.log(ford.speedUS);
ford.speedUS = 75;
console.log(ford.speed);