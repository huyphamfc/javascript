// Exporting Module


console.log('Exporting Module');


// Blocking Code
console.log('Start fetching users');
await fetch(`https://jsonplaceholder.typicode.com/posts`);
console.log('Finish fetching users');


const shippingCost = 10;
const cart = [];
const totalPrice = 237;
const totalQuantity = 23;


// named export
export const addToCart = function (product, quantity) {
    cart.push({ product, quantity });
    console.log(`${quantity} ${product}(s) added to cart`);
}

export { totalPrice, totalQuantity as quantity };


// default export (no name)
export default function (product, quantity) {
    cart.push({ product, quantity });
    console.log(`${quantity} ${product}(s) added to cart`);
}