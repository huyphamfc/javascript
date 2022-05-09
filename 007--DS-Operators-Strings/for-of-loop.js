'use strict'

const restaurant = {
    name: 'Huy Restaurant',
    starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Salad'],
    mainMenu: ['Rice', 'Pizza', 'Pasta']
};

const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];

for (const item of menu) console.log(item);

for (const item of menu.entries()) console.log(item);

console.log(menu.entries()); // Object [Array Iterator] {}

for (const item of menu.entries()) {
    console.log(`${item[0] + 1}: ${item[1]}`);
}

for (const [i, el] of menu.entries()) {
    console.log(`${i + 1}: ${el}`);
}