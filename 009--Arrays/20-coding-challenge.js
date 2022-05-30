/*
Julia and Kate are still studying dogs, and this time they are studying if dogs are eating too much or too little.
Eating too much means the dog's current food portion is larger than the recommended portion, and eating too little is the opposite.
Eating an okay amount means the dog's current food portion is within a range 10% above and 10% below the recommended portion (see hint).

1. Loop over the array containing dog objects, and for each dog, calculate the recommended food portion and add it to the object as a new property. Do NOT create a new array, simply loop over the array.
    Formula: recommendedFood = weight**0.75*28 (the result is in grams of food, and the weight needs to be in kg)
2. Find Sarah's dog and log to the console whether it's eating too much or too little. Hint: some dogs have multiple owners, so you first need to find Sarah in the owners array, and so this one is a bit tricky (on purpose).
3. Create an array containing all owners of dogs who eat too much ('ownersEatTooMuch') and an array with all owners of dogs who eat too little ('ownersEatTooLittle').
4. Log a string to the console for each array created in 3., like this: "Matilda and Alice and Bob's dogs eat too much!" and "Sarah and John and Michael's dogs eat too little!".
5. Log to the console whether there is any dog eating EXACTLY the amount of food that is recommended (just true or false).
6. Log to the console whether there is any dog eating an OKAY amount of food (just true or false).
7. Create an array containing the dogs array and sort it by recommended food portion in an ascending order (keep in mind that the portions are inside the array's objects).
8. Create a shallow copy of the dogs array and sort it by recommended food portion in an ascending order (keep in mind  that the portions are inside the array's objects).

TEST CASE:
    const dogs = [
        { weight: 22, curFood: 250, owners: ['Alice', 'Bob'] },
        { weight: 8, curFood: 200, owners: ['Matilda'] },
        { weight: 13, curFood: 275, owners: ['Sarah', 'John'] },
        { weight: 32, curFood: 340, owners: ['Michael'] }
    ];
*/


'use strict'


const dogs = [
    { weight: 22, curFood: 250, owners: ['Alice', 'Bob'] },
    { weight: 8, curFood: 200, owners: ['Matilda'] },
    { weight: 13, curFood: 275, owners: ['Sarah', 'John'] },
    { weight: 32, curFood: 340, owners: ['Michael'] }
];

dogs.forEach(dog => dog.recFood = Math.round(dog.weight ** 0.75 * 28));

dogs.find(dog => {
    if (dog.owners.includes('Sarah'))
        console.log(`Sarah's dog is eating ${dog.curFood > dog.recFood ? 'too much.' : 'too little.'}`);
});

const ownersEatTooMuch = dogs.filter(dog => dog.curFood > dog.recFood).flatMap(dog => dog.owners);
const ownersEatTooLittle = dogs.filter(dog => dog.curFood < dog.recFood).flatMap(dog => dog.owners);
console.log(ownersEatTooMuch);
console.log(ownersEatTooLittle);
console.log(`${ownersEatTooMuch.join(' and ')}'s dog eat too much!`);
console.log(`${ownersEatTooLittle.join(' and ')}'s dog eat too little!`);

console.log(dogs.some(dog => dog.curFood === dog.recFood));

const isOkay = dog => dog.curFood >= dog.recFood * 0.9 && dog.curFood <= dog.recFood * 1.1;
console.log(dogs.some(dog => isOkay(dog) === true));
console.log(dogs.filter(dog => isOkay(dog) === true));

const sortedDogs = dogs.slice().sort((a, b) => a.recFood - b.recFood);
console.log(sortedDogs);