# Array.prototype.findIndex()

Return the **index** of the first element in the array **that satisfies the provided testing function**. Otherwise, it returns `-1`, indicating that no element passed the test.

**Syntax**

```js
findIndex(function (element) {
  //
});

findIndex(function (element, index) {
  //
});

findIndex(function (element, index, array) {
  //
});

findIndex(function (element, index, array) {
  /* ... */
}, thisArg);
```

**Example**

```js
const arr = [5, 12, 8, 130, 44];
const result = arr.findIndex((val) => val > 10);
console.log(result); // 1
```
