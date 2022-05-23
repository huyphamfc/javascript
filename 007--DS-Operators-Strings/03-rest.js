'use strict'

// spread (on the RIGHT side of "=")
const arr = [1, 2, ...[3, 4]];
console.log(arr); // [ 1, 2, 3, 4 ]


// DESTRUCTURING
// Rest (on the LEFT side of "=")
const [a, b, ...others] = [1, 2, 3, 4];
console.log(a, b); // 1 2
console.log(others); // [ 3, 4 ]

// Rest must be the last element
const restaurant = {
    name: 'Huy Restaurant',
    starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Salad'],
    mainMenu: ['Rice', 'Pizza', 'Pasta'],
    openingHours: {
        thu: { open: 12, close: 22 },
        fri: { open: 11, close: 23 },
        sat: { open: 0, close: 24 }
    },
    orderPizza: function (mainIngredient, ...otherIngredient) {
        console.log(mainIngredient);
        console.log(otherIngredient);
    }
};
const [pizza, , risotto, ...otherFood] = [...restaurant.mainMenu, ...restaurant.starterMenu];
console.log(pizza, risotto, otherFood); // Rice Pasta [ 'Focaccia', 'Bruschetta', 'Garlic Bread', 'Salad' ]

// Objects
const { sat, ...weekdays } = restaurant.openingHours;
console.log(weekdays); // { thu: { open: 12, close: 22 }, fri: { open: 11, close: 23 } }


// FUNCTIONS
const add = function (...numbers) {
    let sum = 0;
    for (let i = 0; i < numbers.length; i++) sum += numbers[i];
    console.log(sum);
}
add(1, 2); // 3
add(1, 2, 3); // 6
add(1, 2, 3, 4, 5); // 15

restaurant.orderPizza('mushrooms', 'onion', 'olives', 'spinach');
// mushrooms [ 'onion', 'olives', 'spinach' ]