'use strict'

const arr = [7, 8, 9];
const newArr = [1, 2, ...arr];
console.log(newArr); // [ 1, 2, 7, 8, 9 ]


// PASS ARGUMENT INTO FUNCTIONS
console.log(1, 2, 7, 8, 9); // 1 2 7 8 9
console.log(...newArr); // 1 2 7 8 9

const restaurant = {
    name: 'Huy Restaurant',
    starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Salad'],
    mainMenu: ['Rice', 'Pizza', 'Pasta'],
    orderPasta: function (ingredient1, ingredient2, ingredient3) {
        console.log(`Here is your delicious pasta with ${ingredient1}, ${ingredient2}, and ${ingredient3}`);
    }
};
const newMenu = [...restaurant.mainMenu, 'Gnocci'];
console.log(newMenu); // [ 'Rice', 'Pizza', 'Pasta', 'Gnocci' ]


// JOIN 2 ARRAYS
const mainMenuCopy = [...restaurant.mainMenu];
const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];


// ITERABLES
const str = 'Huy';
const letters = [...str, 'Pham'];
console.log(letters); // [ 'H', 'u', 'y', 'Pham' ]


// COPY OBJECTS
const restaurantCopy = { ...restaurant };