'use strict'


const whereAmI = (lat, lng) => {
    fetch(`https://geocode.xyz/${lat},${lng}?geoit=json`)
        .then(response => {
            if (!response.ok) throw new Error(`${response.status}`);
            return response.json();
        })
        .then(data => {
            const html = `
            <h1>You are in ${data.city}, ${data.country}</h1>
            `
            document.body.insertAdjacentHTML('beforeend', html);
        })
        .catch(error => {
            const html = `
            <h1>Problem with geocoding ${error.message}</h1>
            `
            document.body.insertAdjacentHTML('beforeend', html);
        });
}

whereAmI(11.58752367952947, 108.07765944185911);
whereAmI(10.779975203390855, 106.69898671081647);
whereAmI(40.69428610288223, -74.04460211900906);