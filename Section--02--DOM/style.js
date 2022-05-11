'use strict'

const paragraph = document.querySelector('.content');
const button = document.querySelector('.btn');

button.addEventListener('click', function () {
    paragraph.innerHTML = 'The text is red';
    paragraph.style.color = 'red';
});