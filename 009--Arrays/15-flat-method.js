'use strict'

const arr = [[1, 2, 3], [4, 5, 6], 7, 8];
const arrDeep = [[[1, 2], 3], [4, 5, 6], 7, 8];

console.log(arr.flat()); // [ 1, 2, 3, 4, 5, 6, 7, 8 ]
console.log(arrDeep.flat()); // [ [ 1, 2 ], 3, 4, 5, 6, 7, 8 ]
console.log(arrDeep.flat(2)); // [ 1, 2, 3, 4, 5, 6, 7, 8 ]

const sum = arr.flat().reduce((sum, val) => sum + val, 0);
console.log(sum); // 36