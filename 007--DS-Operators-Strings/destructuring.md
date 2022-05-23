# Destructuring Assignment

- ES6 feature
- A way of unpacking values from an array or an object

## 1. Array Destructuring

### 1.1. Basic variable assignment

```js
const nums = [1, 2, 3];
const [red, green, blue] = nums;
/*
const red = nums[0];
const green = nums[1];
const blue = nums[2];
*/
console.log(red, green, blue); // 1 2 3
```

### 1.2. Assignment separate from declaration

```js
let a, b;
[a, b] = [1, 2];
console.log(a, b); // 1 2
```

If the number of variables on the left of the assignment is greater than the length of the array, the values of the remaining variables will be `undefined`.

```js
const nums = [1, 2, 3];
const [red, green, blue, yellow] = nums;
console.log(red, green, blue, yellow); // 1 2 3 undefined
```

### 1.3. Default values

A variable can be assigned a default, in the case that the value unpacked from the array is `undefined`.

```js
const nums = [1, 2, 3];
const [red = 4, green = 5, blue = 6, yellow = 7] = nums;
console.log(red, green, blue, yellow); // 1 2 3 7
```

### 1.4. Swapping variables

Two variables values can be swapped in one destructuring expression.

```js
let a = 1;
let b = 2;
[a, b] = [b, a];
console.log(a, b); // 2 1
```

### 1.5. Parsing an array returned from a function

```js
const returnArray = () => [1, 2];
let a, b;
[a, b] = returnArray();
console.log(a, b); // 1 2
```

### 1.6. Ignoring some return values

```js
const returnArray = () => [1, 2, 3];
let a, b;
[a, , b] = returnArray();
console.log(a, b); // 1 3
```

### 1.7. Assigning the rest of an array

When destructuring an array, you can unpack and assign the remaining part of it to a variable using the rest pattern.

```js
const [a, ...b] = [1, 2, 3];
console.log(a, b); // 1 [ 2, 3 ]
```

## 2. Object Destructuring

### 2.1. Basic assignment

```js
const person = {
  firstName: "Huy",
  lastName: "Pham",
};
const { firstName, lastName } = person;
/*
const firstName = person.firstName;
const lastName = person.lastName;
*/
console.log(firstName, lastName); // Huy Pham
```

### 2.2. Assignment separate from declaration

```js
let a, b;
{ a, b } = { a: 1, b: 2 };
/*
unexpected token '='
{ a, b } is a code block
can NOT assign anything to a code block
*/
({ a, b } = { a: 1, b: 2 });
/*
as const { a, b } = { a: 1, b: 2 };
the parentheses (...) expression needs to be preceded by a semicolon or it may be used to execute a function on the previous line
*/
console.log(a, b); // 1 2
```

### 2.3. Assigning to new variable names

A property can be unpacked from an object and assigned to a variable with a different name than the object property.

```js
const o = { p: 42, q: true };
const { p: foo, q: bar } = o;
/*
const foo = o.p
const bar = o.q
*/
console.log(foo, bar); // 42 true
```

### 2.4. Default values

```js
const { a = 10, b = 5 } = { a: 3 };
console.log(a, b); // 3 5
```

### 2.5. Assigning to new variable names and providing default values

A property can be both unpacked from an object and assigned to a variable with a different name, assigned a default value in case the unpacked value is `undefined`.

```js
const { a: aa = 1, b: bb = 2 } = { a: 9 };
console.log(aa, bb); // 9 2
```

### 2.6. Unpacking properties from objects passed as a function parameter

Objects passed into function parameters can also be unpacked into variables.

```js
const user = {
  id: 42,
  displayName: "hp",
  fullName: {
    firstName: "Huy",
    lastName: "Pham",
  },
};
```

```js
function userID({ id }) {
  return id;
}
/*
const { id } = user;
const id = user.id;
*/
console.log(userID(user)); // 42
```

```js
function userName({ fullName: { firstName: name } }) {
  console.log(`He is ${name}`);
}
/*
const name = user.fullName.firstName;
*/
userName(user); // He is Huy
```

### 2.7. Setting a function parameter's default value

```js
function drawChart({
  size = "big",
  coords = { x: 0, y: 0 },
  radius = 25,
} = {}) {
  console.log(size, coords, radius);
}
/*
the destructured left-hand side is assigned to an empty object literal on the right-hand side to ensure an object is passed to the function
*/

drawChart({ coords: { x: 18, y: 30 } });
// big { x: 18, y: 30 } 25
```

### 2.8. Nested object and array destructuring

```js
const metadata = {
  title: "Scratchpad",
  translations: [
    {
      locale: "de",
      url: "/de/docs/Tools/Scratchpad",
      title: "JavaScript-Umgebung",
    },
  ],
};

const {
  title: englishTitle,
  translations: [{ title: localeTitle }],
} = metadata;
/*
const englishTitle = metadata.title;
const localeTitle = metadata.translations[0].title;
*/

console.log(englishTitle); // Scratchpad
console.log(localeTitle); // JavaScript-Umgebung
```

### 2.9. for of iteration and destructuring

```js
const people = [
  {
    name: "Mike Smith",
    family: {
      mother: "Jane Smith",
      father: "Harry Smith",
      sister: "Samantha Smith",
    },
    age: 35,
  },
  {
    name: "Tom Jones",
    family: {
      mother: "Norah Jones",
      father: "Richard Jones",
      brother: "Howard Jones",
    },
    age: 25,
  },
];

for (const {
  name,
  family: { father },
} of people) {
  console.log(`Name: ${name}, Father: ${father}`);
}

// "Name: Mike Smith, Father: Harry Smith"
// "Name: Tom Jones, Father: Richard Jones"
```

### 2.10. Rest in Object Destructuring

```js
let { a, b, ...rest } = { a: 10, b: 20, c: 30, d: 40 };
console.log(a, b, rest); // 10 20 { c: 30, d: 40 }
```
