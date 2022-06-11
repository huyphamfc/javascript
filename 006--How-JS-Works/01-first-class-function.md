# First-class Function

Functions are treated as variables.

A function:

- can be assigned as a value to a variable

- can be passed as an argument to other functions

- can be returned by another function

## Assign a function to a variable

```js
// an anonymous function
const greet = function () {
  console.log("Hello");
};

// invoke the anonymous function using 'greet' variable
greet();
```

## Pass a function as an argument

```js
const sayHello = () => "Hello";

// pass sayHello() function as an argument to 'greet' function
const greet = (sayHello, firstName) =>
  console.log(`${sayHello()}, ${firstName}!`);

greet(sayHello, "Huy");
```

## Return a function

```js
const sayHello = () => () => console.log("Hello");

const myFunction = sayHello();
myFunction(); // using a variable
sayHello()(); // using a parentheses
```
