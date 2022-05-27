# Array.prototype.every()

Return `true` if all elements in the array pass the test implemented by the provided function. Otherwise, it returns `false`.

**Syntax**

```js
every(function (element) {
  //
});

every(function (element, index) {
  //
});

every(function (element, index, array) {
  //
});

every(function (element, index, array) {
  //
}, thisArg);
```

**Example**

```js
const arr = [1, 2, 3, 4, 5];
console.log(arr.every((val) => val > 0)); // true
console.log(arr.every((val) => val < 0)); // false
```
