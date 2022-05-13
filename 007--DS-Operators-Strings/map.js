'use strict'

const rest = new Map();
rest.set('name', 'Classico Italiano');
rest.set(1, 'Firenze, Italy');
rest.set(2, 'Lisbon, Portugal');
rest
    .set('categories', ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'])
    .set('open', 11)
    .set('close', 23)
    .set(true, 'We are open')
    .set(false, 'We are closed');

console.log(rest.get('name')); // Classico Italiano
const time = 21;
console.log(rest.get(time >= rest.get('open') && time <= rest.get('close'))); // We are open

console.log(rest);
console.log(rest.size); // 8

rest.set([1, 2], 'Test');
console.log(rest.get([1, 2])); // undefined
const arr = [1, 2];
rest.set(arr, 'Test');
console.log(rest.get(arr)); // Test

rest.clear();