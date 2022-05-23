'use strict'

const restaurant = {
    name: 'Huy Restaurant',
    starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Salad'],
    mainMenu: ['Rice', 'Pizza', 'Pasta'],
    openingHours: {
        thu: { open: 12, close: 22 },
        fri: { open: 11, close: 23 },
        sat: { open: 0, close: 24 }
    }
}

console.log(restaurant.openingHours.mon.open); // uncaught Type Error
console.log(restaurant.openingHours.mon?.open); // undefined
console.log(restaurant.openingHours?.mon?.open); // undefined

const days = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];
for (const day of days) {
    const open = restaurant.openingHours[day]?.open ?? 'closed'; // nullish coalescing operator
    console.log(`${day}, we open at ${open}`);
}

/**
mon, we open at closed
tue, we open at closed
wed, we open at closed
thu, we open at 12
fri, we open at 11
sat, we open at 0
sun, we open at closed
 */

console.log(restaurant.order?.(0, 1) ?? 'Method does NOT exist');


const users = [{ name: 'Huy', email: 'dev@huy.com' }];
console.log(users.name ?? 'User array is empty');