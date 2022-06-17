'use strict'


const promise = new Promise(resolve => resolve(1));

const printValue = value => {
    console.log(value);
    return ++value;
}

promise
    .then(printValue)
    .then(printValue)
    .then(() => new Promise((_, reject) => reject('Promise was rejected')))
    .then(printValue)
    .then(printValue)
    .catch(error => console.log(error));