'use strict'

const arr = [1, 2, 3, 4, 5];
console.log(arr.flatMap(val => [val * 2])); // [ 2, 4, 6, 8, 10 ]
/*
    [ [2], [4], [6], [8], [10] ]

        \/

    [ 2, 4, 6, 8, 10 ]
*/