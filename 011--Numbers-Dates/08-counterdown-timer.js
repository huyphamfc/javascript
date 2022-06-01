'use strict'

const hr = document.querySelector('.hour');
const min = document.querySelector('.minute');
const sec = document.querySelector('.second');
const remaining = document.querySelector('.remain');

setInterval(() => {
    const now = new Date();
    hr.textContent = now.getHours();
    min.textContent = now.getMinutes();
    sec.textContent = now.getSeconds();
}, 1000);

let remainingTime = 10;
const timer = setInterval(() => {
    const minute = String(Math.floor(remainingTime / 60)).padStart(2, 0);
    const second = String(remainingTime % 60).padStart(2, 0);
    remaining.textContent = `${minute}: ${second}`;
    if (remainingTime === 0) clearInterval(timer);
    remainingTime--;
}, 1000);