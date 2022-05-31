'use strict'

console.log(23 === 23.0); // true
console.log(0.1 + 0.2 === 0.3); // false


// CONVERT STRING TO NUMBER
const variable = +'9999';
console.log(typeof variable); // number


// PARSE STRING TO NUMBER
console.log(Number.parseInt('100px', 10)); // 100
console.log(Number.parseInt('js2022', 10)); // NaN
console.log(Number.parseInt('1011', 2)); // 11

console.log(Number.parseInt(2.5)); // 2
console.log(Number.parseFloat(2.5)); // 2.5


// CHECK NUMBER
// check if value is NaN
console.log(Number.isNaN('20')); // false
console.log(Number.isNaN(25 / 0)); // false - infinity

// check if value is number
console.log(Number.isFinite(20)); //true
console.log(Number.isFinite('20')); // false
console.log(Number.isFinite(+'20')); // true
console.log(Number.isFinite(20 / 0)); // false

console.log(Number.isInteger(20)); // true
console.log(Number.isInteger(20.5)); // false
console.log(Number.isInteger(20 / 0)); // false