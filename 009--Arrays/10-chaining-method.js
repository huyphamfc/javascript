'use strict'

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// convert the deposit from EUR to USD
const EUR_TO_USD = 1.2;
const totalDepositUSD = movements
    .filter(mov => mov > 0)
    .map(mov => mov * EUR_TO_USD)
    .reduce((total, value) => total + value, 0);
console.log(totalDepositUSD);