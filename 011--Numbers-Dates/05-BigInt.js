'use strict'

console.log(2 ** 53 - 1); // 9007199254740991

console.log(Number.MAX_SAFE_INTEGER); // 9007199254740991

console.log(2 ** 53 + 8); // 9007199254741000

console.log(BigInt(123456789123456789)); // 123456789123456784n

console.log(20n > 15); // true
console.log(20n === 20); // false
console.log(typeof 20n); // bigint