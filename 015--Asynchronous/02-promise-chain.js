'use strict'


const promise = new Promise(resolve => resolve('Action ...'));

promise
    .then(value => {
        console.log(value);
        return new Promise(resolve => setTimeout(() => resolve(1), 3000));
    })
    .then(value => {
        console.log(value);
        return ++value;
    })
    .then(value => {
        console.log(value);
        return ++value;
    })
    .then(value => {
        console.log(value);
        return ++value;
    })
    .catch(error => console.log(error))
    .finally(() => console.log('Done'));