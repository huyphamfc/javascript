'use strict'

const arr = [1, -2, 3, 5, undefined, 4, 3, 7, 6];

// Ascending
console.log(arr.sort((a, b) => a - b)); // [ -2, 1, 3, 3, 4, 5, 6, 7, undefined ]

// Descending
console.log(arr.sort((a, b) => b - a)); // [ 7, 6, 5, 4, 3, 3, 1, -2, undefined ]

/*
sort(a, b){
    if (a > b) return 1; // sort a after b
    if (a < b) return -1; // sort a before b
    return 0; // keep original order of a and b
}
*/