'use strict'

const ordersSet = new Set([
    'Pasta',
    'Pizza',
    'Pizza',
    'Risotto',
    'Pasta',
    'Pizza'
]);
console.log(ordersSet); // Set(3) { 'Pasta', 'Pizza', 'Risotto' }
console.log(ordersSet.size); // 3
console.log(ordersSet.has('Pizza')); // true
ordersSet.add('Garlic Bread');
ordersSet.add('Garlic Bread'); // ignored
ordersSet.delete('Risotto');
console.log(ordersSet); // Set(3) { 'Pasta', 'Pizza', 'Garlic Bread' }
ordersSet.clear(); // Set(0) {} 
for (const item of ordersSet) console.log(item); // Pasta Pizza Garlic Bread


const staff = ['Waiter', 'Chef', 'Waiter', 'Manager', 'Chef', 'Waiter'];
const uniqueStaff = new Set(staff); // Set(3) { 'Waiter', 'Chef', 'Manager' }
const uniqueStaff_2 = [...new Set(staff)]; // [ 'Waiter', 'Chef', 'Manager' ]


console.log(new Set('Huy')); // Set(3) { 'H', 'u', 'y' }
console.log(new Set('Huy').size); // 3