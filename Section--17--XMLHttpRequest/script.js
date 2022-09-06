'use strict'


const getData = country => {
    const res = new XMLHttpRequest();
    res.open('GET', `https://restcountries.com/v3.1/name/${country}`);
    res.send();

    res.addEventListener('load', () => {
        const [data] = JSON.parse(res.responseText);
        console.log(data.name.common, data?.borders);
        data?.borders.forEach(country => {
            const res = new XMLHttpRequest();
            res.open('GET', `https://restcountries.com/v3.1/name/${country}`);
            res.send();

            res.addEventListener('load', () => {
                const [data] = JSON.parse(res.responseText);
                console.log(data.name.common, data?.borders);
                data?.borders.forEach(country => {
                    const res = new XMLHttpRequest();
                    res.open('GET', `https://restcountries.com/v3.1/name/${country}`);
                    res.send();

                    res.addEventListener('load', () => {
                        const [data] = JSON.parse(res.responseText);
                        console.log(data.name.common, data?.borders);
                    });
                });
            });
        });
    });
}

getData('canada');