'use strict'


const promise = new Promise(resolve => resolve(1));

const count = value =>
    new Promise(resolve =>
        setTimeout(() => {
            console.log(value);
            resolve(++value);
        }, 1000));

promise
    .then(count)
    .then(count)
    .then(count)
    .catch(error => console.log(error));