'use strict'


const arr = [1, 2, 3, 4, 5];

Array.prototype.reduceHuyPham = function (callbackFunction, initialValue) {
    let lengthOfArray = this.length;
    let previousValue;
    let i;

    if (initialValue) {
        i = 0;
        previousValue = initialValue;
    } else {
        i = 1;
        previousValue = this[0];
    }

    for (i; i < lengthOfArray; i++)
        previousValue = callbackFunction(previousValue, this[i], i, this)
    return previousValue;
}

console.log(arr.reduceHuyPham(((max, value) => value > max ? value : max), 10));
console.log(arr.reduce(((max, value) => value > max ? value : max), 10));