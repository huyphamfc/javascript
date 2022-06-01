'use strict'

// setTimeout
const coins = ['Bitcoin', 'Ethereum'];
const coinTime = setTimeout((coin_1, coin_2) => console.log(`Here are your coins. ${coin_1} and ${coin_2}.`), 5000, ...coins);
console.log('Waiting...');
/*
    Waiting...
    Here are your coins. Bitcoin and Ethereum.
*/
if (coins.includes('Ethereum')) clearTimeout(coinTime); // Waiting...


// setInterval
setInterval(() => console.log(new Date()), 1000);