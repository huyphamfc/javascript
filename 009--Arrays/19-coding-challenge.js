'use strict'

const account1 = {
    owner: 'Huy Pham',
    movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
    interestRate: 1.2,
    pin: 1111,
};

const account2 = {
    owner: 'Jessica Davis',
    movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
    interestRate: 1.5,
    pin: 2222,
};

const account3 = {
    owner: 'Steven Thomas Williams',
    movements: [200, -200, 340, -300, -20, 50, 400, -460],
    interestRate: 0.7,
    pin: 3333,
};

const account4 = {
    owner: 'Sarah Smith',
    movements: [430, 1000, 700, 50, 90],
    interestRate: 1,
    pin: 4444,
};

const accounts = [account1, account2, account3, account4];


const bankDepositSum = accounts
    .flatMap(acc => acc.movements)
    .filter(mov => mov > 0)
    .reduce((sum, mov) => sum + mov, 0);
console.log(bankDepositSum);

const numDeposits1000 = accounts
    .flatMap(acc => acc.movements)
    .reduce((count, mov) => mov > 1000 ? ++count : count, 0);
console.log(numDeposits1000);

const { deposit, withdraw } = accounts
    .flatMap(acc => acc.movements)
    .reduce((total, val) => {
        total[val > 0 ? 'deposit' : 'withdraw'] += val;
        return total;
    }, { deposit: 0, withdraw: 0 });
console.log(deposit, withdraw);