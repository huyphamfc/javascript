'use strict'

console.log('Synchronous 1');

setTimeout(() => console.log('Asynchronous 5'), 2000);

setTimeout(() => console.log('Asynchronous 3'), 0);

Promise.resolve('Asynchronous 4').then(data => setTimeout(() => console.log(data), 1000));

Promise.resolve('Asynchronous 1').then(data => console.log(data));

Promise.resolve('Asynchronous 2').then(data => {
    for (let i = 0; i < 1000000000; i++) { }
    console.log(data);
})

console.log('Synchronous 2');