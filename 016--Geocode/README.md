# Where am I?

Build a function 'whereAmI' which renders a country ONLY based on GPS coordinates. For that, you will use a second API to geocode coordinates.

Create a function 'whereAmI' which takes as inputs a latitude value (lat) and a longitude (lng) (there are GPS coordinates, examples are below).

Do 'reverse geocoding' of the provided coordinates to a meaningful location, like a city and country name. Use this API to do reverse geocoding: [Geocode](https://geocode.xyz/api).

The AJAX call will be done to a URL with this format: https://geocode.xyz/`${lat},${lng}`?geoit=json. Use fetch API and promises to get the data.

Once you have the data, take a look at it in the console to see all the attributes that you received about the provided location. Then, using this data, log a message like this to the console: 'You are in New York, USA'.

Chain a catch() method to the end of the promise chain and log errors to the console.

This API allows you to make only 3 requests per second. If you reload fast, you will get this error with code 403. This is an error with the request. Remember, fetch() does NOT reject the promise yourself, with a meaningful error message.
