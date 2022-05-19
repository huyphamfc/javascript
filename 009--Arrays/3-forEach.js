'use strict'

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

for (const [i, movement] of movements.entries()) {
    if (movement > 0) console.log(`Moment ${i + 1}: You deposited ${movement}`);
    else console.log(`Moment ${i + 1}: You withdraw ${Math.abs(movement)}`);
}

movements.forEach(function (movement) {
    if (movement > 0) console.log(`You deposited ${movement}`);
    else console.log(`You withdraw ${Math.abs(movement)}`);
});

movements.forEach(function (mov, i) {
    if (mov > 0) console.log(`Moment ${i + 1}: You deposited ${mov}`);
    else console.log(`Moment ${i + 1}: You withdraw ${Math.abs(mov)}`);
});