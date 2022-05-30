'use strict'

const x = new Array(7);
console.log(x); // [ <7 empty items> ]

x.fill(1, 3, 5);
console.log(x); // [ <3 empty items>, 1, 1, <2 empty items> ]

x.fill(1);
console.log(x); // [ 1, 1, 1, 1, 1, 1, 1 ]

const y = Array.from({ length: 7 }, () => 1);
console.log(y); // [ 1, 1, 1, 1, 1, 1, 1 ]

const z = Array.from({ length: 7 }, (_, i) => i + 1);
console.log(z); // [ 1, 2, 3, 4, 5, 6, 7 ]