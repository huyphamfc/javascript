'use strict'


const navbar = document.querySelector('.navbar');
const nav__brand = document.querySelector('.nav__brand');
const nav = document.querySelector('.nav');
const nav__item = document.querySelectorAll('.nav__item');


const clickHandler = e => {
    console.log(e.currentTarget.tagName);
}

[navbar, nav__brand, nav, ...nav__item]
    .forEach(
        item => item
            .addEventListener(
                'click',
                clickHandler.bind(this)
            )
    );