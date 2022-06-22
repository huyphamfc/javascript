'use strict'


const callPromise = ms =>
    new Promise(resolve =>
        setTimeout(() =>
            resolve(ms), ms))
        .then(time => time);

const promiseRace = async () => {
    const whichIsFastest = await Promise.race([
        callPromise(2000),
        callPromise(1000),
        callPromise(3000)
    ]);
    console.log(`The fastest is: ${whichIsFastest}`);
}

promiseRace();