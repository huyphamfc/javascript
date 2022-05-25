# Array.prototype.filter()

The **filter()** method **create a new array** with all elements that pass the test implemented by the provided function.

**Syntax**

```js
filter(function (element) {
  //
});

filter(function (element, index) {
  //
});

filter(function (element, index, array) {
  //
});

filter(function (element, index, array) {
  //
}, thisArg);
```

Example

```js
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

const deposits = movements.filter((mov) => mov > 0);
// const deposits = movements.filter(mov => { if (mov > 0) return mov; });
console.log(deposits);

const depositsForOf = [];
for (const mov of movements) if (mov > 0) depositsForOf.push(mov);
console.log(depositsForOf);

const withdrawals = movements.filter((mov) => mov < 0);
console.log(withdrawals);
```
