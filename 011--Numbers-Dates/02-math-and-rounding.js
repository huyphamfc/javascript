'use strict'

console.log(Math.sqrt(25)); // 5
console.log(25 ** 0.5); // 5

console.log(Math.max(1, 6, 2, 4, 3, 5)); // 6
console.log(Math.max(1, 6, '2', 4, 3, 5)); // 6
console.log(Math.max(1, 6, 2, '4px', 3, 5)); // NaN
console.log(Math.min(1, 6, 2, 4, 3, 5)); // 1

console.log(Math.PI); // 3.141592653589793

const randomInt = (min, max) => Math.round(Math.random() * (max - min) + 1) + min;
console.log(randomInt(10, 20));


// ROUNDING INTEGERS
console.log(Math.trunc(24.5)); // 24
console.log(Math.round(24.5)); // 25

console.log(Math.ceil(23.3)); // 24
console.log(Math.ceil(23.9)); // 24

console.log(Math.floor(23.3)); // 23
console.log(Math.floor(23.9)); // 23
console.log(Math.floor(-23.9)); // -24


// ROUNDING DECIMALS
console.log((2.7).toFixed(0)); // 3 - string
console.log(+(2.345).toFixed(2)); // 2.35 - number