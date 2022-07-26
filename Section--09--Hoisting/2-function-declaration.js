'use strict'


// lift the declaration to the top of the scope (because of hoisting)
console.log(sum(1, 2)); // 3
function sum(a, b) {
    return a + b;
}