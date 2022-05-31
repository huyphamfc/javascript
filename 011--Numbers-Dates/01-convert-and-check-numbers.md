# Converting and Checking Number

## parseInt()

Parse a string argument and return an integer of the specified radix.

- `2`: convert from a binary number
- `10`: convert from a decimal number
- `16`: convert from a hexadecimal number

**Syntax**

```js
parseInt(string)
parseInt(string, radix)
`
```

**Example**

```js
console.log(Number.parseInt("100px", 10)); // 100
console.log(Number.parseInt("js2022", 10)); // NaN
console.log(Number.parseInt("1011", 2)); // 11
```

## isFinite()

**isFinite()** is a function property of the global project. Using this function to determine whether a number is a finite number.

**Syntax**

```js
isFinite(testValue);
```

**Example**

```js
console.log(Number.isFinite(20)); //true
console.log(Number.isFinite("20")); // false
console.log(Number.isFinite(+"20")); // true
console.log(Number.isFinite(20 / 0)); // false
```
