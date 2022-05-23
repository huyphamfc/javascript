'use strict'


const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
const eurToUsd = 1.1;

const movementsUSD = movements.map(item => item * eurToUsd);
console.log(movementsUSD);

const movementsUSD_loop = [];
for (const item of movements) movementsUSD_loop.push(item * eurToUsd);
console.log(movementsUSD_loop);

const movementsDescriptions = movements.map(
    (mov, i) => `Movements ${i + 1}: You ${mov > 0 ? 'depsited' : 'withdrew'} ${Math.abs(mov)}`
);
// const movementsDescriptions = movements.map((mov, i) => {
//     if (mov > 0) return `Movement ${i + 1}: You deposited ${mov}`;
//     else return `Movement ${i + 1}: You withdrew ${Math.abs(mov)}`;
// });
console.log(movementsDescriptions);