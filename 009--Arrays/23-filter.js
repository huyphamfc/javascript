'use strict'


const arr = [1, 2, 3, 4, 5];

Array.prototype.filterHuyPham = function (callbackFunction) {
    const lengthOfArray = this.length;
    const newArr = [];
    for (let i = 0; i < lengthOfArray; i++)
        if (callbackFunction(this[i], i, this)) newArr.push(this[i]);
    return newArr;
}

const newArr = arr.filterHuyPham(value => value > 3);
console.log(newArr);