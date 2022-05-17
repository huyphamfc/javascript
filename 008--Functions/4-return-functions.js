'use strict'

const greet = function (greeting) {
    return function (name) {
        console.log(`${greeting} ${name}`);
    }
}

const arrowGreet = greeting => name => console.log(`${greeting} ${name}`);

const greeterHey = greet('Hey');
greeterHey('Huy'); // Hey Huy
greet('Hello')('Harry'); // Hello Harry

arrowGreet('Halo')('Arrow Function');