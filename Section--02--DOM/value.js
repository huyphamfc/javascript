'use strict'

const userName = document.querySelector('#username');
const password = document.querySelector('#password');
const btn = document.querySelector('.btn');
const bulb = document.querySelector('.img');
const noti = document.querySelector('.notifi');

btn.addEventListener('click', function () {
    if (userName.value === password.value) {
        bulb.src = "img/pic_bulbon.gif";
        noti.innerHTML = 'The Bulb is turned ON';
    } else {
        noti.innerHTML = 'Wrong Password!!!';
        userName.disabled = true;
        password.disabled = true;
        btn.disabled = true;
    }
})