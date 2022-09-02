'use strict'


const navbar = document.querySelector('.navbar');
const nav__brand = document.querySelector('.nav__brand');
const nav = document.querySelector('.nav');
const nav__item = document.querySelectorAll('.nav__item');
const nav__link = document.querySelectorAll('.nav__link');


['mouseover', 'mouseout']
    .forEach(event =>
        nav.addEventListener(event, e => {
            if (e.target.classList.contains('nav__link')) {
                e.target.closest('.nav').classList.toggle('text--gray');
                // nav.classList.toggle('text--gray');
                e.target.classList.toggle('text--blue');
            }
        })
    );

// ['mouseover', 'mouseout']
//     .forEach(event =>
//         nav__link.forEach(item =>
//             item.addEventListener(event, e => {
//                 e.target.closest('.nav').classList.toggle('text--gray');
//                 item.classList.toggle('text--blue');
//             })
//         )
//     );