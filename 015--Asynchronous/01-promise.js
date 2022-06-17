'use strict'


const promise = new Promise((resolve, reject) => {
    const num = Math.round(Math.random());
    num > 0 ? resolve('success') : reject('failure');
});

promise
    .then(value => console.log(`Promise was ${value}`))
    .catch(error => console.log(`Promise was ${error}`))
    .finally(() => console.log('Promise was done'));