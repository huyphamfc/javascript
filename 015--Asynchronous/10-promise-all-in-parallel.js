'use strict'


const callPromise = ms =>
    new Promise(resolve =>
        setTimeout(() =>
            resolve(`Promise ${ms / 1000}s`), ms))
        .then(result => {
            console.log(`${result} is done!`);
            return result;
        });

// acts like synchronous
const asyncFunction = async () => {
    await callPromise(3000);
    await callPromise(2000);
    await callPromise(1000);
}

// respect the order of the returning value
const asyncFunctionPromiseAll = async () => {
    const arr = await Promise.all([callPromise(3000), callPromise(2000), callPromise(1000)]);
    console.log('The returning value order of the Promise.all():');
    arr.forEach(value => console.log(value));
}

//============================================================================================

const getJSON = country =>
    fetch(`https://restcountries.com/v3.1/name/${country}`)
        .then(data => data.json())
        .then(data => {
            const [{ capital }] = data;
            console.log(...capital);
            return capital[0];
        })
        .catch(err => {
            console.log(err.message);
            return err.message;
        });

const get3CountryCapitals = (c1, c2, c3) => {
    getJSON(c1);
    getJSON(c2);
    getJSON(c3);
}

const get3CountryCapitalsAsyncAwait = async (c1, c2, c3) => {
    await getJSON(c1);
    await getJSON(c2);
    await getJSON(c3);
}

const get3CountryCapitalsPromiseAll = async (c1, c2, c3) => {
    try {
        const arr = await Promise.all([getJSON(c1), getJSON(c2), getJSON(c3)]);
        console.log(arr);
    } catch (err) {
        console.log(err);
    }
}

//============================================================================================

// callPromise(3000);
// callPromise(2000);
// callPromise(1000);

asyncFunction();

// asyncFunctionPromiseAll();
// console.log('Promises are run in parallel:');

//---------------------------------------------------------

// get3CountryCapitals('usa', 'vn', 'singapore');
// get3CountryCapitalsAsyncAwait('usa', 'vn', 'singapore');
// get3CountryCapitalsPromiseAll('usa', 'vn', 'singapore');