'use strict'

// CREATE A DATE
console.log(new Date());

console.log(new Date('December 24, 2022')); // Sat Dec 24 2022 00:00:00 GMT+0700 (Indochina Time)

console.log(new Date(2022, 1, 2, 22, 22, 22)); // 2022-02-02T15:22:22.000Z

console.log(new Date(0)); // 1970-01-01T00:00:00.000Z


// WORKING WITH DATES
const future = new Date(2022, 11, 24, 19, 30);
console.log(future); // 2022-12-24T12:30:00.000Z
console.log(future.getFullYear()); // 2022
console.log(future.getMonth()); // 11
console.log(future.getDate()); // 24
console.log(future.getDay()); // 6 - Saturday
console.log(future.getHours()); // 19
console.log(future.getMinutes()); // 30
console.log(future.toISOString()); //2022-12-24T12:30:00.000Z
console.log(future.getTime()); // 1671885000000

console.log(Date.now()); // 1653973052460