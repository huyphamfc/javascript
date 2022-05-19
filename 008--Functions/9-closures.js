'use strict'

const secureBooking = function () {
    let passengerCount = 0;
    return function () {
        passengerCount++;
        console.log(`${passengerCount} passengers`);
    }
}
const booker = secureBooking();
booker(); // 1 passenger
booker(); // 2 passenger


// Example 1
let f;
const g = function () {
    const a = 23;
    f = function () {
        console.log(a * 2);
    }
}
const h = function () {
    const b = 20;
    f = function () {
        console.log(b * 2);
    }
}
g();
f(); // 46
h();
f(); // 40
console.dir(f); // [Function: f]


// Example 2
const boardPassengers = function (n, wait) {
    const perGroup = n / 3;
    setTimeout(function () {
        console.log(`We are now boarding all ${n} passengers`);
        console.log(`There are 3 groups, each with ${perGroup} passengers`);
    }, wait * 1000);
    console.log(`Will start boarding in ${wait} seconds`);
}
boardPassengers(180, 3);
/*
Will start boarding in 3 seconds
We are now boarding all 180 passengers
There are 3 groups, each with 60 passengers
*/

/*
setTimeout(function () {
    console.log('Timer');
}, 1000);
*/