'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');


const render = function (data) {
    const html = `
    <article class="country">
        <img class="country__img" src="${data.flags.svg}" />
        <div class="country__data">
            <h3 class="country__name">${data.name.common}</h3>
            <h4 class="country__region">${data.region}</h4>
            <p class="country__row"><span>👫</span>${(data.population / 1000000).toFixed(1)}M people</p>
            <p class="country__row"><span>🗣️</span>${Object.values(data.languages)}</p>
            <p class="country__row"><span>💰</span>${Object.keys(data.currencies)}</p>
        </div>
    </article>
    `
    countriesContainer.insertAdjacentHTML('beforeend', html);
    countriesContainer.style.opacity = '1';
}

const renderError = function (message) {
    countriesContainer.insertAdjacentText('beforeend', message);
    countriesContainer.style.opacity = '1';
}

const getJSON = function (url, message = 'Something went wrong.') {
    return fetch(url).then(response => {
        if (!response.ok) throw new Error(`${message} Country not found ${response.status}`);
        return response.json();
    });
}

const getCountryData = function (country) {
    const request = new XMLHttpRequest();
    request.open('GET', `https://restcountries.com/v3.1/name/${country}`);
    request.send();

    request.addEventListener('load', function () {
        const [data] = JSON.parse(this.responseText);
        // console.log(data);
        render(data);
    });
}

const getCountryAndNeighbor = function (country) {
    const request = new XMLHttpRequest();
    request.open('GET', `https://restcountries.com/v3.1/name/${country}`);
    request.send();
    request.addEventListener('load', function () {
        const [data] = JSON.parse(this.responseText);
        render(data);
        data.borders?.forEach(item => getCountryData(item));
    });
}

const getCountryDataPromise = function (country) {
    getJSON(`https://restcountries.com/v3.1/name/${country}`, 'Country not found.')
        .then(data => {
            render(...data);
            const neighbor = data[0].borders?.[0];
            if (!neighbor) throw new Error('No neighbor found');
            return getJSON(`https://restcountries.com/v3.1/name/${neighbor}`, 'Country not found.');
        })
        .then(data => render(data))
        .catch(error => renderError(`Something went wrong. ${error.message}. Try again!`));
}

btn.addEventListener('click', function () { getCountryDataPromise('australia') });