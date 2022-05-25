# Array.prototype.reduce()

The final result of running the reducer across all elements of the array is a single value.

**Syntax**

```js
reduce(function (previousValue, currentValue) {
  //
});

reduce(function (previousValue, currentValue, currentIndex) {
  //
});

reduce(function (previousValue, currentValue, currentIndex, array) {
  //
});

reduce(function (previousValue, currentValue, currentIndex, array) {
  //
}, initialValue);
```

Example

```js
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

let sum = 0;
for (const mov of movements) sum += mov;
console.log(sum);

const balance = movements.reduce((sum, mov, i) => {
  console.log(`Iteration ${i}: ${sum}`);
  return sum + mov;
}, 0);
/*
Iteration 0: 0
Iteration 1: 200
Iteration 2: 650
Iteration 3: 250
Iteration 4: 3250
Iteration 5: 2600
Iteration 6: 2470
Iteration 7: 2540
*/
console.log(balance);
```

```js
const maximum = movements.reduce((max, mov) => {
  if (mov > max) return mov;
  return max;
}, movements[0]);
console.log(maximum);
```
