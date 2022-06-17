'use strict'


const promise_1 = Promise.resolve('Success');
const promise_2 = Promise.reject('Failure');

promise_1
    .then(value => console.log(value))
    .catch(error => console.log(error));

promise_2
    .then(value => console.log(value))
    .catch(error => console.log(error));