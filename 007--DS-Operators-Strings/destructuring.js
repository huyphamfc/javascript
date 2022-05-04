'use strict'


const arr = [2, 3, 4];
const a = arr[0];
const b = arr[1];
const c = arr[2];

// DESTRUCTURING ARRAYS
const [x, y, z] = arr; // destructuring assignment
console.log(x, y, z); // 2 3 4
console.log(arr); // [2,3,4] => NOT destroy array (only unpacking)


const restaurant = {
    name: 'Huy Restaurant',
    location: 'HCM, VietNam',
    categories: ['Vietnamese', 'Pizzeria', 'Vegetarian', 'Organic'],
    starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Salad'],
    mainMenu: ['Rice', 'Pizza', 'Pasta'],
    openingHours: {
        thu: { open: 12, close: 22 },
        fri: { open: 11, close: 23 },
        sat: { open: 0, close: 24 }
    },
    order: function (starterIndex, mainIndex) {
        return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
    },
    // orderDelivery: function (obj) {
    //     console.log(obj);
    // }
    orderDelivery: function ({ starterIndex = 1, mainIndex = 0, time = '20:00', address }) {
        console.log(`Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`);
    }
};

const [first, second] = restaurant.categories;
console.log(first, second); // Vietnamese Pizzeria

let [main, , secondary] = restaurant.categories
console.log(main, secondary); // Vietnamese Vegetarian

[main, secondary] = [secondary, main]; // switching variables
console.log(main, secondary); // Vegetarian Vietnamese

// Receive 2 return values from a function
console.log(restaurant.order(2, 0)); // ['Garlic Bread', 'Rice']
const [starter, mainer] = restaurant.order(2, 0);
console.log(starter, mainer); // Garlic Bread Rice

// Nested Destructuring (destructuring inside of destructuring)
const nested = [2, 4, [5, 6]];
const [i, , j] = nested;
console.log(i, j); // 2 [ 5, 6 ]
const [d, , [e, f]] = nested;
console.log(d, e, f); // 2 5 6

// Setting default values
const [p, q, r] = [8, 9];
console.log(p, q, r); // 8 9 undefined
const [m = 1, n = 1, o = 1] = [8, 9];
console.log(m, n, o); // 8 9 1


// DESTRUCTURING OBJECTS
const { name, openingHours, categories } = restaurant;
console.log(name, openingHours, categories);

// Dealing with third-party data
const {
    name: restaurantName,
    openingHours: hours,
    categories: tags
} = restaurant;
console.log(restaurantName, hours, tags);

// Setting default object properties
const { menu = [], starterMenu: starters = [] } = restaurant;
console.log(menu, starters);

// Mutating variables
let t = 111;
let u = 999;
const obj = { t: 23, u: 7, v: 14 };
// { t, u } = obj; // unexpected token => can NOT assign anything to a code block
({ t, u } = obj);
console.log(t, u); // 23 7

// Nested Objects
const { fri } = openingHours;
console.log(fri); // { open: 11, close: 23 }
const { fri: { open: op, close: cl } } = openingHours;
console.log(op, cl); // 11 23

// Passing an object into the function as an argument
restaurant.orderDelivery({
    time: '22:30',
    address: 'LamDong',
    starterIndex: 2,
    mainIndex: 2
});