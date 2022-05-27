'use strict'

const arr = [2, 5, 8, 1, 4];

console.log(arr.some(val => val > 1)); // true
console.log(arr.some(val => val < 1)); // false