'use strict'

const paragraph = document.querySelector('.content');
const button = document.querySelector('.btn');

button.addEventListener('click', function () {
    paragraph.innerHTML = 'The content after changing';
});