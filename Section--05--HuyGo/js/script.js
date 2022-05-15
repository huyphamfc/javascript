/**
 * Taxi Cost Calculation Web Application
 * 
 * HuyBike:
 *      First 1km: 10 USD
 *      Next 1km: 7 USD
 *      Every 1km after the first 20km: 5 USD
 *      Every 3 waiting min: 2 USD
 * 
 * HuyBus:
 *      First 1km: 12 USD
 *      Next 1km: 8 USD
 *      Every 1km after the first 20km: 10 USD
 *      Every 3 waiting min: 3 USD
 * 
 * HuyCar:
 *      First 1km: 15 USD
 *      Next 1km: 12 USD
 *      Every 1km after the first 20km: 9 USD
 *      Every 3 waiting min: 5 USD
 */

'use strict'

const bikeFee = [10, 7, 5, 2];
const busFee = [12, 8, 10, 3];
const carFee = [15, 12, 9, 5];
let vehicle;

const distance = document.querySelector('#distance');
const waitTime = document.querySelector('#waitTime');
const bike = document.querySelector('#bike');
const bus = document.querySelector('#bus');
const car = document.querySelector('#car');
const cost = document.querySelector('.form__cost-value');

const cal = document.querySelector('.btn--cta');
const rs = document.querySelector('.btn--rs');

const chooseVehicle = function () {
    if (bike.checked) vehicle = bikeFee;
    if (bus.checked) vehicle = busFee;
    if (car.checked) vehicle = carFee;
}

const calculateDistanceFee = function () {
    const [firstKM, before20Km, after20Km] = vehicle;
    if (distance.value <= 1) return firstKM;
    if (distance.value <= 20) return firstKM + (distance.value - 1) * before20Km;
    return firstKM + 19 * before20Km + (distance.value - 20) * after20Km;
}

const calculateWaitingFee = function () {
    const [, , , waiting] = vehicle;
    return (Math.round(waitTime.value / 3) * waiting);
}

const calculateTotalCost = (distanceFee, waitTimeFee) => distanceFee + waitTimeFee;

cal.addEventListener('click', function () {
    if (!distance.value) alert('Please enter the number of distance!');
    if (!waitTime.value) alert('Please enter the number of waiting time!');
    chooseVehicle();
    if (!vehicle) alert('Please choose the vehicle!');
    cost.textContent = calculateTotalCost(calculateDistanceFee(), calculateWaitingFee()) + '$';
});

rs.addEventListener('click', function () {
    distance.value = '';
    waitTime.value = '';
    bike.checked = false;
    bus.checked = false;
    car.checked = false;
    cost.textContent = '';
});