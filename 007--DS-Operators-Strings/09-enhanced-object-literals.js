'use strict'

const openingHours = {
    thu: { open: 12, close: 22 },
    fri: { open: 11, close: 23 },
    sat: { open: 0, close: 24 }
}

const restaurant = {
    name: 'Huy Restaurant',
    starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Salad'],
    mainMenu: ['Rice', 'Pizza', 'Pasta'],
    // ES6 enhanced object literals
    openingHours,
    orderPizza(mainIngredient, ...otherIngredient) {
        console.log(mainIngredient);
        console.log(otherIngredient);
    }
}