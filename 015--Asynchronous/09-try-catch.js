'use strict'


// const x = 1;
// let y = 0;
// x = y; // Assignment to constant variable


try {
    const x = 1;
    let y = 0;
    x = y;
    console.log(x);
} catch (err) {
    console.log(`${err.message} What a bullshit :(`);
}