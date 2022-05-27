'use strict'

const arr = [1, 2, 3, 4, 5];
console.log(arr.every(val => val > 0)); // true
console.log(arr.every(val => val < 0)); // false