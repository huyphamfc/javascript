'use strict'


const arr = [1, 2, 3, 4, 5];

Array.prototype.mapHuyPham = function (callbackFunction) {
    const lengthOfArray = this.length;
    const newArr = [];
    for (let i = 0; i < lengthOfArray; i++)
        newArr.push(callbackFunction(this[i], i, this));
    return newArr;
}

const huyPro = arr.mapHuyPham((element => 2 * element));
console.log(huyPro);