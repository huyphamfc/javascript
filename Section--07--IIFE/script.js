/*
- a function is only executed once (disappears after it's called once - async/await)
- data defined inside a scope is private ( data encapsulation & privacy)
- protect variables from being overwritten by other parts (external scripts, libraries)
 */


'use strict'


const Car = {
    cars: [],
    addCar(car) {
        this.cars.push(car);
    },
    editCar(index, car) {
        this.cars[index] = car;
    },
    deleteCar(index) {
        this.cars.splice(index, 1);
    }
}

const privateCar = (() => {
    const cars = [];
    return {
        addCar(car) {
            cars.push(car);
        },
        editCar(index, car) {
            cars[index] = car;
        },
        deleteCar(index) {
            cars.splice(index, 1);
        },
        getCar(index) {
            return cars[index];
        }
    }
})();