'use strict'

let arr = ['a', 'b', 'c', 'd', 'e'];

// SLICE
console.log(arr.slice(2)); // ['c', 'd', 'e']
console.log(arr.slice(2, 4)); // ['c', 'd']
console.log(arr.slice(-2)); // ['d', 'e']
console.log(arr.slice(1, -2)); // ['b', 'c']
console.log(arr.slice()); // ['a', 'b', 'c', 'd', 'e']

// SPLICE
console.log(arr.splice(4)); // ['e']
console.log(arr); // ['a', 'b', 'c', 'd']
console.log(arr.splice(-1)); // ['d']
console.log(arr); // ['a', 'b', 'c']
console.log(arr.splice(1, 2)); // ['b', 'c']
console.log(arr); // ['a']


// RESERVE
arr = ['a', 'b', 'c', 'd', 'e'];
const arr_2 = ['j', 'i', 'h', 'g', 'f'];
console.log(arr_2.reverse()); // ['f', 'g', 'h', 'i', 'j']
console.log(arr_2); // ['f', 'g', 'h', 'i', 'j']

// CONCAT
const letters = arr.concat(arr_2);
console.log(letters); // ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j']

// JOIN
console.log(letters.join('-')); // a-b-c-d-e-f-g-h-i-j