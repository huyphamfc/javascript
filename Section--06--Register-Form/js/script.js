'use strict'


const firstName = document.querySelector('#firstName');

const firstNameWarning = document.querySelector('.warning--firstName');

const btn = document.querySelector('.form__btn');

const pattern = /huyphamfc/ig;


firstName.addEventListener('focus', function () {
    firstNameWarning.textContent = 'Enter first name';
});

btn.addEventListener('click', function (e) {
    e.preventDefault();
    if (pattern.test(firstName.value)) {
        firstNameWarning.textContent = '';
        return;
    }
    firstNameWarning.textContent = 'Wrong Name!';
    firstNameWarning.style.color = '#ff0000';
});