// Importing Module


console.log('Importing Module');


// import {
//     addToCart,
//     totalPrice as price,
//     quantity
// } from "./shoppingCart.js";
// console.log(shippingCost); // can not do it
// addToCart('iPhone', 999);
// console.log(price, quantity);


// import * as ShoppingCart from "./shoppingCart.js";
// ShoppingCart.addToCart('Macbook Pro M2', 69);
// console.log(ShoppingCart.quantity);


// import add from './shoppingCart.js';
// add('AirPods Pro', 1);


// const res = await fetch(`https://jsonplaceholder.typicode.com/posts`);
// const data = await res.json();
// console.log(data);


// import * as ShoppingCart from './shoppingCart.js';

// const getLastPost = async function () {
//     const res = await fetch(`https://jsonplaceholder.typicode.com/posts`);
//     const data = await res.json();
//     return { title: data.at(-1).title, text: data.at(-1).body }
// }
// const lastPost = await getLastPost();
// console.log(lastPost);


const ShoppingCart = (function () {
    const cart = [];
    const shippingCost = 10;
    const totalPrice = 237;
    const totalQuantity = 23;

    const addToCart = function (product, quantity) {
        cart.push({ product, quantity });
        console.log(`${quantity} ${product}(s) added to cart`);
    }
    const orderStock = function (product, quantity) {
        cart.push({ product, quantity });
        console.log(`${quantity} ${product}(s) added to cart`);
    }

    return {
        addToCart,
        cart,
        totalPrice,
        totalQuantity
    }
})();
ShoppingCart.addToCart('iPhone', 99);