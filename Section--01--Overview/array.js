/**
 * A given array: arr = [3,-6,8,-9,-4,5,12]
 * 
 * - Calculate sum of all elements in the array
 * - Find out the element has maximum negative value (index?, value?)
 * - Calculate sum of all elements has value that is a odd number
 * - Find out the maximum value and its index
 */

'use strict'

// const arr = [3, -6, 8, -9, -4, 5, 12];
const arr = [3, -4, 12, 4, 12];

const calculateSum = (arr) => {
    let sum = 0;
    for (const item of arr) {
        sum += item;
    }
    return sum;
}

const maxNegative = (arr) => {
    let max;
    let first;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < 0) {
            max = arr[i];
            first = i;
            break;
        }
    }
    if (!max) return `There is no negative number.`;
    if (first === arr.length - 1) return `Max is ${max} at ${first}`;
    for (let i = first + 1; i < arr.length; i++) {
        if (arr[i] < 0 && arr[i] > max) {
            max = arr[i];
            first = i;
        }
    }
    let maxArr = [];
    for (let i = first; i < arr.length; i++) {
        if (arr[i] === max) maxArr.push(i);
    }
    return `Max is ${max} at ${maxArr}`;
}

const calculateOddSum = (arr) => {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 !== 0) sum += arr[i];
    }
    return sum;
}

const maxElement = (arr) => {
    let max = arr[0];
    let index = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];
            index.push(i);
        }
    }
    for (let i = index[0] + 1; i < arr.length; i++) {
        if (arr[i] === max) index.push(i);
    }
    return [max, index];
}

console.log(calculateSum(arr));
console.log(maxNegative(arr));
console.log(calculateOddSum(arr));
console.log(maxElement(arr));