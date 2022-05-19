'use strict'

const currencies = new Map([
    ['USD', 'United States Dollar'],
    ['EUR', 'Euro'],
    ['GBP', 'Pound Sterling']
]);
currencies.forEach(function (key, value) {
    console.log(`${key}: ${value}`);
})

const uniqueCurrencies = new Set(['USD', 'EUR', 'GBP', 'EUR']);
console.log(uniqueCurrencies);
uniqueCurrencies.forEach(function (val) {
    console.log(val);
})