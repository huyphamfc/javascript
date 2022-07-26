'use strict'


// Behind the scenes code is scanned for variable declarations before it is executed


console.log(age); // undefined
console.log(nickName); // ReferenceError: nickName is not defined
var age = 0;
/*
lift the declaration to the top of the scope (because of hoisting)
var age;
console.log(age);
age = 0;
*/