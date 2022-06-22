'use strict'


const callPromise = ms =>
    new Promise(resolve =>
        setTimeout(() =>
            resolve(ms), ms))
        .then(time => time);

const timeout = sec =>
    new Promise((_, reject) =>
        setTimeout(() =>
            reject(new Error('Request took too long!')), sec))
        .catch(err => err.message);

const promiseRace = async () => {
    const whichIsFastest = await Promise.race([
        callPromise(2000),
        callPromise(1000),
        callPromise(3000)
    ]);
    console.log(`The fastest is: ${whichIsFastest}`);
}

const promiseRaceTimeout = async () =>
    Promise.race([callPromise(3000), timeout(1000)])
        .then(res => console.log(res))
        .catch(err => console.log(err.message));


// promiseRace();
// promiseRaceTimeout();