'use strict'


const arr = [1, 2, 3, 4, 5];

Array.prototype.reduceHuyPham = function (callbackFunction, previous = this[0]) {
    const lengthOfArray = this.length;
    let result = previous;
    for (let i = 0; i < lengthOfArray; i++)
        result = callbackFunction(result, this[i], i, this);
    return result;
}

console.log(arr.reduceHuyPham((sum, value) => sum + value, 10));