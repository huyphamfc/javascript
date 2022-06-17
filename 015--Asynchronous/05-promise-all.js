'use strict'


const promise_1 = Promise.resolve('Success');
const promise_2 = Promise.reject('Failure');

const firstPromise = new Promise(resolve => setTimeout(() => resolve([1, 2]), 2000));
const secondPromise = new Promise(resolve => setTimeout(() => resolve([3, 4, 5]), 5000));


promise_1
    .then(value => console.log(value))
    .catch(error => console.log(error));

promise_2
    .then(value => console.log(value))
    .catch(error => console.log(error));


Promise.all([firstPromise, secondPromise])
    .then(result => {
        const [arr_1, arr_2] = result;
        console.log(arr_1.concat(arr_2));
    })