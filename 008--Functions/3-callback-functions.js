'use strict'

const oneWord = function (str) {
    return str.replace(/ /g, '').toLowerCase();
}

const upperFirstWord = function (str) {
    const [first, ...others] = str.split(' ');
    return [first.toUpperCase(), ...others].join(' ');
}

// Higher-order function
const transformer = function (str, fn) {
    console.log(`Original string: ${str}`);
    console.log(`Transformed string: ${fn(str)}`);
    console.log(`Transformed string: ${fn.name}`);
}

transformer('JavaScript is the best!', oneWord);
/*
Original string: JavaScript is the best!
Transformed string: javascriptisthebest!
Transformed string: oneWord
*/

transformer('JavaScript is the best!', upperFirstWord);
/*
Original string: JavaScript is the best!
Transformed string: JAVASCRIPT is the best!
Transformed string: upperFirstWord
*/