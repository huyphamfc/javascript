'use strict'

const bill = document.querySelector('#bill');
const split = document.querySelector('#split');
const select = document.querySelector('#select');
let tip = document.querySelector('#tip');
let total = document.querySelector('#total');
let person = document.querySelector('#person');
const btn = document.querySelector('.btn');

btn.addEventListener('click', function () {
    split.value ||= 1;
    let tipRate = 0;
    if (select.value === 'A') tipRate = 0.2;
    if (select.value === 'B') tipRate = 0.15;
    if (select.value === 'C') tipRate = 0.1;
    if (select.value === 'D') tipRate = 0.05;
    tip.value = Math.round(100 * bill.value * tipRate) / 100;
    total.value = Math.round(100 * bill.value * (1 + tipRate)) / 100;
    person.value = Math.round(100 * total.value / split.value) / 100;
})