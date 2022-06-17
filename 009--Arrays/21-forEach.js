'use strict'


const arr = [1, 2, 3, 4, 5];

Array.prototype.forEachHuyPham = function (callbackFunction) {
    const lengthOfArray = this.length;
    for (let i = 0; i < lengthOfArray; i++)
        callbackFunction(this[i], i, this);
}

arr.forEachHuyPham(element => console.log(element));
arr.forEachHuyPham((element, index) => console.log(index));
arr.forEachHuyPham((element, index, array) => console.log(array));