'use strict'


const firstPromise = new Promise(resolve => setTimeout(() => resolve([1, 2]), 2000));
const secondPromise = new Promise(resolve => setTimeout(() => resolve([3, 4, 5]), 3000));


Promise
    .all([firstPromise, secondPromise]) // return [Array(2), Array(3)]
    .then(([arr_1, arr_2]) => console.log(arr_1.concat(arr_2)));