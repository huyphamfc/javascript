# Array.prototype.sort()

Sort the elements of an array **in place** (mutate array) and returns the sorted array.

If `compareFunction` is NOT supplied:

- Non-`undefined` elements are sorted by converting them to strings and comparing strings in UTF-16 code units order.

- `undefined` elements are sorted to the end of the array.

If `compareFunction` is supplied:

- Non-`undefined` elements are sorted according to the return value of the compare function.

- `undefined` elements are sorted to the end of the array.

**Syntax**

```js
// Functionless
sort();

// Arrow function
sort((a, b) => {
  //
});

// Compare function
sort(compareFn);

// Inline compare function
sort(function compareFn(a, b) {
  //
});
```

**Example**

```js
const arr = [1, -2, 3, 5, undefined, 4, 3, 7, 6];

// Ascending
console.log(arr.sort((a, b) => a - b)); // [ -2, 1, 3, 3, 4, 5, 6, 7, undefined ]

// Descending
console.log(arr.sort((a, b) => b - a)); // [ 7, 6, 5, 4, 3, 3, 1, -2, undefined ]

/*
sort(a, b){
    if (a > b) return 1; // sort a after b
    if (a < b) return -1; // sort a before b
    return 0; // keep original order of a and b
}
*/
```
