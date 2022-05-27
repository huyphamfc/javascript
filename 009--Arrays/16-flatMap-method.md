# Array.prototype.flatMap()

flatMap() is identical to a `map` followed by a call to `flat` of `depth 1`.

**Syntax**

```js
flatMap(function (currentValue) {
  //
});

flatMap(function (currentValue, index) {
  //
});

flatMap(function (currentValue, index, array) {
  //
});

flatMap(function (currentValue, index, array) {
  //
}, thisArg);
```

**Example**

```js
const arr = [1, 2, 3, 4, 5];
console.log(arr.flatMap((val) => [val * 2])); // [ 2, 4, 6, 8, 10 ]
/*
    [ [2], [4], [6], [8], [10] ]

        \/

    [ 2, 4, 6, 8, 10 ]
*/
```
