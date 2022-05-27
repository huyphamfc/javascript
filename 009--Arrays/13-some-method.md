# Array.prototype.some()

Return `true`, if the array has at least one element that passes the test implemented by the provided function. Otherwise, it returns `false`.

**Syntax**

```js
some(function (element) {
  //
});

some(function (element, index) {
  //
});

some(function (element, index, array) {
  //
});

some(function (element, index, array) {
  //
}, thisArg);
```

**Example**

```js
const arr = [2, 5, 8, 1, 4];
console.log(arr.some((val) => val > 1)); // true
console.log(arr.some((val) => val < 1)); // false
```
