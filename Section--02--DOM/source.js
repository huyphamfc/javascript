'use strict'

const light = document.querySelector('.light');
const btn_on = document.querySelector('.btn-on');
const btn_off = document.querySelector('.btn-off');

btn_on.addEventListener('click', function () {
    light.src = "img/pic_bulbon.gif";
})

btn_off.addEventListener('click', function () {
    light.src = "img/pic_bulboff.gif";
})