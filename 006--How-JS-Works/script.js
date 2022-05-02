'use strict';

// SCOPE
function calcAge(birthYear) {
    const age = 2037 - birthYear;
    function printAge() {
        let output = `${firstName}, you are ${age}, born in ${birthYear}`;
        console.log(output);
        if (birthYear >= 1981 && birthYear <= 1996) {
            var millenial = true;
            const firstName = 'Steven';
            output = 'NEW OUTPUT!';
            const str = `Oh, and you're a millenial, ${firstName}`;
            console.log(str);
            function add(a, b) {
                return a + b;
            }
        }
        console.log(millenial);
        console.log(output);
    }
    printAge();
    return age;


    // HOISTING & TDZ
    console.log(variable); // variable is not defined
    console.log(me); // undefined
    console.log(job); // Cannot access 'job' before initialization
    console.log(year); // Cannot access 'year' before initialization
    var me = 'Baby';
    let job = 'Dev';
    const year = 2020;

    console.log(addDeclaration(1, 2)); // OK
    console.log(addExpression(1, 2)); // Cannot access 'addExpression' before initialization
    console.log(addArrow(1, 2)); // Cannot access 'addArrow' before initialization
    console.log(addArrow_2(1, 2)); // 'addArrow_2' is not a function
    function addDeclaration(a, b) {
        return a + b;
    }
    const addExpression = function (a, b) {
        return a + b;
    }
    const addArrow = (a, b) => {
        a + b;
    }
    var addArrow_2 = (a, b) => {
        a + b;
    }

    if (!numProducts) deleteShoppingCart(); // All products deleted
    var numProducts = 10;
    function deleteShoppingCart() {
        console.log('All products deleted');
    }

    var x = 1;
    const y = 2;
    let z = 3;
    console.log(x === window.x); // true
    console.log(y === window.y); // false
    console.log(z === window.z); // false