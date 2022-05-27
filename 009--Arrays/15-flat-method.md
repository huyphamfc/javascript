# Array.prototype.flat()

Create a new array with all sub-array elements concatenated into it recursively upp to the specified depth.

**Syntax**

```js
flat();
flat(depth); // depth: how deep a nested array structure should be flattened, default by 1
```

**Example**

```js
const arr = [[1, 2, 3], [4, 5, 6], 7, 8];
const arrDeep = [[[1, 2], 3], [4, 5, 6], 7, 8];

console.log(arr.flat()); // [ 1, 2, 3, 4, 5, 6, 7, 8 ]
console.log(arrDeep.flat()); // [ [ 1, 2 ], 3, 4, 5, 6, 7, 8 ]
console.log(arrDeep.flat(2)); // [ 1, 2, 3, 4, 5, 6, 7, 8 ]

const sum = arr.flat().reduce((sum, val) => sum + val, 0);
console.log(sum); // 36
```
