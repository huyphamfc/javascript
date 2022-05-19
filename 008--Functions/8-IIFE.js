// Immediately Invoked Function Expressions

'use strict'

const runOnce = function () {
    console.log('This will never run again');
}
runOnce();

(function () { console.log('Immediately Invoked Function Expressions') })();

(() => console.log('Immediately Invoked Function Expressions - Arrow Function'))();

{ const privateVariable = 999 }
console.log(privateVariable); // privateVariable is not defined