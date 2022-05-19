/*
Take the IIFE below and at the end of the function, attach an even listener that changes that color of the selected h1 element to blue, each time the body element is clicked. Do NOT select the h1 element again!

And now explain to yourself (or someone around you) WHY this worked? Take all the time you need. Think about WHEN exactly the callback function is executed, and what that means for the variables involved in this example.
*/


'use strict';

(function () {
    const header = document.querySelector('h1');
    header.style.color = 'red';

    document.querySelector('body').addEventListener('click', function () {
        header.style.color = 'blue';
    })
})();