'use strict'


// const hello = async () => 'Hello';
// console.log(hello); // AsyncFunction
// console.log(hello()); // Promise

const greet = new Promise(resolve => setTimeout(() => resolve('Hello The Fuck World'), 3000));

const hello = () => {
    console.log(greet); // Promise { <pending> }
    console.log('Hihi');
}

const helloAsync = async () => {
    const result = await greet;
    console.log(result); // Hello The Fuck World
    console.log('Hihi');
}

hello();
helloAsync();